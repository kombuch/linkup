import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function CreateButton(props) {
  const { onPress } = props
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.header}>Create</Text>
      </View>
    </Pressable>
  )
}

export default CreateButton

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Gill Sans',
  },
  container: {
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#e87500',
  },
})
