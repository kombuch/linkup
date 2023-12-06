import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal,
} from 'react-native'
import React from 'react'

function DeleteModal(props) {
  const { eventName, modalVisible, setModalVisible, deleteConfirmed } = props

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
              <Text
                style={styles.messageText}
              >{`are you sure you wish to delete ${eventName}?`}</Text>
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => {
                    deleteConfirmed(false)
                    setModalVisible(false)
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonDelete}
                  onPress={() => {
                    deleteConfirmed(true)
                    setModalVisible(false)
                  }}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderColor: '#e87500',
    borderWidth: 2,
    borderRadius: 10,
    minWidth: 280,
    padding: 20,
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
  },
  buttonText: { fontSize: 14 },
  deleteButtonText: { fontSize: 14, color: '#fff' },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#aaa',
  },
  buttonDelete: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#fa2d2d',
  },
  messageText: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  modalButtonContainer: {
    gap: 20,
    marginTop: 20,
    flexDirection: 'row',
  },
})
