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
  Touchable,
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
const fillArray = () => {
  let output = [];
  for (let i = 1; i <= 24; i += 2) {
    output.push(i.toString());
  }
  return output;
};
type DiagramsData = {
  walks: any[];
  trainings: any[];
};
const Diagrams = (props: DiagramsData) => {
  const [curentType, setCurrentType] = useState(0);
  const [diagramData, setDiagramData] = useState([0]);
  useEffect(() => {
    let diagramDataToReplace = [0];
    let i = 0;
    if (curentType == 0) {
      props.walks.forEach((walk) => {
        let hour = parseInt(
          new Date(walk.Date_End).toLocaleTimeString().slice(0, -6)
        );
        if (hour <= i * 2) {
          diagramDataToReplace[i] += walk.Steps;
        } else {
          while (hour > i * 2) {
            diagramDataToReplace.push(0);
            i++;
          }
          diagramDataToReplace[i] += walk.Steps;
        }
      });
    }
    if (curentType == 1) {
      props.trainings.forEach((training) => {
        let hour = parseInt(
          new Date(training.Date_End).toLocaleTimeString().slice(0, -6)
        );
        let calories_loss = 0;
        training.exercises.forEach((exercise) => {
          calories_loss += exercise.Calories_Loss;
        });
        if (hour <= i * 2) {
          diagramDataToReplace[i] += calories_loss;
        } else {
          while (hour > i * 2) {
            diagramDataToReplace.push(0);
            i++;
          }
          diagramDataToReplace[i] += calories_loss;
        }
      });
    }

    while (diagramDataToReplace.length < 12) {
      diagramDataToReplace.push(0);
    }
    setDiagramData(diagramDataToReplace);
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
      <View style={{ marginLeft: -20 }}>
        <LineChart
          data={{
            labels: fillArray(),
            datasets: [
              {
                data: diagramData,
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
