import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function BackButton(props) {
  const { navigate } = props
  return (
    <Pressable onPress={() => navigate('home')}>
      <View style={styles.logoBG}>
        <Text style={styles.header}>Back</Text>
      </View>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Gill Sans',
  },
  logoBG: {
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#fff',
  },
})
