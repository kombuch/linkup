import { StyleSheet, View, FlatList, Modal, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import EventListItem from './components/EventListItem'
import HostButton from './components/HostButton'
import Logo from './components/Logo'
import ProfileButton from './components/ProfileButton'
import { attendEvent, getCurrentUsername, getEvents } from './util/Storage'

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

  const currentTime = new Date()

  const [modalVisible, setModalVisible] = useState(false)
  const [modalEvent, setModalEvent] = useState(-1)
  const [modalEventName, setModalEventName] = useState('')
  const [modalEventTime, setModalEventTime] = useState(new Date())
  const [modalEventHosting, setModalEventHosting] = useState(false)
  const [modalEventAttending, setModalEventAttending] = useState(false)
  const [modalEventHostUsername, setModalEventHostUsername] = useState('')
  const [modalEventAttendance, setModalEventAttendance] = useState(0)

  const openEvent = (
    eventId,
    eventName,
    eventTime,
    hostUsername,
    usersAttending,
    isHosting = false,
    isAttending = false
  ) => {
    setModalEvent(eventId)
    setModalEventName(eventName)
    setModalEventTime(eventTime)
    setModalEventHostUsername(hostUsername)
    setModalEventHosting(isHosting)
    setModalEventAttending(isAttending)
    setModalEventAttendance(usersAttending.length)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      <Modal
        animationType="none"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalEventName}</Text>
            <Text style={styles.modalText}>
              {modalEventTime.toLocaleString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            <Text style={styles.modalText}>{`Hosted by ${modalEventHostUsername}`}</Text>
            <Text style={styles.modalText}>{`${modalEventAttendance} Attending`}</Text>
            <View style={styles.modalButtonContainer}>
              {!modalEventAttending && (
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalEventAttending(true)
                    attendEvent(modalEvent).then(() => updateEventListing())
                    setModalEventAttendance(modalEventAttendance + 1)
                    console.log(`event num: ${modalEvent}`)
                  }}
                >
                  <Text style={styles.textStyle}>Attend</Text>
                </Pressable>
              )}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={events
            // .filter((item) => item.eventTime > currentTime) // filter out past events
            .sort((a, b) => a.eventTime - b.eventTime)}
          renderItem={({ item }) => (
            <EventListItem {...item} currentUser={user} onPress={openEvent} />
          )}
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
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderColor: 'orange',
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
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: 'orange',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#154734',
    gap: 30,
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
