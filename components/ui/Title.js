import { View, Text, StyleSheet } from "react-native";
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
    backgroundColor: COLORS.secondary500,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    // fontWeight: "bold",
    color: COLORS.primary500,
  },
});
