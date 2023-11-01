import { StyleSheet, TextInput, Text, View, Button, FlatList } from "react-native";

import Logo from "./components/Logo";
import BackButton from "./components/BackButton";
import { events } from "./HomePage";
import EventListItem from "./components/EventListItem";

const ProfilePage = (props) => {
  const { navigate, goBack } = props;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Logo />
      </View>
      <View style={styles.container}>
        <Text style={styles.WelcomeText}>
          Hello User
        </Text>
        <Text style={styles.titleText}>
          Attending Events
        </Text>
        <View style={styles.listContainer}>
        <FlatList
            data={events.sort((a, b) => {
              return a.eventTime - b.eventTime;
            }).filter(((item)=>{return item.isAttending}))}
            renderItem={({ item }) => <EventListItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text style={styles.titleText}>
          Created Events
        </Text>
        <View style={styles.listContainer}>
        <FlatList
            data={events.sort((a, b) => {
              return a.eventTime - b.eventTime;
            }).filter(((item)=>{return item.isHosting}))}
            renderItem={({ item }) => <EventListItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BackButton goBack={goBack} />
      </View>
    </View>
  );
};

export default ProfilePage;

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
  WelcomeText: {
    textAlign: "center",
    fontSize: 48,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  titleText: {
    textAlign: "center",
    fontSize: 32,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
