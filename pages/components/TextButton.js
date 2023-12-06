import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function TextButton(props) {
  const { onPress, text, error } = props
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.logoBG, error ? { borderColor: '#c93636', borderWidth: 3 } : {}]}>
        <Text style={styles.header}>{text}</Text>
      </View>
    </Pressable>
  )
}

export default TextButton

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Arial',
  },
  logoBG: {
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    width: 100,
    height: 45,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
})
