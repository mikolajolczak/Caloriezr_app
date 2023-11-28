import React, { useState } from "react";
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const fillArray = () => {
  let output = [];
  for (let i = 1; i <= 24; i += 2) {
    output.push(i.toString());
  }
  return output;
};
const Diagrams = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto-Regular",
            color: "#2b9454",
            paddingLeft: 15,
          }}
        >
          Kroki
        </Text>
        <View
          style={{ width: 1, backgroundColor: "#9a9a9a", height: 15 }}
        ></View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto-Regular",
            color: "#9a9a9a",
          }}
        >
          Spalone kcal
        </Text>
        <View
          style={{ width: 1, backgroundColor: "#9a9a9a", height: 15 }}
        ></View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Roboto-Regular",
            color: "#9a9a9a",
            paddingRight: 15,
          }}
        >
          Czas
        </Text>
      </View>
      <View style={{ marginLeft: -20 }}>
        <LineChart
          data={{
            labels: fillArray(),
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          width={Dimensions.get("window").width - 40} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: "#f9f0e9",
            backgroundGradientFrom: "#f9f0e9",
            backgroundGradientTo: "#f9f0e9",
            color: (opacity = 1) => `rgba(50, 185, 96, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradient: "white",
            fillShadowGradientFrom: "white",
            fillShadowGradientTo: "white",
            propsForDots: {
              r: "5",
              strokeWidth: "1",
              stroke: "#2b9454",
            },
            propsForLabels: { fontFamily: "Roboto-Regular", fontSize: 15 },
          }}
          bezier
        />
      </View>
    </View>
  );
};

export default Diagrams;
