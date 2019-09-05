import React, { useState, useEffect, useRef } from "react";

import { View, Text, StyleSheet, Button, Alert } from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

import DefaultStyles from "../constants/default-styles";

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
  [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, gameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.gameOver(rounds);
    }
  }, [currentGuess, userChoice, gameOver]);

  nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Do not lie", "You know that is a lie", [
        { text: "Sorry!", style: "cancel" }
      ]);
    } else {
      if (direction === "lower") {
        currentHigh.current = currentGuess;
      }
      if (direction === "higher") {
        currentLow.current = currentGuess;
      }
      const rNum = randomNumberGeneration(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );
      setCurrentGuess(rNum);
      setRounds(curRounds => curRounds + 1);
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
          HIGHER
        </MainButton>
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
