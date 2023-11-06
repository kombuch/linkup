import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import EventListItem from './components/EventListItem'
import { getCurrentUsername, getEvents } from './util/Storage'
import HomeButton from './components/HomeButton'
import LogoutButton from './components/LogoutButton'

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

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {user != null && <Text style={styles.welcomeText}>{`Hello ${user}!`}</Text>}
        <View style={styles.seperator} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Attended Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events
              .sort((a, b) => a.eventTime - b.eventTime)
              .filter((item) => item.hostUsername !== user && item.usersAttending.includes(user))}
            renderItem={({ item }) => <EventListItem {...item} currentUser={user} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.titleText}>Created Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events
              .sort((a, b) => a.eventTime - b.eventTime)
              .filter((item) => item.hostUsername === user)}
            renderItem={({ item }) => <EventListItem {...item} currentUser={user} />}
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
  },
  innerContainer: {
    flex: 6,
  },
  topContainer: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20,
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
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 5,
    letterSpacing: 0.25,
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
