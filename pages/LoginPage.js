import { StyleSheet, TextInput, Text, View, Button } from "react-native";

import Logo from "./components/Logo";

const LoginPage = (props) => {
  const { navigate, goBack } = props;
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.inputContainer}>
        <Text>Email </Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.input} />
      </View>
      <Button title="Login" onPress={() => {navigate("home")}}/>
    </View>
  );
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 100,
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
  }
});
