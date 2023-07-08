import { View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/constants";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    padding: 16,
    backgroundColor: COLORS.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    //shadow for android
    elevation: 4,
    //shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
