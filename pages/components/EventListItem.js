import { Pressable, StyleSheet, Text, View } from "react-native";

const EventListItem = (props) => {
  const { id, eventName, eventTime, isHosting, isAttending, onPress } = props;

  const time = `${eventTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  if (isHosting) {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.containerHosting}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    );
  }
  if (isAttending) {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.containerAttending}>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.eventTime}>{time}</Text>
      </View>
    </Pressable>
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
    marginRight: 5,
    marginTop: 5,
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#111",
    flexDirection: "row",
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
  containerAttending: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
  containerHosting: {
    flex: 1,
    backgroundColor: "#e87500",
    flexDirection: "row",
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
    height: 40,
    margin: 5,
    borderRadius: 5,
  },
});