/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import SearchBar from "./SearchBar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Animated, TouchableOpacity } from "react-native";
import List from "./List";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
type foodLists = {
  recent: [];
  favourite: [];
  getUserInformation: Function;
  toggleScanned: Function;
};
const FoodList = (props: foodLists) => {
  const Tab = createMaterialTopTabNavigator();
  const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      background: "rgb(255, 255, 255)",
    },
  };
  return (
    <NavigationContainer independent theme={MyTheme}>
      <MenuProvider>
        <Tab.Navigator
          screenOptions={{
            tabBarPressColor: "white",
            tabBarIndicatorStyle: {
              width: 0,
              height: 0,
              elevation: 0,
            },
            swipeEnabled: false,
            animationEnabled: false,
            tabBarStyle: {
              backgroundColor: "white",
              shadowColor: "white",
            },
          }}
        >
          <Tab.Screen
            name="Ostatnie"
            children={() => (
              <List
                elements={props.recent}
                getUserInformation={props.getUserInformation}
                isFavourite={false}
                toggleScanned={props.toggleScanned}
              />
            )}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <>
                  {focused ? (
                    <Text style={styles.focusedText}>Ostatnie</Text>
                  ) : (
                    <Text style={styles.unfocusedText}>Ostatnie</Text>
                  )}
                </>
              ),
            }}
          />
          <Tab.Screen
            name="Ulubione"
            children={() => (
              <List
                elements={props.favourite}
                getUserInformation={props.getUserInformation}
                isFavourite={true}
                toggleScanned={props.toggleScanned}
              />
            )}
            options={{
              tabBarLabel: ({ focused, color }) => (
                <>
                  {focused ? (
                    <Text style={styles.focusedText}>Ulubione</Text>
                  ) : (
                    <Text style={styles.unfocusedText}>Ulubione</Text>
                  )}
                </>
              ),
            }}
          />
        </Tab.Navigator>
      </MenuProvider>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  focusedText: { color: "#2B9454", fontFamily: "Roboto-Bold", fontSize: 16 },
  unfocusedText: { color: "#9a9a9a", fontFamily: "Roboto-Bold", fontSize: 16 },
});
export default FoodList;
