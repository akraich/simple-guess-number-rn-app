import React, { useState } from "react";

import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const randomNumberGeneration = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rNum = Math.floor(Math.random() * (max - min)) + min;
  if (rNum === exclude) {
    return randomNumberGeneration(min, max, exclude);
  }
  return rNum;
};

const GameScreen = props => {
  [currentGuess, setCurrentGuess] = useState(
    randomNumberGeneration(1, 100, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>The opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" />
        <Button title="GREATER" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    maxWidth: "80%",
    justifyContent: "space-between"
  }
});

export default GameScreen;
