import { StyleSheet, TextInput, Text, View, Button } from "react-native";

import Logo from "./components/Logo";
import BackButton from "./components/BackButton";

const HostEventPage = (props) => {
  const { navigate, goBack } = props;
  return (
    <View style={styles.container}>
      <Logo />
      <BackButton goBack={goBack}/>
    </View>
  );
};

export default HostEventPage;

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
  },
});
