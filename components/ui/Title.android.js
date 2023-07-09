import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { COLORS } from "../../util/constants";

const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    // backgroundColor:
    //   Platform.OS === "android" ? COLORS.secondary500 : COLORS.primary500,
    // backgroundColor: Platform.select({
    //   ios: COLORS.primary500,
    //   android: COLORS.secondary500,
    // }),
    backgroundColor: COLORS.secondary500,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    // color: Platform.OS === "android" ? COLORS.primary500 : COLORS.secondary500,
    color: COLORS.primary500,
  },
});
