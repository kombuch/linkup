import { StyleSheet, Text, View } from "react-native";

const EventListItem = (props) => {
  const { eventId, eventName, eventTime, isHosting, isAttending } = props;
  return (
    <View style={styles.itemBG}>
      <Text style={styles.eventName}>{eventName}</Text>

      <Text style={styles.eventTime}>{eventTime}</Text>
    </View>
  );
};

export default EventListItem;

const styles = StyleSheet.create({
  eventName: {
    fontSize: 18,
    flex: 2,
    alignContent: "center",
    color: "#fff",
  },
  eventTime: {
    fontSize: 18,
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "center",
    color: "#fff",
  },
  itemBG: {
    borderRadius: 2,
    alignContent: "center",
    height: 30,
    paddingLeft: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#aaa",
  },
});
