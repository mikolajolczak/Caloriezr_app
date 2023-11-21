import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SvgXml, Path, Svg } from "react-native-svg";
import { useFonts } from "expo-font";
type Data = {
  svg: string;
  description: string;
  number: number;
  unit: string;
};
const Achievement = (props: Data) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  });
  return (
    <View style={styles.generalWrapper}>
      <View style={styles.xml}>
        <SvgXml
          xml={props.svg}
          width="100%"
          height="100%"
          fill="#2B9454"
          stroke="#2B9454"
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={styles.descriptionText}>{props.description}</Text>
        <View style={styles.bottomWrapper}>
          <Text style={styles.number}>{props.number}</Text>
          <Text style={styles.unit}>{props.unit}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  generalWrapper: { flexDirection: "column", paddingRight: 30, marginTop: 10 },
  bottomWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 1,
  },
  xml: {
    height: 45,
    width: "100%",
    paddingBottom: 5,
  },
  descriptionText: {
    color: "black",
    fontSize: 11,
    fontFamily: "Roboto-Medium",
    marginTop: 0,
  },
  number: {
    color: "#2B9454",
    fontFamily: "Roboto-Medium",
    fontSize: 13,
  },
  unit: { fontSize: 11, fontFamily: "Roboto-Light", color: "black" },
});
export default Achievement;
