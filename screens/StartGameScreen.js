import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";

const StartGameScreen = props => {
  [enteredValue, setEnteredValue] = useState("");
  [confirmed, setConfirmed] = useState(false);
  [selectedNumber, setSelectedNumber] = useState();
  [buttonWidth, setButtonWidth] = useState(Dimensions.get("window").width / 4);

  useEffect(() => {
    updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  numberInputHandler = enteredText => {
    setEnteredValue(enteredText.replace(/[^0-9]/g, ""));
  };

  restInputHandler = () => {
    setEnteredValue("");
  };

  let confirmOutput;

  if (confirmed) {
    confirmOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => {
            props.onStart(selectedNumber);
          }}
        >
          START GAME
        </MainButton>
      </Card>
    );
  }

  confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert(
        "Invalid number",
        "Entered value should be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: restInputHandler
          }
        ]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a new game!</TitleText>
            <Card style={styles.inputContainer}>
              <BodyText>Select a number</BodyText>
              <Input
                style={styles.input}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <Button
                  style={{ width: buttonWidth }}
                  title="Reset"
                  onPress={restInputHandler}
                  color={Colors.secondary}
                />
                <Button
                  style={{ width: buttonWidth }}
                  title="Confirm"
                  onPress={confirmInputHandler}
                  color={Colors.primary}
                />
              </View>
            </Card>
            {confirmOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    maxWidth: "95%",
    minWidth: 300,
    width: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 10,
    alignItems: "center"
  }
});

export default StartGameScreen;
