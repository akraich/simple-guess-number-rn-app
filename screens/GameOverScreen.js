import React from "react";

import { View, Text, Image, StyleSheet, Button } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = props => (
  <View style={styles.screen}>
    <TitleText>Game is Over!</TitleText>
    <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/success.png")}
      />
    </View>
    <View style={styles.resultContainer}>
      <BodyText style={styles.textContainer}>
        Your phone took
        <Text style={styles.highlight}>{" " + props.nRounds + " "}</Text>
        guesses to pick the number:
        <Text style={styles.highlight}>{" " + props.userNumber}</Text>
      </BodyText>
    </View>
    <Button title="Start Again" onPress={props.startNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: "80%",
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  textContainer: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary
  }
});

export default GameOverScreen;
