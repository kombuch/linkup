import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

import Logo from "./components/Logo";

const LoginPage = (props) => {
  const { navigate, goBack } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.inputText}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          style={styles.inputText}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigate("home");
        }}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#154734",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  logoContainer: {
    backgroundColor: "#154734",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
