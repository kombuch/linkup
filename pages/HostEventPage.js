import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { createEvent } from "./HomePage";
import BackButton from "./components/BackButton";
import CreateButton from "./components/CreateButton";

const HostEventPage = (props) => {
  const { navigate, goBack } = props;

  const now = new Date();
  const hour24 = now.getHours();
  const min = now.getMinutes();
  const ampm = hour24 < 12 ? "am" : "pm";
  const hours = hour24 < 12 ? hour24 : hour24 - 12;

  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState(hours + ":" + min + ampm);
  const [eventLocation, setEventLocation] = useState("");


  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.header}>Create Event</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.inputLabel}>Event Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={eventName}
            onChangeText={setEventName}
          />
        </View>
        <Text style={styles.inputLabel}>Start Time</Text>
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
        <BackButton goBack={goBack} />
        <CreateButton
          onPress={() => {
            //TODO - Input checking
            createEvent({ eventName, eventTime, eventLocation });
            navigate("home");
          }}
        />
      </View>
    </View>
  );
};

export default HostEventPage;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Gill Sans",
  },
  inputLabel: {
    fontSize: 20,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Gill Sans",
    marginLeft: "14%",
  },

  inputContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 50,
    marginBottom: 40,
    justifyContent: "center",
    padding: 10,
    alignSelf: "center",
  },
  inputText: {
    height: 50,
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#154734",
    gap: 30,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
    gap: 50,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 80,
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
});
