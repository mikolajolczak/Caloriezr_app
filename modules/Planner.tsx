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
  const getUserInformation = async () => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/meal",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
          }),
        }
      );
      const json = await response.json();
      setUsername(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserInformation();
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
      <Week username={username} />
    </View>
  );
};

export default Planner;
