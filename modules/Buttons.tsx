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
  Pressable,
} from "react-native";
import { SvgXml, Path, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
type ButtonsData = {
  modalSettingsVisible: any;
  setModalSettingsVisible: Function;
  modalMealVisible: any;
  setModalMealVisible: Function;
};
const Buttons = (props: ButtonsData) => {
  const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`;
  const gearSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`;
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => {
          props.setModalMealVisible(true);
        }}
      >
        <LinearGradient
          colors={["#32b960", "#87E1FD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 2, y: -4 }}
          style={styles.addMealButton}
        >
          <Text style={styles.addMealButtonText}>Dodaj posiłek</Text>
          <SvgXml
            xml={plusSvg}
            style={styles.plusSvg}
            width="100%"
            height="100%"
            stroke="white"
            fill="white"
          ></SvgXml>
        </LinearGradient>
      </Pressable>
      <Pressable
        onPress={() => {
          props.setModalSettingsVisible(true);
        }}
      >
        <LinearGradient
          colors={["#dcdcdc", "#f7f6ed"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.settings}
        >
          <Text style={styles.settingsButtonText}>Ustawienia</Text>
          <SvgXml
            xml={gearSvg}
            style={styles.gearSvG}
            width="100%"
            height="100%"
          ></SvgXml>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  addMealButton: {
    flexDirection: "row",
    width: 95,
    height: 25,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  addMealButtonText: {
    fontSize: 10,
    color: "white",
    fontFamily: "Roboto-Medium",
  },
  settingsButtonText: {
    fontSize: 10,
    color: "black",
    fontFamily: "Roboto-Light",
  },
  plusSvg: {
    maxWidth: 9,
    maxHeight: 20,
    marginLeft: 3,
  },
  settings: {
    flexDirection: "row",
    width: 95,
    height: 25,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  gearSvG: { maxWidth: 10, maxHeight: 20, marginLeft: 5 },
  title: {
    paddingBottom: 8,
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
export default Buttons;
