import React from "react";

import { View, Platform, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

const header = props => (
  <View
    style={{
      ...styles.headerBase,
      ...Platform.select({
        ios: styles.headerIos,
        android: styles.headerAndroid
      })
    }}
  >
    <TitleText style={styles.title}>{props.title}</TitleText>
  </View>
);

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "transparent"
  },
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white"
  }
});

export default header;
