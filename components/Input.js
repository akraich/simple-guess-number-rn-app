import React from "react";

import { TextInput, StyleSheet } from "react-native";

const input = props => (
  <TextInput {...props} style={{ ...styles.input, ...props.style }} />
);

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10
  }
});

export default input;
