import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import CreateButton from './components/CreateButton'
import BackButton from './components/BackButton'
import { addEvent } from './util/Storage'

function HostEventPage(props) {
  const { navigate } = props

  const now = new Date()
  const hour24 = now.getHours()
  const min = now.getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const ampm = hour24 < 12 ? 'am' : 'pm'
  const hours = hour24 < 13 ? hour24 : hour24 - 12

  const [eventName, setEventName] = useState('')
  const [eventTime, setEventTime] = useState(`${hours}:${min}${ampm}`)
  const [eventLocation, setEventLocation] = useState('')

  const [invalidTime, setInvalidTime] = useState(false)
  const [timeBlinking, setTimeBlinking] = useState(false)

  const [invalidName, setInvalidName] = useState(false)
  const [nameBlinking, setNameBlinking] = useState(false)

  useEffect(() => {
    if (timeBlinking) {
      setTimeout(() => {
        setInvalidTime(true)
      }, 250)
      setTimeout(() => {
        setInvalidTime(false)
      }, 500)
      setTimeout(() => {
        setInvalidTime(true)
      }, 750)
      setTimeout(() => {
        setInvalidTime(false)
        setTimeBlinking(false)
      }, 1000)
      setTimeout(() => {
        setInvalidTime(true)
        setTimeBlinking(false)
      }, 1250)
      setTimeout(() => {
        setInvalidTime(false)
        setTimeBlinking(false)
      }, 1500)
    }
  }, [timeBlinking])

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

  const create = (date) => {
    addEvent(eventName, date, 60, eventLocation).then((success) => {
      if (success) navigate('home')
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Create Event</Text>
      </View>
      <View style={styles.listContainer}>
        {invalidName ? (
          <Text style={styles.badInputLabel}>Event Name</Text>
        ) : (
          <Text style={styles.inputLabel}>Event Name</Text>
        )}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} value={eventName} onChangeText={setEventName} />
        </View>
        {invalidTime ? (
          <Text style={styles.badInputLabel}>Start Time</Text>
        ) : (
          <Text style={styles.inputLabel}>Start Time</Text>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={eventTime}
            onChangeText={setEventTime}
            placeholder="ex: 5:20pm"
          />
        </View>
        <Text style={styles.inputLabel}>Location</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={eventLocation}
            onChangeText={setEventLocation}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BackButton navigate={navigate} />
        <CreateButton
          onPress={() => {
            // TODO - Input checking
            const date = ampmTo24H(eventTime)
            let validInputs = true
            if (Number.isNaN(date)) {
              setEventTime('')
              setTimeBlinking(true)
              validInputs = false
            }
            if (eventName === '') {
              setNameBlinking(true)
              validInputs = false
            }
            if (validInputs) {
              console.log(`ds: ${date.toDateString()}`)
              create(date)
            }
          }}
        />
      </View>
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
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Gill Sans',
  },
  inputLabel: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Gill Sans',
    marginLeft: '14%',
  },
  badInputLabel: {
    fontSize: 20,
    textAlign: 'left',
    color: 'red',
    fontFamily: 'Gill Sans',
    marginLeft: '14%',
  },

  inputContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 50,
    marginBottom: 40,
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'center',
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
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
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
    flex: 7,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    padding: 10,
    margin: 10,
  },
})
