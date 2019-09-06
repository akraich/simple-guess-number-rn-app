import React from "react";

import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";

import Colors from "../constants/colors";

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15,
    overflow: "hidden"
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default MainButton;
