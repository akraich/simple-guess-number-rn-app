import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

const header = props => (
  <View style={styles.header}>
    <TitleText>{props.title}</TitleText>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary
  }
});

export default header;
