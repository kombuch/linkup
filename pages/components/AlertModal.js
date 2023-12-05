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

function AlertModal(props) {
  const { message, modalVisible, setModalVisible } = props

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
              <Text style={styles.messageText}>{message}</Text>
              <Pressable style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default AlertModal

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
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#aaa',
  },
  messageText: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
})
