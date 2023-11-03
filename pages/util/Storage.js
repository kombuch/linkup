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
  return 'USER'
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
  return 'EMAIL'
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
  return 'PASS'
}

// return true if login is successful
export const tryLogin = async (email, pass) => {
  try {
    const realPass = await AsyncStorage.getItem(email)
    if (email !== null && realPass === pass) {
      return true
    }
  } catch (e) {
    // error reading value
  }
  return false
}
