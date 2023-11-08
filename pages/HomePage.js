import {
  StyleSheet,
  View,
  FlatList,
  Modal,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import StarRating from 'react-native-star-rating-widget'
import EventListItem from './components/EventListItem'
import HostButton from './components/HostButton'
import Logo from './components/Logo'
import ProfileButton from './components/ProfileButton'
import { attendEvent, getCurrentUsername, getEvents, rateEvent } from './util/Storage'
import { addMinutes, convertTime } from './util/Time'

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

  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  const [modalVisible, setModalVisible] = useState(false)
  const [modalEvent, setModalEvent] = useState()
  const [modalEventEndTime, setModalEventEndTime] = useState()
  const [modalEventHosting, setModalEventHosting] = useState(false)
  const [modalEventAttending, setModalEventAttending] = useState(false)
  const [modalEventRateable, setModalEventRateable] = useState(false)
  const [modalEventAttendance, setModalEventAttendance] = useState(0)
  const [rating, setRating] = useState(0)

  const openEvent = (event, isHosting = false, isAttending = false) => {
    setModalEvent(event)
    setModalEventHosting(isHosting)
    setModalEventAttending(isAttending)
    setModalEventAttendance(event.usersAttending.length)
    setModalEventRateable(!isHosting && isAttending)
    console.log(`${event.eventName} rating: ${events[event.id].ratings[user]}`)
    setRating(events[event.id].ratings[user])
    setModalEventEndTime(addMinutes(event.eventTime, event.minuteDuration))
    setModalVisible(true)
  }
  useEffect(() => {
    setModalEventRateable(!modalEventHosting && modalEventAttending)
  }, [modalVisible])

  const getUserRating = (userName) => {
    let total = 0
    let count = 0
    events.forEach((event) => {
      if (event.hostUsername === userName) {
        const keys = Object.keys(event.ratings)
        keys.forEach((key) => {
          count += 1
          total += event.ratings[key]
          console.log(
            `${event.eventName} hosted by ${event.hostUsername} rated: ${event.ratings[key]} by ${key}`
          )
        })
      }
    })
    if (count === 0) return 'no ratings yet'
    return `${Math.round((total / count) * 10) / 10} / 5`
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      {modalEvent != null && (
        <Modal
          animationType="none"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <TouchableOpacity // closes modal when you click outside
            style={{ flex: 1 }}
            activeOpacity={1}
            onPress={() => {
              setModalVisible(false)
            }}
          >
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback>
                {/* prevents from closing when clicking inside modal */}
                <View style={styles.modalView}>
                  <Text style={styles.modalTitleText}>{modalEvent.eventName}</Text>
                  <Text style={styles.modalText}>{`${convertTime(
                    modalEvent.eventTime
                  )} - ${convertTime(modalEventEndTime)} at ${modalEvent.eventLocation}`}</Text>
                  <Text style={styles.modalText}>{`Hosted by ${modalEvent.hostUsername}`}</Text>
                  <Text style={styles.modalText}>{`Host rating: ${getUserRating(
                    modalEvent.hostUsername
                  )}`}</Text>
                  <Text style={styles.modalText}>{`${modalEventAttendance} Attending`}</Text>
                  {modalEventRateable && (
                    <StarRating
                      rating={rating}
                      onChange={(number) => {
                        rateEvent(modalEvent.id, number).then(() => updateEventListing())
                        setRating(number)
                      }}
                    />
                  )}
                  <View style={styles.modalButtonContainer}>
                    {!modalEventAttending && (
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                          setModalEventAttending(true)
                          attendEvent(modalEvent.id).then(() => updateEventListing())
                          setModalEventAttendance(modalEventAttendance + 1)
                          console.log(`event num: ${modalEvent.id}`)
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
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={events
            .filter((item) => addMinutes(item.eventTime, item.minuteDuration) > now) // filter out past events
            .sort((a, b) => a.eventTime - b.eventTime)}
          renderItem={({ item }) => (
            <EventListItem {...item} currentUser={user} onPress={openEvent} />
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
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: 'orange',
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
