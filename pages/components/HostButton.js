import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function HostButton(props) {
  const { navigate } = props
  return (
    <Pressable
      onPress={() => {
        navigate('host')
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>+</Text>
      </View>
    </Pressable>
  )
}

export default HostButton

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Gill Sans',
  },
  container: {
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#e87500',
  },
})
