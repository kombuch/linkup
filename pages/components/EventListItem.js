import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { convertTime } from '../util/Time'

function EventListItem(event) {
  const { currentUser, eventName, eventTime, hostUsername, usersAttending, onPress } = event

  const time = convertTime(eventTime)

  const attending = usersAttending.includes(currentUser)
  const hosting = hostUsername === currentUser

  if (hosting) {
    return (
      <Pressable onPress={() => onPress(event, hosting, attending)}>
        <View style={styles.containerHosting}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    )
  }
  if (attending) {
    return (
      <Pressable onPress={() => onPress(event, hosting, attending)}>
        <View style={styles.containerAttending}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <Pressable onPress={() => onPress(event)}>
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
