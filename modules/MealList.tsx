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
import { MenuProvider } from "react-native-popup-menu";
type MealListData = {
  currentDayMeals: any[];
};
const MealList = (props: MealListData) => {
  return (
    <View style={{ marginBottom: 10 }}>
      {props.currentDayMeals.map((meal, index) => (
        <Meal
          calories={meal.calories}
          name={meal.Description}
          carbs={meal.carbs}
          fats={meal.fats}
          proteins={meal.proteins}
          date={meal.Date}
          products={meal.products}
          mealId={meal.Id}
          key={index}
        />
      ))}
    </View>
  );
};

export default MealList;
