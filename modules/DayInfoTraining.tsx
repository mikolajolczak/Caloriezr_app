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
const DayInfoTraining = () => {
  return (
    <View>
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

export default DayInfoTraining;
