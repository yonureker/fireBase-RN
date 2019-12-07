import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";

const LoadingScreen = props => {
  // check if user is logged in, if yes navigate to Dashboard, if not go back to Login.
  const loggedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.navigate("DashboardScreen");
      } else {
        props.navigation.navigate("LoginScreen");
      }
    });
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      {loggedIn()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingScreen;
