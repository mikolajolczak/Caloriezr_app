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
import { TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width - 40 - 50;
type searchBarProps = {
  toggleCamera: Function;
};

const SearchBar = (props: searchBarProps) => {
  const [text, onChangeText] = React.useState(
    "Wpisz kod lub nazwę produktu..."
  );
  const photosvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>`;

  return (
    <View
      style={{
        backgroundColor: "transparent",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.32,
        shadowRadius: 2.82,
        elevation: 3,
        borderRadius: 10,
        marginBottom: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Wpisz kod lub nazwę produktu..."
          placeholderTextColor="#9a9a9a"
        />
        <View style={{ paddingRight: windowWidth }} />
        <Pressable
          onPress={() => {
            props.toggleCamera(true);
          }}
          pressRetentionOffset={0}
        >
          <View>
            <LinearGradient
              colors={["#33ba61", "#6AD3C7"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.camera}
            >
              <SvgXml
                xml={photosvg}
                width="100%"
                height="100%"
                stroke="white"
                fill="white"
                strokeWidth="2"
              ></SvgXml>
            </LinearGradient>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    color: "#9a9a9a",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    position: "absolute",
    left: 0,
    width: windowWidth,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    marginLeft: 15,
  },
  camera: {
    width: 50,
    height: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
});
export default SearchBar;
