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
} from "react-native";

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import SearchBar from "./SearchBar";
import FoodList from "./FoodList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ingredient from "./Ingredient";
type IngredientsData = {
  products: any[];
  mealId: number;
};
const Ingredients = (props: IngredientsData) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View>
      {props.products.map((product, index) => (
        <Ingredient key={index} product={product} mealId={props.mealId} />
      ))}
    </View>
  );
};

export default Ingredients;
