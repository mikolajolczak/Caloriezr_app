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
} from "react-native";
import Week from "./Week";
const Planner = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [username, setUsername] = useState(null);
  const [waters, setWaters] = useState([]);
  const [meals, setMeals] = useState([]);
  const [firsttime, setFirstTime] = useState(true);
  const [delivered, setDelivered] = useState(false);

  const getUserInformation = async (password, email) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/user",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: password, email: email }),
        }
      );
      const json = await response.json();
      if (response.status == 200) {
        setUsername(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUserWaters = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
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
    startOfTheWeek.setHours(0, 0, 0, 0);
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/water",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      setWaters(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getUserMeals = async (password, email) => {
    let startOfTheWeek: Date;
    let currentDay = new Date();
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
    startOfTheWeek.setHours(0, 0, 0, 0);
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/meals",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      setMeals(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (firsttime) {
      Promise.all([
        getUserInformation(123, "molczak@wp.pl"),
        getUserWaters(123, "molczak@wp.pl"),
        getUserMeals(123, "molczak@wp.pl"),
      ]).then(() => {
        setDelivered(true);
      });
      setFirstTime(false);
    }
  });
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        backgroundColor: "white",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      {delivered ? (
        <Week
          username={username}
          meals={meals}
          waters={waters}
          getUserWaters={getUserWaters}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default Planner;
