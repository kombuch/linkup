import { ProfileCircle } from "iconoir-react-native";
import { Pressable, StyleSheet, View } from "react-native";

const ProfileButton = (props) => {
  const { navigate } = props;
  return (
    <Pressable
      onPress={() => {
        navigate("profile");
      }}
    >
      <View style={styles.logoBG}>
        <View style={styles.center}>
          <ProfileCircle
            style={styles.logo}
            color="black"
            width="60"
            height="60"
          />
        </View>
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
  center: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  logoBG: {
    borderRadius: 60,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#e87500",
  },
  logo: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
