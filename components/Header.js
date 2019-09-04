import React from "react";

import { View, Text, StyleSheet } from "react-native";

const header = props => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    padding: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7287b"
  },
  headerTitle: {
    color: "black"
  }
});

export default header;
