import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import { COLORS } from "../util/constants";
import PrimaryButton from "../components/ui/PrimaryButton";
import { resizeProperty } from "../util/helperFunctions";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  const iosVector = require("../assets/images/ok-ios.png");
  const androidVector = require("../assets/images/ok-android.png");
  const vector = Platform.select({ ios: iosVector, android: androidVector });
  const { width, height } = useWindowDimensions();
  let content = <View style={styles.rootContainer}></View>;
  if (width > 500) {
    return (
      <View style={styles.rootContainerLandscape}>
        <View style={styles.imageContainer}>
          <Image source={vector} style={styles.image} />
        </View>
        <View style={styles.contentContainerLandscape}>
          <Title>Game Over!🥳</Title>
          <Text style={styles.summaryText}>
            Your phone took <Text style={styles.highlight}>{roundsNumber}</Text>
            rounds to guess the number
            <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!🥳</Title>
      <View style={styles.imageContainer}>
        <Image source={vector} style={styles.image} />
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
    width: resizeProperty(150, 300),
    height: resizeProperty(150, 300),
    borderRadius: resizeProperty(75, 150),
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
  rootContainerLandscape: {
    flex: 1,
    flexDirection: "row",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerLandscape: {
    flex: 1,
    justifyContent: "space-around",
    height: "100%",
  },
});
