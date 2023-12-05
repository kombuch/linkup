import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import EventListItem from './components/EventListItem'
import HostButton from './components/HostButton'
import Logo from './components/Logo'
import ProfileButton from './components/ProfileButton'
import { getCurrentUsername, getEvents, deleteEvent } from './util/Storage'
import EventModal from './components/EventModal'
import DeleteModal from './components/DeleteModal'

function HomePage(props) {
  const { navigate } = props

  const [user, setUser] = useState('username')

  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then((stored) => {
      setEvents(stored)
      console.log(`events: ${stored}`)
    })

    console.log(`username: ${user}`)
    getCurrentUsername().then((data) => setUser(data))
  }, [])

  const updateEventListing = () => {
    getEvents().then((stored) => {
      setEvents(stored)
      console.log(`updatedEvents: ${stored}`)
    })
  }

  const openDeleteConfirmation = (id) => {
    setEventDeleteId(id)
    setEventDeleteName(events[id].eventName)
    setDeleteModalVisible(true)
  }

  const deleteConfirmed = (confirmed) => {
    if (confirmed) {
      deleteEvent(eventDeleteId).then(() => {
        updateEventListing()
      })
    } else {
      setModalVisible(true)
    }
  }

  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const [modalVisible, setModalVisible] = useState(false)
  const [modalEvent, setModalEvent] = useState()
  const [modalEventRateable, setModalEventRateable] = useState()

  const [eventDeleteName, setEventDeleteName] = useState('EVENTNAME')
  const [eventDeleteId, setEventDeleteId] = useState(-1)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const openEvent = (event) => {
    setModalEvent(event)
    setModalEventRateable(event.hostUsername !== user && event.usersAttending.includes(user))
    console.log(`${event.eventName} rating: ${events[event.id].ratings[user]}`)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      {modalEvent != null && modalVisible && (
        <EventModal
          event={modalEvent}
          currentUser={user}
          modalVisible={modalVisible}
          modalEventRateable={modalEventRateable}
          setModalVisible={setModalVisible}
          updateEventListing={updateEventListing}
          deleteEvent={openDeleteConfirmation}
        />
      )}
      <DeleteModal
        eventName={eventDeleteName}
        modalVisible={deleteModalVisible}
        setModalVisible={setDeleteModalVisible}
        deleteConfirmed={deleteConfirmed}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={events
            .filter((item) => item.eventEnd > now) // filter out past events
            .filter((item) => !item.deleted)
            .sort((a, b) => a.eventTime - b.eventTime)}
          renderItem={({ item }) => (
            <EventListItem event={item} currentUser={user} onPress={openEvent} />
          )}
          keyExtractor={(item) => item.id}
          initialNumToRender={20}
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
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderColor: '#e87500',
    borderWidth: 2,
    borderRadius: 10,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalButtonContainer: {
    gap: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: '#e87500',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitleText: {
    marginBottom: 15,
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#154734',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
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
})
