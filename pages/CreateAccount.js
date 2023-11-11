import { StyleSheet, TextInput, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Logo from './components/Logo'
import { createAccount } from './util/Storage'
import AlertModal from './components/AlertModal'
import BackButton from './components/BackButton'

function LoginPage(props) {
  const { navigate } = props

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#003f5c"
            style={styles.inputText}
            value={username}
            onChangeText={setUsername}
          />
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
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.createButtonBG}
          onPress={() => {
            createAccount(username, email, password).then((error) => {
              if (error === 0) {
                navigate('login')
              } else if (error === 1) {
                setAlertMessage('Username already in use')
                setModalVisible(true)
              } else if (error === 2) {
                setAlertMessage('Email already in use')
                setModalVisible(true)
              } else {
                setAlertMessage('Error creating account')
                setModalVisible(true)
              }
            })
          }}
        >
          <Text style={styles.createButtonText}>Create</Text>
        </Pressable>
        <BackButton navigate={navigate} dest="login" />
      </View>
      <AlertModal
        message={alertMessage}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154734',
    gap: 50,
  },
  logoContainer: {
    backgroundColor: '#154734',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    flex: 3,
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
  bottomContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    gap: 30,
  },
  createButtonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Gill Sans',
  },
  createButtonBG: {
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#000',
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
