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
  for (let i = 1; i <= 31; i += 2) {
    output.push(i.toString());
  }
  return output;
};
const WeeklyDiagrams = () => {
  const data = {
    labels: ["16.11", "16.11", "16.11", "16.11", "16.11", "16.11"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

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
      <View style={{ marginLeft: -35 }}>
        <BarChart
          data={data}
          width={Dimensions.get("window").width - 40}
          height={200}
          yAxisLabel="$"
          yAxisSuffix="$"
          chartConfig={{
            backgroundGradientFrom: "#f9f0e9",
            backgroundGradientTo: "#f9f0e9",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradientOpacity: 1,
            fillShadowGradientFromOpacity: 1,
            fillShadowGradientToOpacity: 1,
            barRadius: 5,
            fillShadowGradientFrom: "#32B960",
            fillShadowGradientTo: "#87E1FD",
            fillShadowGradientFromOffset: 10,
            fillShadowGradientToOffset: 200,
            propsForLabels: { fontFamily: "Roboto-Regular", fontSize: 14 },
          }}
          showValuesOnTopOfBars={true}
          withHorizontalLabels={false}
          showBarTops={false}
          fromZero
          withInnerLines={false}
        />
      </View>
    </View>
  );
};

export default WeeklyDiagrams;
