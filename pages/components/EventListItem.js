import { StyleSheet, Text, View } from "react-native";

const EventListItem = (props) => {
  const { id, eventName, eventTime, isHosting, isAttending } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventTime}>{eventTime}</Text>
    </View>
  );
};

export default EventListItem;

const styles = StyleSheet.create({
  eventName: {
    fontSize: 25,
    flex: 2,
    justifyContent: "flex-start",
    color: "#fff",
    margin: 5,
  },
  eventTime: {
    fontSize: 25,
    flex: 1,
    justifyContent: "flex-end",
    textAlign: "right",
    margin: 5,
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#111",
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
});
