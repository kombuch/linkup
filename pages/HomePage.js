import { StyleSheet, View, FlatList, Modal, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import EventListItem from './components/EventListItem'
import HostButton from './components/HostButton'
import Logo from './components/Logo'
import ProfileButton from './components/ProfileButton'
import { getCurrentUsername, getEvents } from './util/Storage'

function HomePage(props) {
  const { navigate } = props

  const [user, setUser] = useState('username')
  console.log(`username: ${user}`)

  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents().then((stored) => {
      setEvents(stored)
      console.log(`events: ${stored}`)
    })

    getCurrentUsername().then((data) => setUser(data))
  }, [])

  const currentTime = new Date()

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.listContainer}>
        <FlatList
          data={events
            // .filter((item) => item.eventTime > currentTime) // filter out past events
            .sort((a, b) => a.eventTime - b.eventTime)}
          renderItem={({ item }) => (
            <EventListItem {...item} currentUser={user} onPress={() => setModalVisible(true)} />
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
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
