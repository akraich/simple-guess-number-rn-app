import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => (
  <View style={styles.screen}>
    <Text>Game is Over!</Text>
    <Text>Number of rounds: {props.nRounds}</Text>
    <Text>User number: {props.userNumber}</Text>
    <Button title="Start Again" onPress={props.startNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default GameOverScreen;
