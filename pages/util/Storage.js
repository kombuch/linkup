import AsyncStorage from '@react-native-async-storage/async-storage'

/* Account Creation Code
    AsyncStorage.setItem(`${email}:name`, username)
    AsyncStorage.setItem(email, password)
    AsyncStorage.setItem('currentUser', email)
*/

export const getCurrentUsername = async () => {
  try {
    const email = await AsyncStorage.getItem('currentUser')
    if (email !== null) {
      const username = await AsyncStorage.getItem(`${email}:name`)

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
    if (email !== null) {
      const pass = await AsyncStorage.getItem(email)

      if (pass !== null) {
        console.log(`getCurrentPass: ${pass}`)
        return pass
      }
    }
  } catch (e) {
    // error reading value
  }
  return null
}

// return true if login is successful
export const tryLogin = async (email, pass) => {
  try {
    const realPass = await AsyncStorage.getItem(email)
    if (email !== null && realPass === pass) {
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
export const addEvent = async (eventName, eventTime, minuteDuration, eventLocation) => {
  try {
    const events = await getEvents()
    if (events == null) return false
    const hostName = await getCurrentUsername()
    events.push({
      id: events.length,
      eventName,
      eventTime,
      minuteDuration,
      creationTime: new Date(),
      eventLocation,
      usersAttending: [hostName],
      ratings: {},
      deleted: false,
      hostUsername: hostName,
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