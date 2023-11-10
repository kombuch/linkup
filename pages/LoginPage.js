import { Alert, StyleSheet, TextInput, Text, View, Pressable, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from './components/Logo'
import { getCurrentEmail, getCurrentPass, tryLogin } from './util/Storage'
import AlertModal from './components/AlertModal'

function LoginPage(props) {
  const { navigate } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tapCount, setTapCount] = useState(0)
  const [alertMessage, setAlertMessage] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (tapCount > 5) {
      setTapCount(0)
      AsyncStorage.clear()
      setEmail('')
      setPassword('')
    }
  }, [tapCount])

  useEffect(() => {
    getCurrentEmail().then((currentEmail) => {
      if (currentEmail !== null) {
        setEmail(currentEmail)

        getCurrentPass().then((currentPass) => {
          if (currentPass !== null) {
            setPassword(currentPass)
          }
        })
      }
    })
  }, []) // prevents this code from running on every render

  return (
    <View style={styles.container}>
      <AlertModal
        message={alertMessage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Pressable
        onPress={() => {
          setTapCount((currentCount) => currentCount + 1)
        }}
      >
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </Pressable>
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
              setAlertMessage('Username or password is invalid')
              setModalVisible(true)
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
