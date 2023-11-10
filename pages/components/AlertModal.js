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
              <Text style={styles.modalTitleText}>{message}</Text>
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default AlertModal

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
