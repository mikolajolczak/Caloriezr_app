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
type ClocksData = {
  steps: number;
  maxsteps: number;
};
const Clocks = (props: ClocksData) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={1}
          thickness={5}
          fill="white"
          animated={false}
          strokeCap="square"
          color="#a5cfb6"
          style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
        />
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={props.steps / props.maxsteps}
          thickness={5}
          animated={false}
          strokeCap="square"
          color="#2b9454"
          showsText={true}
          formatText={(progress) => {
            return `${props.steps}&KROKÓW`;
          }}
          textStyle={{
            color: "#2b9454",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 16,
          }}
          style={{ marginLeft: -105, marginTop: 5 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={1}
          thickness={5}
          fill="white"
          animated={false}
          strokeCap="square"
          color="#a5cfb6"
          style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
        />
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={0.9}
          thickness={5}
          animated={false}
          strokeCap="square"
          color="#2b9454"
          showsText={true}
          formatText={(progress) => {
            return "670&SPALONYCH\nKCAL";
          }}
          textStyle={{
            color: "#2b9454",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 16,
          }}
          style={{ marginLeft: -105, marginTop: 5 }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={1}
          thickness={5}
          fill="white"
          animated={false}
          strokeCap="square"
          color="#a5cfb6"
          style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
        />
        <Progress.Circle
          borderWidth={0}
          size={100}
          progress={0.9}
          thickness={5}
          animated={false}
          strokeCap="square"
          color="#2b9454"
          showsText={true}
          formatText={(progress) => {
            return "80&MIN\nAKTYWNOŚĆ";
          }}
          textStyle={{
            color: "#2b9454",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            fontSize: 16,
          }}
          style={{ marginLeft: -105, marginTop: 5 }}
        />
      </View>
    </View>
  );
};

export default Clocks;
