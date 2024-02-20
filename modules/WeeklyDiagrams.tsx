import React, { useEffect, useState } from "react";
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
  TouchableOpacity,
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
type WeeklyDiagramData = {
  walks: any[];
  trainings: any[];
};
const WeeklyDiagrams = (props: WeeklyDiagramData) => {
  const [curentType, setCurrentType] = useState(0);
  const [diagramData, setDiagramData] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  useEffect(() => {
    let i = 0;
    let j = 0;
    let output = [0, 0, 0, 0, 0, 0, 0];
    let currentDay = new Date();
    let startOfTheWeek: Date;
    let labels = [];
    if (currentDay.getDay() == 1) {
      startOfTheWeek = currentDay;
    } else {
      startOfTheWeek = new Date(
        currentDay.getFullYear(),
        currentDay.getMonth(),
        currentDay.getDate() -
          (currentDay.getDay() == 0
            ? currentDay.getDay() + 6
            : currentDay.getDay() - 1)
      );
    }
    for (let i = 0; i < 7; i++) {
      let day = new Date(
        startOfTheWeek.getFullYear(),
        startOfTheWeek.getMonth(),
        startOfTheWeek.getDate() + i
      );
      labels.push(day.toLocaleDateString().slice(0, -5));
    }
    if (curentType == 0) {
      props.walks.forEach((walk) => {
        let date = new Date(walk.Date_End);
        output[date.getDay() - startOfTheWeek.getDay()] += walk.Steps;
      });
    }
    if (curentType == 1) {
      props.trainings.forEach((training) => {
        let date = new Date(training.Date_End);
        let calories_loss = 0;
        training.exercises.forEach((exercise) => {
          calories_loss += exercise.Calories_Loss;
        });
        output[date.getDay() - startOfTheWeek.getDay()] += calories_loss;
      });
    }
    setWeekDays(labels);
    setDiagramData(output);
  }, [curentType]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setCurrentType(0);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Roboto-Regular",
              color: curentType == 0 ? "#2b9454" : "#9a9a9a",
              paddingLeft: 15,
            }}
          >
            Kroki
          </Text>
        </TouchableOpacity>
        <View
          style={{ width: 1, backgroundColor: "#9a9a9a", height: 15 }}
        ></View>
        <TouchableOpacity
          onPress={() => {
            setCurrentType(1);
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Roboto-Regular",
              color: curentType == 1 ? "#2b9454" : "#9a9a9a",
            }}
          >
            Spalone kcal
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: -35 }}>
        <BarChart
          data={{
            labels: weekDays,
            datasets: [
              {
                data: diagramData,
              },
            ],
          }}
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
