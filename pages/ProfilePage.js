import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { events } from './HomePage'
import BackButton from './components/BackButton'
import EventListItem from './components/EventListItem'
import Logo from './components/Logo'

function ProfilePage(props) {
  const { goBack } = props
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.welcomeText}>Hello User</Text>
        <Text style={styles.titleText}>Attending Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events
              .sort((a, b) => a.eventTime - b.eventTime)
              .filter((item) => item.isAttending)}
            renderItem={({ item }) => <EventListItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.titleText}>Created Events</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={events.sort((a, b) => a.eventTime - b.eventTime).filter((item) => item.isHosting)}
            renderItem={({ item }) => <EventListItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BackButton goBack={goBack} />
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
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
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
