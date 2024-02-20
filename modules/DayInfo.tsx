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
  userInfo: JSON;
  waters: any[];
  getUserWaters: Function;
  dailyCalories: number;
  dailyFats: number;
  dailyCarbs: number;
  dailyProteins: number;
  dailyWater: number;
};
const DayInfo = (props: DayMeals) => {
  return (
    <View>
      <MealList currentDayMeals={props.currentDayMeals} />
      <Water
        waterLimit={props.userInfo.water_limit}
        waters={props.dailyWater}
        getUserWaters={props.getUserWaters}
      />
      <Statistics
        statistics={[
          {
            maxvalue: props.userInfo.calories_limit,
            value: props.dailyCalories,
            description: "Kalorie",
            unit: "kcal",
          },
          {
            maxvalue: props.userInfo.carbs_limit,
            value: props.dailyCarbs,
            description: "Węgl.",
            unit: "g",
          },
          {
            maxvalue: props.userInfo.fats_limit,
            value: props.dailyFats,
            description: "Tłuszcze",
            unit: "g",
          },
          {
            maxvalue: props.userInfo.Proteins_limit,
            value: props.dailyProteins,
            description: "Białka",
            unit: "g",
          },
        ]}
      />
    </View>
  );
};

export default DayInfo;
