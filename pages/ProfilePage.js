import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'

import EventListItem from './components/EventListItem'
import { getCurrentUsername, getEvents } from './util/Storage'
import HomeButton from './components/HomeButton'
import LogoutButton from './components/LogoutButton'
import EventModal from './components/EventModal'

const topMargin = Platform.OS === 'web' ? 0 : 40

function ProfilePage(props) {
  const { navigate } = props

  const [user, setUser] = useState(null)

  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then((stored) => {
      setEvents(stored)
    })

    getCurrentUsername().then((data) => setUser(data))
  }, [])

  const [modalVisible, setModalVisible] = useState(false)
  const [modalEvent, setModalEvent] = useState()
  const [modalEventRateable, setModalEventRateable] = useState()

  const openEvent = (event) => {
    setModalEvent(event)
    setModalEventRateable(event.hostUsername !== user && event.usersAttending.includes(user))
    setModalVisible(true)
  }

  const updateEventListing = () => {
    getEvents().then((stored) => {
      setEvents(stored)
      console.log(`updatedEvents: ${stored}`)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {user != null && (
          <Text numberOfLines={1} style={styles.welcomeText}>{`Hello ${user}!`}</Text>
        )}
        <View style={styles.seperator} />
      </View>
      {modalEvent != null && modalVisible && (
        <EventModal
          event={modalEvent}
          currentUser={user}
          modalVisible={modalVisible}
          modalEventRateable={modalEventRateable}
          setModalVisible={setModalVisible}
          updateEventListing={updateEventListing}
        />
      )}
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Attended Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events
              .filter((item) => !item.deleted)
              .filter((item) => item.hostUsername !== user && item.usersAttending.includes(user))
              .sort((a, b) => b.eventTime - a.eventTime)}
            renderItem={({ item }) => (
              <EventListItem event={item} currentUser={user} onPress={openEvent} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.titleText}>Created Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events
              .filter((item) => !item.deleted)
              .filter((item) => item.hostUsername === user)
              .sort((a, b) => b.eventTime - a.eventTime)}
            renderItem={({ item }) => (
              <EventListItem event={item} currentUser={user} onPress={openEvent} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <HomeButton navigate={navigate} />
        <LogoutButton navigate={navigate} />
      </View>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154734',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    maxWidth: 650,
    flex: 6,
  },
  topContainer: {
    flex: 1,
    marginTop: topMargin,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
    minHeight: 60,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    gap: 30,
  },
  seperator: {
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 5,
    width: '80%',
    height: 10,
    backgroundColor: '#e87500',
  },
  listContainer: {
    width: '95%',
    maxWidth: 650,
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
  welcomeText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 5,
    letterSpacing: 0.2,
    color: 'white',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
