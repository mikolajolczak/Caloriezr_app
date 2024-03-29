/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {
  NavigationContainer,
  DefaultTheme,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DayInfo from "./DayInfo";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createMaterialTopTabNavigator();

const getDayOfTheWeek = (dayOfTheWeek: number) => {
  switch (dayOfTheWeek) {
    case 1:
      return "PON";
    case 2:
      return "WTO";
    case 3:
      return "ŚRO";
    case 4:
      return "CZW";
    case 5:
      return "PIĄ";
    case 6:
      return "SOB";
    case 7:
      return "NIE";
    default:
      return "NON";
  }
};
type weekData = {
  username: JSON;
  meals: any[];
  waters: any[];
  getUserWaters: Function;
};
const Week = (props: weekData) => {
  const [firstTime, setFirstTime] = useState(true);
  const navigationRef = useNavigationContainerRef();
  const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(255, 255, 255)",
    },
  };
  const returnXProducts = (currentDay: Date) => {
    let output = [];
    let j = -1;
    let startOfTheWeek: Date;
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
      let currentDayMeals = [];
      let currentCalories = 0;
      let currentProteins = 0;
      let currentFats = 0;
      let currentCarbs = 0;
      let currentWater = 0;
      if (props.username != null) {
        props.meals.meals.every((meal) => {
          if (
            new Date(meal.Date).getDate() == startOfTheWeek.getDate() + i &&
            new Date(meal.Date).getFullYear() == startOfTheWeek.getFullYear() &&
            new Date(meal.Date).getMonth() == startOfTheWeek.getMonth()
          ) {
            currentDayMeals.push(meal);
            currentCalories += meal.calories;
            currentFats += meal.fats;
            currentCarbs += meal.carbs;
            currentProteins += meal.proteins;
            return true;
          } else {
            return true;
          }
        });
        props.waters.every((water) => {
          if (
            new Date(water.Date).getDate() == startOfTheWeek.getDate() + i &&
            new Date(water.Date).getFullYear() ==
              startOfTheWeek.getFullYear() &&
            new Date(water.Date).getMonth() == startOfTheWeek.getMonth()
          ) {
            currentWater += water.Drunk_Water;
            return true;
          } else {
            return true;
          }
        });
      }

      if (
        j == -1 &&
        new Date(
          startOfTheWeek.getFullYear(),
          startOfTheWeek.getMonth() + 1,
          0
        ).getDate() <
          startOfTheWeek.getDate() + i
      ) {
        j = i - 1;
      }
      output[i] = (
        <Tab.Screen
          key={i}
          name={"Day" + i.toString()}
          children={() => (
            <DayInfo
              currentDayMeals={currentDayMeals}
              waters={props.waters}
              userInfo={props.username}
              getUserWaters={props.getUserWaters}
              key={i}
              dailyCalories={currentCalories}
              dailyCarbs={currentCarbs}
              dailyFats={currentFats}
              dailyProteins={currentProteins}
              dailyWater={currentWater}
            />
          )}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <>
                {focused ? (
                  <LinearGradient
                    colors={["#33ba61", "#6AD3C7"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.labelContainerFocused}
                  >
                    <Text style={{ color: "white", fontFamily: "Roboto-Bold" }}>
                      {new Date(
                        startOfTheWeek.getFullYear(),
                        startOfTheWeek.getMonth() + 1,
                        0
                      ).getDate() >=
                      startOfTheWeek.getDate() + i
                        ? startOfTheWeek.getDate() + i
                        : i - j}
                    </Text>
                    <Text
                      style={{ color: "white", fontFamily: "Roboto-Light" }}
                    >
                      {getDayOfTheWeek(startOfTheWeek.getDay() + i)}
                    </Text>
                  </LinearGradient>
                ) : (
                  <View style={styles.labelContainerUnfocused}>
                    <Text style={{ color: "grey", fontFamily: "Roboto-Bold" }}>
                      {new Date(
                        startOfTheWeek.getFullYear(),
                        startOfTheWeek.getMonth() + 1,
                        0
                      ).getDate() >=
                      startOfTheWeek.getDate() + i
                        ? startOfTheWeek.getDate() + i
                        : i - j}
                    </Text>
                    <Text style={{ color: "grey", fontFamily: "Roboto-Light" }}>
                      {getDayOfTheWeek(startOfTheWeek.getDay() + i)}
                    </Text>
                  </View>
                )}
              </>
            ),
          }}
        />
      );
    }
    return output;
  };

  useEffect(() => {
    if (firstTime) {
      const currentDay = new Date();
      if (currentDay.getDay() == 0) {
        navigationRef.navigate("Day" + (currentDay.getDay() + 6).toString());
      } else {
        navigationRef.navigate("Day" + (currentDay.getDay() - 1).toString());
      }
      setFirstTime(false);
    }
  });
  return (
    <NavigationContainer independent theme={MyTheme} ref={navigationRef}>
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: "white",
          tabBarIndicatorStyle: {
            width: 0,
            height: 0,
            elevation: 0,
          },
          tabBarScrollEnabled: false,
          swipeEnabled: false,
          animationEnabled: false,
          tabBarStyle: {
            backgroundColor: "white",
            shadowColor: "white",
          },
          lazy: false,
        }}
      >
        {returnXProducts(new Date())}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  labelContainerFocused: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 50,
    width: 45,
    height: 45,
  },
  labelContainerUnfocused: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
  },
  focusedText: { color: "white", fontFamily: "Roboto-Bold" },
  unfocusedText: { color: "grey", fontFamily: "Roboto-Light" },
});
export default Week;
