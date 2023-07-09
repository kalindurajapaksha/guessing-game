import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../util/helperFunctions";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../util/constants";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const { width, height } = useWindowDimensions();
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie 😈", "Lets try again with honesty.", [
        { text: "Okay", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((currGuesses) => [newRandomNumber, ...currGuesses]);
  };

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={24} color={COLORS.primary500} />
          </PrimaryButton>

          <PrimaryButton
            style={styles.buttonContainer}
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color={COLORS.primary500} />
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <View style={styles.pageLandscape}>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={({ item, index }) => (
              <GuessLogItem
                roundNumber={guessRounds.length - index}
                guess={item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
        <View style={styles.controlsContainerLandscape}>
          <NumberContainer style={styles.numberContainerLandscape}>
            {currentGuess}
          </NumberContainer>
          <Card style={styles.controlsLandscape}>
            <InstructionText style={styles.instructionText}>
              Higher or lower?
            </InstructionText>
            <View style={styles.buttonsContainer}>
              <PrimaryButton
                style={styles.buttonContainer}
                onPress={nextGuessHandler.bind(this, "lower")}
              >
                <Ionicons
                  name="md-remove"
                  size={24}
                  color={COLORS.primary500}
                />
              </PrimaryButton>

              <PrimaryButton
                style={styles.buttonContainer}
                onPress={nextGuessHandler.bind(this, "greater")}
              >
                <Ionicons name="md-add" size={24} color={COLORS.primary500} />
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      {content}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 8,
  },
  // listContainerLandscape: {
  //   flex: 1,
  //   padding: 8,
  // },
  pageLandscape: {
    flexDirection: "row",
  },
  controlsContainerLandscape: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  controlsLandscape: {
    width: "100%",
    marginTop: 0,
  },
  numberContainerLandscape: {
    width: "100%",
    padding: 0,
  },
});
