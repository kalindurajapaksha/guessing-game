import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/constants";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: COLORS.secondary500,
    fontSize: 36,
    // fontWeight: "bold",
  },
});
