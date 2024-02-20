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
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MealList from "./MealList";
import Water from "./Water";
import Statistics from "./Statistics";
import * as Progress from "react-native-progress";
import { SvgXml } from "react-native-svg";
type CardData = {
  date_start: any;
  date_end: any;
  name: any;
  exercises: any;
  modalTrainingVisible: any;
  setModalTrainingVisible: any;
  setTraining: any;
  trainingId: any;
};
const CardTraining = (props: CardData) => {
  const [caloriesLoss, setCaloriesLoss] = useState(0);
  useEffect(() => {
    let output = 0;
    props.exercises.forEach((exercise) => {
      output += exercise.Calories_Loss;
    });
    setCaloriesLoss(output);
  }, []);
  const getTrainingInfo = async (password, email, id) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/training/info",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            id: id,
          }),
        }
      );
      if (response.status == 200) {
        const json = await response.json();
        props.setTraining({
          exercises: json,
          training_name: props.name,
          training_id: props.trainingId,
        });
        props.setModalTrainingVisible(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const dumbbellsvg = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>`;
  return (
    <Pressable
      onPress={() => {
        getTrainingInfo(123, "molczak@wp.pl", props.trainingId);
      }}
    >
      <View
        style={{
          width: 160,
          height: 250,
          backgroundColor: "#B7F3CC",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          borderRadius: 20,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Roboto-Regular",
            fontSize: 20,
          }}
        >
          {props.name}
        </Text>
        <View style={{ height: 100, width: 70 }}>
          <SvgXml
            xml={dumbbellsvg}
            width="100%"
            height="100%"
            stroke="#2b9454"
            fill="#2b9454"
          ></SvgXml>
        </View>
        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 14 }}>
          {new Date(props.date_start).toLocaleTimeString().slice(0, -3)}-
          {new Date(props.date_end).toLocaleTimeString().slice(0, -3)}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 70,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Medium",
                fontSize: 16,
                color: "#2b9454",
              }}
            >
              {caloriesLoss}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              kcal
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Medium",
                fontSize: 16,
                color: "#2b9454",
              }}
            >
              {(new Date(props.date_end).getTime() -
                new Date(props.date_start).getTime()) /
                60000}
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto-Regular",
                fontSize: 14,
              }}
            >
              min
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CardTraining;
