import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";

import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

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
  const initialGuess = randomNumberGeneration(1, 100, props.userChoice);
  [currentGuess, setCurrentGuess] = useState(initialGuess);
  [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, gameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.gameOver(pastGuesses.length);
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
        currentLow.current = currentGuess + 1;
      }
      const rNum = randomNumberGeneration(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );
      setCurrentGuess(rNum);
      setPastGuesses(curPastGuesses => [rNum, ...curPastGuesses]);
    }
  };
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <View style={styles.listItem} key={guess}>
              <Text>#{pastGuesses.length - index}</Text>
              <Text>{guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%"
  },
  listItem: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default GameScreen;
