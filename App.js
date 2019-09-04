import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStart={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
