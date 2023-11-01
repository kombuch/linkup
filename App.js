import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import HomePage from "./pages/HomePage";
import HostEventPage from "./pages/HostEventPage";
import JoinEventPage from "./pages/JoinEventPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

const navStack = [];

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const navigate = (page) => {
    navStack.push(currentPage);
    setCurrentPage(page);
    console.log(navStack);
  };

  const { height } = Dimensions.get("window");

  const goBack = () => {
    if (navStack.length === 0) {
      //do nothing?
    } else {
      setCurrentPage(navStack.pop());
    }

    console.log(navStack);
  };
  return (
    <View
      style={{
        ...styles.container,
        minHeight: height,
        maxHeight: height,
      }}
    >
      {currentPage === "login" ? (
        <LoginPage navigate={navigate} goBack={goBack} />
      ) : null}
      {currentPage === "home" ? (
        <HomePage navigate={navigate} goBack={goBack} />
      ) : null}
      {currentPage === "host" ? (
        <HostEventPage navigate={navigate} goBack={goBack} />
      ) : null}
      {currentPage === "join" ? (
        <JoinEventPage navigate={navigate} goBack={goBack} />
      ) : null}
      {currentPage === "profile" ? (
        <ProfilePage navigate={navigate} goBack={goBack} />
      ) : null}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
