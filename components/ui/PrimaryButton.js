import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../util/constants";

const PrimaryButton = ({ children, onPress, style }) => {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: COLORS.secondary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 50,
    margin: 4,
    backgroundColor: COLORS.secondary500,
    overflow: "hidden",
    elevation: 2,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
