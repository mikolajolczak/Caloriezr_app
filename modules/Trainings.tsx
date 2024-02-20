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
import WeekTraining from "./WeekTraining";
const Trainings = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [walks, setWalks] = useState(null);
  const [username, setUsername] = useState(null);
  const [firstTime, setFirstTime] = useState(true);
  const [trainings, setTrainings] = useState(null);
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
  const getUserWalks = async (password, email) => {
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
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/walk",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            date_start: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      if (response.status == 200) {
        setWalks(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUserTrainings = async (password, email) => {
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
        "https://shaped-glazing-402314.lm.r.appspot.com/get/weekly/training",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            starting_date: startOfTheWeek,
          }),
        }
      );
      const json = await response.json();
      if (response.status == 200) {
        setTrainings(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      getUserInformation(123, "molczak@wp.pl");
      getUserWalks(123, "molczak@wp.pl");
      getUserTrainings(123, "molczak@wp.pl");
    }
  }, []);
  return (
    <View
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        backgroundColor: "#f9f0e9",
        height: windowHeight,
        width: windowWidth,
      }}
    >
      {username != null && walks != null && trainings != null ? (
        <WeekTraining walks={walks} username={username} trainings={trainings} />
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default Trainings;
