import { StyleSheet, View, FlatList } from "react-native";

import BackButton from "./components/BackButton";
import EventListItem from "./components/EventListItem";
import HostButton from "./components/HostButton";
import Logo from "./components/Logo";
import ProfileButton from "./components/ProfileButton";

const events = [
  {
    id: "0",
    eventName: "Soccer Game",
    eventTime: "11:00am",
    eventLocation: "UTD Soccer Field 1",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "1",
    eventName: "Basketball Game",
    eventTime: "1:25pm",
    eventLocation: "UTD Basketball Court 1",
    isHosting: true,
    isAttending: false,
  },
  {
    id: "2",
    eventName: "Chess Meetup",
    eventTime: "2:00pm",
    eventLocation: "ECSS 2.401",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "3",
    eventName: "Esports Club",
    eventTime: "7:00pm",
    eventLocation: "Esports Room",
    isHosting: false,
    isAttending: true,
  },
];

const HomePage = (props) => {
  const { navigate, goBack } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
        <ProfileButton navigate={navigate} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={events}
          renderItem={({ item }) => <EventListItem {...item} />}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
      <View style={styles.bottomContainer}>
        <BackButton goBack={goBack} />
        <HostButton navigate={navigate} />
      </View>
    </View>
  );
};

export default HomePage;

export const createEvent = (props) => {
  const { eventName, eventTime, eventLocation } = props;
  const id = events.length;
  events.push({
    id,
    eventName,
    eventTime,
    eventLocation,
    isHosting: true,
    isAttending: false,
  });
  console.log(events);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#154734",
    gap: 30,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
    gap: 50,
  },
  bottomContainer: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    gap: 50,
  },
  listContainer: {
    flex: 10,
    gap: 30,
  },
  inputContainer: {
    gap: 5,
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    padding: 10,
    margin: 10,
  },
});
