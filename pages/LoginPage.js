import { Alert, StyleSheet, TextInput, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import Logo from './components/Logo'
import { getCurrentEmail, getCurrentPass, tryLogin } from './util/Storage'

function LoginPage(props) {
  const { navigate } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    getCurrentEmail().then((currentEmail) => {
      if (currentEmail !== null) {
        setEmail(currentEmail)
      }
    })
    getCurrentPass().then((currentPass) => {
      if (currentPass !== null) {
        setPassword(currentPass)
      }
    })
  }, []) // prevents this code from running on every render

  const loginFailAlert = () =>
    Alert.alert('Incorrect login', 'Please try again', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          tryLogin(email, password).then((success) => {
            if (success) {
              navigate('home')
            } else {
              loginFailAlert()
            }
          })
        }}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigate('createaccount')
        }}
      >
        <Text style={styles.text}>Create Account</Text>
      </Pressable>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154734',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  logoContainer: {
    backgroundColor: '#154734',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
