import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import { TimePickerModal } from 'react-native-paper-dates'
import PreviewButton from './components/PreviewButton'
import BackButton from './components/BackButton'
import { addEvent, getCurrentUsername } from './util/Storage'
import EventModal from './components/EventModal'
import TextButton from './components/TextButton'
import { addMinutes, convertTime } from './util/Time'
import AlertModal from './components/AlertModal'

function HostEventPage(props) {
  const { navigate } = props

  const now = new Date()
  const nowPlus1 = addMinutes(now, 60)

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
          <View
            style={[
              styles.inputContainer,
              eventName.length === 0 ? { borderColor: '#c93636', borderWidth: 3 } : {},
            ]}
          >
            <TextInput
              style={styles.inputText}
              value={eventName}
              onChangeText={setEventName}
              placeholder="Enter a name"
            />
          </View>
        </View>
        <View style={styles.inputAndTextContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <View
            style={[
              styles.inputContainer,
              eventLocation.length === 0 ? { borderColor: '#c93636', borderWidth: 3 } : {},
            ]}
          >
            <TextInput
              style={styles.inputText}
              value={eventLocation}
              onChangeText={setEventLocation}
              placeholder="Enter a location"
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
              error={eventEndTime < eventStartTime}
            />
          </View>
        </View>
      </View>
      <TimePickerModal
        visible={startTimeModalVisible}
        hours={eventStartTime.getHours()}
        minutes={eventStartTime.getMinutes()}
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
        hours={eventEndTime.getHours()}
        minutes={eventEndTime.getMinutes()}
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
            } else if (eventEndTime < new Date()) {
              setAlertMessage('event end time must be in the future')
              setAlertVisible(true)
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
    marginTop: 15,
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
