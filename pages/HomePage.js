import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import EventListItem from './components/EventListItem'
import HostButton from './components/HostButton'
import Logo from './components/Logo'
import ProfileButton from './components/ProfileButton'
import { getEvents } from './util/Storage'

const today = new Date()
const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today
  .getDate()
  .toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`
console.log(`todaystring ${todayString}`)

export const eventsOld = [
  {
    id: '0',
    eventName: 'Soccer Game',
    eventTime: new Date(`${todayString} 11:00`),
    eventLocation: 'UTD Soccer Field 1',
    isHosting: false,
    isAttending: true,
  },
  {
    id: '1',
    eventName: 'Basketball Game',
    eventTime: new Date(`${todayString} 13:25`),
    eventLocation: 'UTD Basketball Court 1',
    isHosting: false,
    isAttending: false,
  },
  {
    id: '2',
    eventName: 'Chess Meetup',
    eventTime: new Date(`${todayString} 14:00`),
    eventLocation: 'ECSS 2.401',
    isHosting: false,
    isAttending: false,
  },
  {
    id: '3',
    eventName: 'Esports Club',
    eventTime: new Date(`${todayString} 19:00`),
    eventLocation: 'Esports Room',
    isHosting: false,
    isAttending: false,
  },
  {
    id: '4',
    eventName: 'Dance class',
    eventTime: new Date(`${todayString} 13:00`),
    eventLocation: 'GR 2.101',
    isHosting: false,
    isAttending: false,
  },
  {
    id: '5',
    eventName: 'Jogging',
    eventTime: new Date(`${todayString} 21:00`),
    eventLocation: 'Northside Apartments',
    isHosting: false,
    isAttending: false,
  },
  {
    id: '6',
    eventName: 'Yoga',
    eventTime: new Date(`${todayString} 06:00`),
    eventLocation: 'Activity Center',
    isHosting: false,
    isAttending: false,
  },
]

function HomePage(props) {
  const { navigate } = props

  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then((stored) => {
      setEvents(stored)
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={events.sort((a, b) => a.eventTime - b.eventTime)}
          renderItem={({ item }) => <EventListItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.bottomContainer}>
        <HostButton navigate={navigate} />
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154734',
    gap: 30,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
    gap: 50,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    gap: 50,
  },
  listContainer: {
    flex: 10,
    gap: 30,
    backgroundColor: '#154034',
    borderRadius: 20,
    margin: 8,
    paddingTop: 8,
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
