import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => (
  <ScrollView>
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
      <MainButton onPress={props.startNewGame}>Start Again</MainButton>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get("window").height / 60
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
