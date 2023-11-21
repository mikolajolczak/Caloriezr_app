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

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import SearchBar from "./SearchBar";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Animated, TouchableOpacity } from "react-native";
import Product from "./Product";
import Meal from "./Meal";
import Water from "./Water";
type MealListData = {
  currentDayMeals: any[];
};
const MealList = (props: MealListData) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {props.currentDayMeals.map((meal, index) => (
        <Meal
          calories={meal.Calories}
          name={meal.Name}
          carbs={meal.Carbs}
          fats={meal.Fats}
          proteins={meal.Proteins}
          date={meal.Date}
        />
      ))}
    </View>
  );
};

export default MealList;
