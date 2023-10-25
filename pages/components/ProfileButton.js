import { Pressable, StyleSheet, Text, View } from "react-native";

const ProfileButton = (props) => {
  const { navigate } = props;
  return (
    <Pressable
      onPress={() => {
        navigate("profile");
      }}
    >
      <View style={styles.logoBG}>
        <Text style={styles.header}>Profile</Text>
      </View>
    </Pressable>
  );
};

export default ProfileButton;

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
