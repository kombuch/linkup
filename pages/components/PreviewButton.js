import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function PreviewButton(props) {
  const { onPress } = props
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.header}>Preview</Text>
      </View>
    </Pressable>
  )
}

export default PreviewButton

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Arial',
  },
  container: {
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#e87500',
  },
})
