import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Logo() {
  return (
    <View style={styles.logoBG}>
      <Text style={styles.header}>Link Up</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Arial',
  },
  logoBG: {
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#e87500',
  },
})
