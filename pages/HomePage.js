import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";

import EventListItem from "./components/EventListItem";
import Logo from "./components/Logo";
import ProfileButton from "./components/ProfileButton";
import BackButton from "./components/BackButton";
import HostButton from "./components/HostButton";

const events = [
  {
    id: "0",
    eventName: "Soccer Game",
    eventTime: "11:00am",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "1",
    eventName: "Basketball Game",
    eventTime: "1:25pm",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "2",
    eventName: "Chess Meetup",
    eventTime: "2:00pm",
    isHosting: false,
    isAttending: false,
  },
  {
    id: "3",
    eventName: "Esports Club",
    eventTime: "7:00pm",
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
        <ProfileButton navigate={navigate}/>
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
        <BackButton goBack={goBack}/>
        <HostButton navigate={navigate} />
    </View>
      
    </View>
  );
};

export default HomePage;

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
    gap: 50,
  },
  listContainer: {
    flex: 7,
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
