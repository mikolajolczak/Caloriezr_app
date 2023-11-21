import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
type DayMeals = {
  currentDayMeals: any[];
};
const DayInfo = (props: DayMeals) => {
  return (
    <View>
      <MealList currentDayMeals={props.currentDayMeals} />
      <Water />
      <Statistics statistics={[]} />
      <Text
        style={{
          color: "#686868",
          alignSelf: "flex-end",
          fontFamily: "Roboto-Light",
          fontSize: 12,
        }}
      >
        Zmień Ustawienia
      </Text>
    </View>
  );
};

export default DayInfo;
