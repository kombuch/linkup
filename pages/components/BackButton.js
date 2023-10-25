import { Pressable, StyleSheet, Text, View } from "react-native";

const BackButton = (props) => {
  const { goBack } = props;
  return (
    <Pressable onPress={goBack}>
      <View style={styles.logoBG}>
        <Text style={styles.header}>Back</Text>
      </View>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "#000",
    fontFamily: "Gill Sans",
  },
  logoBG: {
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    width: 150,
    height: 60,
    backgroundColor: "#fff",
  },
});
