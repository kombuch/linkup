import AsyncStorage from '@react-native-async-storage/async-storage'

const currentVersion = '1.0'

// event methods
export const getUsers = async () => {
  try {
    const usersJson = await AsyncStorage.getItem('users')
    console.log(`usersJson: ${usersJson}`)
    if (usersJson != null) {
      console.log('non-Empty users')
      return JSON.parse(usersJson)
    }
    console.log('Empty users')
    return {}
  } catch (e) {
    // error reading value
  }
  return {}
}

// return true if wiped
export const wipeStorageIfOutdated = async () => {
  try {
    const version = await AsyncStorage.getItem('version')
    console.log(`version: ${version}`)
    if (version !== currentVersion) {
      console.log('non-Empty users')
      AsyncStorage.clear()
      await AsyncStorage.setItem('version', currentVersion)
      return true
    }
    return false
  } catch (e) {
    // error reading value
  }
  return false
}

// store users as objects in object indexed by email
// return 0 = success, 1 = username exists, 2 = email exists, 3 unknown error
export const createAccount = async (username, email, password) => {
  try {
    const users = await getUsers()
    console.log(`usersObj: ${JSON.stringify(users)}`)

    const newAccount = { username, password }

    const emails = Object.keys(users)

    for (let i = 0; i < emails.length; i += 1) {
      const key = emails[i]
      console.log(`user: ${users[key].username} vs ${username}`)
      if (users[key].username === username) return 1
      console.log(`user: ${key} vs ${email}`)
      if (key === email) return 2
    }

    users[email] = newAccount
    await AsyncStorage.setItem('users', JSON.stringify(users))
    await AsyncStorage.setItem('currentUser', email)

    return 0
  } catch (e) {
    console.log(e)
    // error reading value
    return 3
  }
}

export const getCurrentUsername = async () => {
  try {
    const email = await getCurrentEmail()
    if (email !== null) {
      const usersJson = await AsyncStorage.getItem('users')
      const users = JSON.parse(usersJson)
      const { username } = users[email]

      if (username !== null) {
        console.log(`getUsername: ${username}`)
        return username
      }
    }
  } catch (e) {
    // error reading value
  }
  return null
}

export const getCurrentEmail = async () => {
  try {
    const email = await AsyncStorage.getItem('currentUser')
    if (email !== null) {
      console.log(`getCurrentEmail: ${email}`)
      return email
    }
  } catch (e) {
    // error reading value
  }
  return null
}

export const getCurrentPass = async () => {
  try {
    const email = await AsyncStorage.getItem('currentUser')
    console.log(`getPassEmail: ${email}`)
    if (email !== null) {
      const usersJson = await AsyncStorage.getItem('users')
      const users = JSON.parse(usersJson)
      const { password } = users[email]

      console.log(`getPass: ${password}`)
      if (password !== null) {
        return password
      }
    }
  } catch (e) {
    console.log(e)
    // error reading value
  }
  return null
}

// return true if login is successful
export const tryLogin = async (email, pass) => {
  try {
    const usersJson = await AsyncStorage.getItem('users')
    const users = JSON.parse(usersJson)
    const { password } = users[email]
    if (password === pass) {
      AsyncStorage.setItem('currentUser', email)
      return true
    }
  } catch (e) {
    // error reading value
  }
  return false
}

// event methods
export const getEvents = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('events')
    console.log(`eventjson: ${jsonValue}`)
    if (jsonValue != null) {
      return JSON.parse(jsonValue, (name, value) => {
        if (
          typeof value === 'string' &&
          /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
        ) {
          return new Date(value)
        }
        return value
      })
    }
    return []
  } catch (e) {
    // error reading value
  }
  return []
}
export const addEvent = async (eventName, eventTime, eventEnd, eventLocation) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    const hostUsername = await getCurrentUsername()
    events.push({
      id: events.length,
      eventName,
      eventTime,
      eventEnd,
      eventLocation,
      usersAttending: [hostUsername],
      ratings: {},
      deleted: false,
      hostUsername,
    })
    const jsonValue = JSON.stringify(events)
    await AsyncStorage.setItem('events', jsonValue)
    return true
  } catch (e) {
    // saving error
  }
  return false
}
export const deleteEvent = async (eventId) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    events[eventId].deleted = true
    const jsonValue = JSON.stringify(events)
    await AsyncStorage.setItem('events', jsonValue)
    return true
  } catch (e) {
    // saving error
  }
  return false
}
export const attendEvent = async (eventId) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    events[eventId].usersAttending.push(await getCurrentUsername())
    const jsonValue = JSON.stringify(events)
    await AsyncStorage.setItem('events', jsonValue)
    return true
  } catch (e) {
    // saving error
  }
  return false
}

export const unAttendEvent = async (eventId) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    const curUser = await getCurrentUsername()
    events[eventId].usersAttending = events[eventId].usersAttending.filter(
      (user) => user !== curUser
    )
    delete events[eventId].ratings[await getCurrentUsername()]
    const jsonValue = JSON.stringify(events)
    await AsyncStorage.setItem('events', jsonValue)
    return true
  } catch (e) {
    // saving error
  }
  return false
}

export const rateEvent = async (eventId, fiveScore) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    events[eventId].ratings[await getCurrentUsername()] = fiveScore
    const jsonValue = JSON.stringify(events)
    await AsyncStorage.setItem('events', jsonValue)
    return true
  } catch (e) {
    // saving error
  }
  return false
}

const updateUserRating = async (username) => {
  try {
    const events = await getEvents()
    let total = 0
    let count = 0
    events.forEach((event) => {
      if (event.hostUsername === username) {
        const keys = Object.keys(event.ratings)
        keys.forEach((key) => {
          count += 1
          total += event.ratings[key]
          console.log(
            `${event.eventName} hosted by ${event.hostUsername} rated: ${event.ratings[key]} by ${key}`
          )
        })
      }
    })
    const key = `rating:${username}`
    if (count === 0) {
      await AsyncStorage.setItem(key, 'Host has no ratings yet')
    } else if (count === 1) {
      await AsyncStorage.setItem(
        key,
        `Host is rated ${Math.round((total / count) * 10) / 10} / 5 from ${count} rating`
      )
    } else {
      await AsyncStorage.setItem(
        key,
        `Host is rated ${Math.round((total / count) * 10) / 10} / 5 from ${count} ratings`
      )
    }
  } catch (e) {
    // saving error
  }
}

export const getUserRatingText = async (username) => {
  try {
    await updateUserRating(username)
    const key = `rating:${username}`
    const ratingText = await AsyncStorage.getItem(key)
    if (ratingText !== null) {
      return ratingText
    }
  } catch (e) {
    // error reading value
  }
  return 'no ratings yet'
}
