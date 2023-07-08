import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import { COLORS } from "../util/constants";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!🥳</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/ok.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary500,
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.secondary500,
  },
});
