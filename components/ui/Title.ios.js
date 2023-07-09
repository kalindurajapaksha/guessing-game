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
    backgroundColor: COLORS.primary500,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: COLORS.secondary500,
  },
});
