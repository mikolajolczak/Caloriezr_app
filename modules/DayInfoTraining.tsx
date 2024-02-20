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
import * as Progress from "react-native-progress";
import Clocks from "./Clocks";
import Diagrams from "./Diagrams";
import Cards from "./Cards";
import WeeklyDiagrams from "./WeeklyDiagrams";
type DayInfoData = {
  steps: number;
  maxsteps: number;
  walks: any[];
  trainings: any[];
  weeklywalks: any[];
};
const DayInfoTraining = (props: DayInfoData) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#f9f0e9" }}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Roboto-Regular",
          textAlign: "center",
        }}
      >
        DZISIEJSZA AKTYWNOŚĆ
      </Text>
      <Diagrams walks={props.walks} trainings={props.trainings} />
      <Cards walks={props.walks} trainings={props.trainings} />
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Roboto-Regular",
          textAlign: "center",
        }}
      >
        TYGODNIOWY RAPORT
      </Text>
      <WeeklyDiagrams walks={props.weeklywalks} trainings={props.trainings} />
      <View style={{ height: 30 }}></View>
    </ScrollView>
  );
};

export default DayInfoTraining;
