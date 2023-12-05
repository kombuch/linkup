import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import { TimePickerModal } from 'react-native-paper-dates'
import PreviewButton from './components/PreviewButton'
import BackButton from './components/BackButton'
import { addEvent, getCurrentUsername } from './util/Storage'
import EventModal from './components/EventModal'
import TextButton from './components/TextButton'
import { convertTime } from './util/Time'
import AlertModal from './components/AlertModal'

function HostEventPage(props) {
  const { navigate } = props

  const now = new Date()
  const nowPlus1 = new Date()
  nowPlus1.setHours(nowPlus1.getHours() + 1)

  const [eventName, setEventName] = useState('')
  const [eventStartTime, setEventStartTime] = useState(now)
  const [eventEndTime, setEventEndTime] = useState(nowPlus1)
  const [eventLocation, setEventLocation] = useState('')

  const [invalidName, setInvalidName] = useState(false)
  const [nameBlinking, setNameBlinking] = useState(false)

  const [alertMessage, setAlertMessage] = useState('')
  const [alertVisible, setAlertVisible] = useState(false)

  useEffect(() => {
    if (nameBlinking) {
      setTimeout(() => {
        setInvalidName(true)
      }, 250)
      setTimeout(() => {
        setInvalidName(false)
      }, 500)
      setTimeout(() => {
        setInvalidName(true)
      }, 750)
      setTimeout(() => {
        setInvalidName(false)
      }, 1000)
      setTimeout(() => {
        setInvalidName(true)
      }, 1250)
      setTimeout(() => {
        setInvalidName(false)
        setNameBlinking(false)
      }, 1500)
    }
  }, [nameBlinking])

  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUsername().then((data) => setUser(data))
  }, [])

  const [startTimeModalVisible, setStartTimeModalVisible] = useState(false)
  const [endTimeModalVisible, setEndTimeModalVisible] = useState(false)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [modalEvent, setModalEvent] = useState()

  const openPreview = () => {
    setModalEvent({
      id: -1,
      eventName,
      eventTime: eventStartTime,
      eventEnd: eventEndTime,
      creationTime: new Date(),
      eventLocation,
      usersAttending: [user],
      ratings: {},
      deleted: false,
      hostUsername: user,
    })
    setPreviewVisible(true)
  }

  const create = () => {
    addEvent(
      modalEvent.eventName,
      modalEvent.eventTime,
      modalEvent.eventEnd,
      modalEvent.eventLocation
    ).then((success) => {
      if (success) navigate('home')
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Create Event</Text>
      </View>
      {modalEvent != null && previewVisible && (
        <EventModal
          event={modalEvent}
          currentUser={user}
          modalVisible={previewVisible}
          setModalVisible={setPreviewVisible}
          preview
          previewOnPress={create}
        />
      )}
      <View style={styles.listContainer}>
        <View style={styles.inputAndTextContainer}>
          {invalidName ? (
            <Text style={styles.badInputLabel}>Event Name</Text>
          ) : (
            <Text style={styles.inputLabel}>Event Name</Text>
          )}
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} value={eventName} onChangeText={setEventName} />
          </View>
        </View>
        <View style={styles.inputAndTextContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              value={eventLocation}
              onChangeText={setEventLocation}
            />
          </View>
        </View>
        <View style={styles.listItem}>
          <View style={styles.timeContainer}>
            <View style={styles.timeText}>
              <Text style={styles.inputLabel}>Start Time:</Text>
            </View>
            <TextButton
              text={convertTime(eventStartTime)}
              onPress={() => setStartTimeModalVisible(true)}
            />
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.timeText}>
              <Text style={styles.inputLabel}>End Time: </Text>
            </View>
            <TextButton
              text={convertTime(eventEndTime)}
              onPress={() => setEndTimeModalVisible(true)}
            />
          </View>
        </View>
      </View>
      <TimePickerModal
        visible={startTimeModalVisible}
        hours={12}
        minutes={14}
        onDismiss={() => setStartTimeModalVisible(false)}
        onConfirm={({ hours, minutes }) => {
          setStartTimeModalVisible(false)
          const dateTime = new Date()
          dateTime.setHours(hours)
          dateTime.setMinutes(minutes)
          setEventStartTime(dateTime)
        }}
      />
      <TimePickerModal
        visible={endTimeModalVisible}
        hours={12}
        minutes={14}
        onDismiss={() => setEndTimeModalVisible(false)}
        onConfirm={({ hours, minutes }) => {
          setEndTimeModalVisible(false)
          const dateTime = new Date()
          dateTime.setHours(hours)
          dateTime.setMinutes(minutes)
          setEventEndTime(dateTime)
        }}
      />
      <View style={styles.bottomContainer}>
        <BackButton navigate={navigate} dest="home" />
        <PreviewButton
          onPress={() => {
            // TODO - Input checking
            let validInputs = true
            if (eventName === '') {
              setAlertMessage('name cannot be empty')
              setAlertVisible(true)
              validInputs = false
            } else if (eventLocation === '') {
              setAlertMessage('location cannot be empty')
              setAlertVisible(true)
              validInputs = false
            } else if (eventEndTime < eventStartTime) {
              validInputs = false
              setAlertMessage('event must start before it ends')
              setAlertVisible(true)
            } else if (validInputs) {
              openPreview()
            }
          }}
        />
      </View>

      <AlertModal
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
      />
    </View>
  )
}

export default HostEventPage

const ampmTo24H = (t) => {
  let pm = false
  let hours = ''
  let minutes = ''
  const time = t.toLowerCase()
  let part = 0 // hours = 0, min = 1, am/pm = 2
  for (let i = 0; i < time.length; i += 1) {
    if (time[i] === ':' || time[i] === ' ') {
      part += 1
    } else {
      if (time[i] === 'p') {
        pm = true
        break
      }
      if (time[i] === 'a') {
        break
      }
      if (part === 0) {
        hours += time[i]
      } else {
        minutes += time[i]
      }
    }
  }

  let hoursI = parseInt(hours, 10)
  let minI = parseInt(minutes, 10)
  if (Number.isNaN(hoursI)) return null
  minI = Number.isNaN(minI) ? 0 : minI
  console.log(`converted: ${hoursI}:${minI}`)
  if (pm && hoursI < 12) {
    hoursI += 12
  } else if (!pm && hoursI === 12) {
    hoursI = 0
  }
  const eventDate = new Date()
  eventDate.setHours(hoursI)
  eventDate.setMinutes(minI)
  return eventDate
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Arial',
  },
  inputLabel: {
    fontSize: 25,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Arial',
    marginLeft: '14%',
  },
  badInputLabel: {
    fontSize: 25,
    textAlign: 'left',
    color: 'red',
    fontFamily: 'Arial',
    marginLeft: '14%',
  },

  inputContainer: {
    width: '100%',
    maxWidth: 550,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 50,
    marginTop: 6,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'center',
  },
  inputAndTextContainer: {
    width: '80%',
    maxWidth: 550,
    alignSelf: 'center',
    flex: 2,
  },
  timeContainer: {
    width: '80%',
    maxWidth: 550,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  listItem: {
    flex: 4,
  },
  timeText: {
    alignContent: 'flex-start',
    justifyContent: 'center',
    height: 45,
    width: 180,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#154734',
    gap: 30,
  },
  topContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    gap: 30,
  },
  listContainer: {
    flex: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    padding: 10,
    margin: 10,
  },
})
