import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import StarRating from 'react-native-star-rating-widget'
import { attendEvent, getUserRatingText, rateEvent } from '../util/Storage'
import { addMinutes, convertTime } from '../util/Time'

function EventModal(props) {
  const {
    event,
    currentUser,
    modalVisible,
    setModalVisible,
    updateEventListing,
    modalEventRateable,
    preview,
    previewOnPress,
  } = props
  const {
    id,
    eventName,
    eventTime,
    minuteDuration,
    eventLocation,
    usersAttending,
    ratings,
    hostUsername,
  } = event

  console.log(`Current username: ${currentUser} rating: ${ratings[currentUser]}`)
  const [isAttending, setAttending] = useState(usersAttending.includes(currentUser))
  console.log('I ran again!!!!')

  const [hostRatingText, setModalUserRating] = useState('')
  const [rating, setRating] = useState(ratings[currentUser])
  const [attendanceCount, setModalEventAttendance] = useState(usersAttending.length)

  useEffect(() => {
    getUserRatingText(hostUsername).then((text) => {
      setModalUserRating(text)
    })
  }, [])

  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
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
              <Text style={styles.modalTitleText}>{eventName}</Text>
              <Text style={styles.modalText}>{`${convertTime(eventTime)} - ${convertTime(
                addMinutes(eventTime, minuteDuration)
              )} at ${eventLocation}`}</Text>
              <Text style={styles.modalText}>{`Hosted by ${hostUsername}`}</Text>
              <Text style={styles.modalText}>{`${hostRatingText}`}</Text>
              <Text style={styles.modalText}>{`${attendanceCount} Attending`}</Text>
              {modalEventRateable && (
                <StarRating
                  rating={rating}
                  onChange={(number) => {
                    rateEvent(id, number).then(() => {
                      getUserRatingText(hostUsername).then((text) => {
                        setModalUserRating(text)
                      })
                      updateEventListing()
                    })
                    setRating(number)
                  }}
                />
              )}
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeText}>{preview ? 'Cancel' : 'Close'}</Text>
                </Pressable>
                {!isAttending && !preview && (
                  <Pressable
                    style={[styles.button]}
                    onPress={() => {
                      setAttending(true)
                      attendEvent(id).then(() => updateEventListing())
                      setModalEventAttendance(attendanceCount + 1)
                    }}
                  >
                    <Text style={styles.textStyle}>Attend</Text>
                  </Pressable>
                )}
                {preview && (
                  <Pressable
                    style={[styles.button]}
                    onPress={() => {
                      previewOnPress()
                      setModalVisible(false)
                    }}
                  >
                    <Text style={styles.textStyle}>Confirm</Text>
                  </Pressable>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default EventModal

const styles = StyleSheet.create({
  textStyle: { color: '#fff' },
  closeText: {},
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderColor: '#e87500',
    borderWidth: 2,
    borderRadius: 10,
    minWidth: 335,
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
    color: '#fff',
    backgroundColor: '#e87500',
  },
  modalButtonContainer: {
    gap: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonClose: {
    backgroundColor: '#aaa',
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
