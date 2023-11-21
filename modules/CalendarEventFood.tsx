import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
type eventInfo = {
  isFocused: boolean;
  eventData: JSON;
};
const CalendarEventFood = (props: eventInfo) => {
  const checkxml = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
  const parseDate = (date: string) => {
    const parts = date.split("-");
    const monthnumber = parseInt(parts[1]);
    switch (monthnumber) {
      case 1:
        return parts[2] + " stycznia";
      case 2:
        return parts[2] + " lutego";
      case 3:
        return parts[2] + " marca";
      case 4:
        return parts[2] + " kwietnia";
      case 5:
        return parts[2] + " maja";
      case 6:
        return parts[2] + " czerwca";
      case 7:
        return parts[2] + " lipca";
      case 8:
        return parts[2] + " sierpnia";
      case 9:
        return parts[2] + " września";
      case 10:
        return parts[2] + " października";
      case 11:
        return parts[2] + " listopada";
      case 12:
        return parts[2] + " grudnia";
      default:
        return "null";
    }
  };
  const parseTimeLength = (timelength: string) => {
    const [hours, minutes] = timelength.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  };
  return (
    <View
      style={
        props.isFocused
          ? styles.wrapper
          : [styles.wrapper, { backgroundColor: "#C3F5D4" }]
      }
    >
      <View style={styles.header}>
        <Text
          style={
            props.isFocused ? styles.title : [styles.title, { color: "black" }]
          }
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {props.eventData.name}
        </Text>
        <View style={styles.date}>
          <Text
            style={
              props.isFocused
                ? styles.dateHourText
                : [styles.dateHourText, { color: "black" }]
            }
          >
            {props.eventData.timeofday}
          </Text>
          <Text
            style={
              props.isFocused
                ? styles.dateText
                : [styles.dateText, { color: "black" }]
            }
          >
            {parseDate(props.eventData.date)}
          </Text>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <View style={styles.img}>
          <Image
            source={require("./png/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png")}
            style={{ width: 39, height: 39, borderRadius: 39 / 2 }}
          />
        </View>
        <Text
          style={
            props.isFocused
              ? styles.imgDescription
              : [styles.imgDescription, { color: "black" }]
          }
        >
          {props.eventData.description}
        </Text>
      </View>
      <Text
        style={
          props.isFocused
            ? styles.prepTime
            : [styles.prepTime, { color: "black" }]
        }
      >
        Przygotowanie:{" "}
        <Text style={{ fontFamily: "Roboto-Light" }}>
          {parseTimeLength(props.eventData.eventtimelength)}min
        </Text>
      </Text>
      <View style={styles.macroContainer}>
        <View style={styles.macrokcalContainer}>
          <Text style={styles.macrokcal}>{props.eventData.calories}</Text>
          <Text style={styles.macrokcal}>kcal</Text>
        </View>
        <View style={styles.macrocarbContainer}>
          <Text style={styles.macrocarb}>{props.eventData.carbs}g</Text>
          <Text style={styles.macrocarb}>Węgl.</Text>
        </View>
        <View style={styles.macroprotContainer}>
          <Text style={styles.macroprot}>{props.eventData.proteins}g</Text>
          <Text style={styles.macroprot}>Biał.</Text>
        </View>
        <View style={styles.macrofatContainer}>
          <Text style={styles.macrofat}>{props.eventData.fats}g</Text>
          <Text style={styles.macrofat}>Tł.</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#CCFFF9", "#E8FFFC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.status}
      >
        <Text style={styles.statusText}>Wykonane!</Text>

        <SvgXml
          xml={checkxml}
          style={styles.checkxml}
          width="50%"
          height="50%"
          stroke="black"
          fill="black"
        ></SvgXml>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: -1,
  },
  wrapper: {
    maxWidth: 170,
    width: 120,
    height: 170,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#33ba61",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: { flexDirection: "row", maxWidth: 130, marginTop: 6 },
  imgDescription: {
    flexWrap: "wrap",
    maxWidth: 120,
    color: "white",
    fontFamily: "Roboto-Bold",
    fontSize: 10,
    width: 60,
    marginLeft: 4,
  },
  macroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 3,
  },
  macro: {
    maxWidth: 20,
    maxHeight: 100,
  },
  macrokcalContainer: {
    borderRadius: 5,
    backgroundColor: "#DDEADF",
    height: 20,
    width: 21,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
  },
  macrocarbContainer: {
    borderRadius: 5,
    backgroundColor: "#F7EDE5",
    height: 20,
    width: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  macroprotContainer: {
    borderRadius: 5,
    backgroundColor: "#E5F7F5",
    height: 20,
    width: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  macrofatContainer: {
    borderRadius: 5,
    backgroundColor: "#F9DCF9",
    height: 20,
    width: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  macrofat: {
    fontSize: 8,
    textAlign: "center",
    fontFamily: "Roboto-Light",
    color: "#DB3BDB",
    marginTop: -2,
  },
  macroprot: {
    fontSize: 8,
    textAlign: "center",
    fontFamily: "Roboto-Light",
    color: "#01A2D6",
    marginTop: -2,
  },
  macrocarb: {
    fontSize: 8,
    textAlign: "center",
    fontFamily: "Roboto-Light",
    color: "#E66D00",
    marginTop: -2,
  },
  macrokcal: {
    fontSize: 8,
    textAlign: "center",
    fontFamily: "Roboto-Light",
    color: "#2B9454",
    marginTop: -2,
  },
  title: { color: "white", fontSize: 16, fontFamily: "Roboto-Bold" },
  dateText: {
    color: "white",
    fontSize: 8,
    fontFamily: "Roboto-Light",
    marginTop: -4,
  },
  prepTime: { color: "white", fontSize: 9, marginTop: 8 },
  dateHourText: { color: "white", fontSize: 10 },
  statusText: { fontSize: 10, color: "black" },
  status: {
    backgroundColor: "white",
    borderRadius: 3,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 11,
    marginTop: 17,
    flexDirection: "row",
    padding: 2,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
  },
  checkxml: {
    width: 10,
    height: 10,
    marginLeft: -10,
    marginRight: -15,
  },
  img: { marginTop: 1 },
});

export default CalendarEventFood;
