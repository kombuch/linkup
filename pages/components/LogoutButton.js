import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function LogoutButton(props) {
  const { navigate } = props
  return (
    <Pressable onPress={() => navigate('login')}>
      <View style={styles.container}>
        <Text style={styles.header}>Logout</Text>
      </View>
    </Pressable>
  )
}

export default LogoutButton

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Gill Sans',
  },
  container: {
    borderRadius: 40,
    alignContent: 'center',
    justifyContent: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#fff',
  },
})
