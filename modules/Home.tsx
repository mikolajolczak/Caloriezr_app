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
} from "react-native";

import Head from "./Head";
import Feed from "./Feed";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import Calendar from "./Calendar";
import Foot from "./Foot";
import Buttons from "./Buttons";
import ModalChangeSteps from "./ModalChangeSteps";

const Home = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [username, setUsername] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const getUserInformation = async () => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/home",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: 1 }),
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
  if (username != null) {
    return (
      <View
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingTop: 25,
          backgroundColor: "white",
          height: windowHeight,
          width: windowWidth,
        }}
      >
        <ModalChangeSteps
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Head name={username == null ? "" : username.username} />
        <Feed
          steps={username == null ? 0 : username.steps}
          maxSteps={username == null ? 0 : username.maxsteps}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <Achievements
          achievements={username == null ? [] : username.achievements}
        />

        <Statistics statistics={username == null ? [] : username.stats} />
        <Buttons />
        <Calendar events={username == null ? [] : username.events} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Pobieramy dane</Text>
      </View>
    );
  }
};

export default Home;
