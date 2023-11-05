import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function EventListItem(props) {
  const { currentUser, eventName, eventTime, hostUsername, usersAttending, onPress } = props

  const hour24 = eventTime.getHours()
  const min = eventTime.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const ampm = hour24 < 12 ? 'AM' : 'PM'
  const hours = hour24 < 13 ? hour24 : hour24 - 12
  const time = `${hours}:${min} ${ampm}`

  if (hostUsername === currentUser) {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.containerHosting}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    )
  }
  if (usersAttending.includes(currentUser)) {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.containerAttending}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.eventTime}>{time}</Text>
      </View>
    </Pressable>
  )
}

export default EventListItem

const styles = StyleSheet.create({
  eventName: {
    fontSize: 23,
    flex: 3,
    justifyContent: 'flex-start',
    color: '#fff',
    margin: 6,
  },
  eventTime: {
    fontSize: 23,
    flex: 2,
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 5,
    marginTop: 6,
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#111',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
  containerAttending: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
  containerHosting: {
    flex: 1,
    backgroundColor: '#e87500',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
})
