import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Logo from "./pages/components/Logo";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 100,
  },
});
