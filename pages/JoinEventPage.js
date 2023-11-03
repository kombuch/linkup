import { StyleSheet, View } from 'react-native'
import React from 'react'

import LogoutButton from './components/LogoutButton'
import Logo from './components/Logo'

function JoinEventPage(props) {
  const { goBack } = props
  return (
    <View style={styles.container}>
      <Logo />
      <LogoutButton goBack={goBack} />
    </View>
  )
}

export default JoinEventPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 100,
    gap: 30,
  },
  inputContainer: {
    gap: 5,
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    padding: 10,
    margin: 10,
  },
})
