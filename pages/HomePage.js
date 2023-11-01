import { StyleSheet, View, FlatList } from "react-native";

import BackButton from "./components/BackButton";
import EventListItem from "./components/EventListItem";
import HostButton from "./components/HostButton";
import Logo from "./components/Logo";
import ProfileButton from "./components/ProfileButton";

export const events = [
  {
    id: "0",
    eventName: "Soccer Game",
    eventTime: new Date("2023-11-01 11:00"),
    eventLocation: "UTD Soccer Field 1",
    isHosting: false,
    isAttending: true,
  },
  {
    id: "1",
    eventName: "Basketball Game",
    eventTime: new Date("2023-11-01 13:25"),
    eventLocation: "UTD Basketball Court 1",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "2",
    eventName: "Chess Meetup",
    eventTime: new Date("2023-11-01 14:00"),
    eventLocation: "ECSS 2.401",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "3",
    eventName: "Esports Club",
    eventTime: new Date("2023-11-01 19:00"),
    eventLocation: "Esports Room",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "4",
    eventName: "Dance class",
    eventTime: new Date("2023-11-01 13:00"),
    eventLocation: "GR 2.101",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "5",
    eventName: "Jogging",
    eventTime: new Date("2023-11-01 21:00"),
    eventLocation: "Northside Apartments",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "6",
    eventName: "Yoga",
    eventTime: new Date("2023-11-01 06:00"),
    eventLocation: "Activity Center",
    isHosting: false,
    isAttending: false,
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
          data={events.sort((a, b) => {
            return a.eventTime - b.eventTime;
          })}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    marginBottom: 25,
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
