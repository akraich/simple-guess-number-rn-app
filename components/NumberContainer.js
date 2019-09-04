import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const numberContainer = props => (
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginVertical: 10
  },
  number: {
    color: Colors.secondary,
    fontSize: 22
  }
});

export default numberContainer;
