import { Dimensions } from "react-native";

export const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
};

const deviceWidth = Dimensions.get("window").width;

export const resizeProperty = (smallerSize, biggerSize) => {
  return deviceWidth < 380 ? smallerSize : biggerSize;
};
