import React from "react";

import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const header = props => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
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
  },
  headerTitle: {
    color: "black"
  }
});

export default header;
