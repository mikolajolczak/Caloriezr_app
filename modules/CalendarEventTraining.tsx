import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { Buffer } from "buffer";
import ModalTrainingInfo from "./ModalTrainingInfo";
type eventInfo = {
  isFocused: boolean;
  eventData: JSON;
};
const CalendarEventTraining = (props: eventInfo) => {
  const arrowRightSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>`;
  const checkxml = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`;
  const [modalVisible, setModalVisible] = useState(false);
  const doTraining = async (password, email, training_id) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/set/training/done",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            id: training_id,
          }),
        }
      );
      if (response.status == 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };
  const parseDate = (date: string) => {
    const parts = date.split(".");
    const monthnumber = parseInt(parts[1]);
    switch (monthnumber) {
      case 1:
        return parts[0] + " stycznia";
      case 2:
        return parts[0] + " lutego";
      case 3:
        return parts[0] + " marca";
      case 4:
        return parts[0] + " kwietnia";
      case 5:
        return parts[0] + " maja";
      case 6:
        return parts[0] + " czerwca";
      case 7:
        return parts[0] + " lipca";
      case 8:
        return parts[0] + " sierpnia";
      case 9:
        return parts[0] + " września";
      case 10:
        return parts[0] + " października";
      case 11:
        return parts[0] + " listopada";
      case 12:
        return parts[0] + " grudnia";
      default:
        return "null";
    }
  };
  const bufferToImg = (buffer) => {
    const b64 = Buffer.from(buffer).toString("base64");
    const mimeType = "image/png";
    return `data:${mimeType};base64,${b64}`;
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
      <ModalTrainingInfo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        training={props.eventData}
      />
      <View style={styles.header}>
        <Text
          style={
            props.isFocused ? styles.title : [styles.title, { color: "black" }]
          }
        >
          Trening
        </Text>
        <View style={styles.date}>
          <Text
            style={
              props.isFocused
                ? styles.dateHourText
                : [styles.dateHourText, { color: "black" }]
            }
          >
            {new Date(props.eventData.Date_Start)
              .toLocaleTimeString()
              .slice(0, -3)}
          </Text>
          <Text
            style={
              props.isFocused
                ? styles.dateText
                : [styles.dateText, { color: "black" }]
            }
          >
            {parseDate(
              new Date(props.eventData.Date_Start).toLocaleDateString()
            )}
          </Text>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Text
          style={
            props.isFocused
              ? styles.imgDescription
              : [styles.imgDescription, { color: "black" }]
          }
        >
          {props.eventData.Description}
        </Text>
      </View>
      <Text
        style={
          props.isFocused
            ? styles.workTime
            : [styles.workTime, { color: "black" }]
        }
      >
        Czas:{" "}
        <Text style={{ fontFamily: "Roboto-Light" }}>
          {(new Date(props.eventData.Date_End).getTime() -
            new Date(props.eventData.Date_Start).getTime()) /
            60000}
          min
        </Text>
      </Text>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <LinearGradient
          colors={["#32b960", "#87e1fd"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1.9, y: 0 }}
          style={styles.trainingPlanContainer}
        >
          <Text style={styles.description}>Plan treningowy</Text>
          <SvgXml
            xml={arrowRightSvg}
            style={styles.arrowSvg}
            width="45%"
            height="45%"
            stroke="white"
            fill="white"
          ></SvgXml>
        </LinearGradient>
      </Pressable>
      <Pressable
        onPress={() => {
          doTraining(123, "molczak@wp.pl", props.eventData.Training_Id);
        }}
      >
        <LinearGradient
          colors={["#CCFFF9", "#E8FFFC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.status}
        >
          <Text style={styles.statusText}>
            {props.eventData.IsDone ? "Wykonane!" : "Nieywkonane!"}
          </Text>
          <SvgXml
            xml={checkxml}
            style={styles.checkxml}
            width="50%"
            height="50%"
            stroke="black"
            fill="black"
          ></SvgXml>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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
  date: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  arrowSvg: {
    maxWidth: 20,
    maxHeight: 20,
    marginLeft: -3,
    marginRight: -3,
  },
  trainingPlanContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    width: 90,
    marginLeft: 5,
    height: 20,
    marginTop: 3,
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
  },
  title: { color: "white", fontSize: 16, fontFamily: "Roboto-Bold" },
  dateText: {
    color: "white",
    fontSize: 8,
    fontFamily: "Roboto-Light",
    marginTop: -4,
  },
  dateHourText: { color: "white", fontSize: 10 },
  workTime: { color: "white", fontSize: 9, marginTop: 9 },
  descriptionContainer: {},
  description: {
    fontSize: 9,
    fontFamily: "Roboto-Light",
    color: "white",
    marginTop: -1,
  },
  statusText: { fontSize: 10, color: "black" },
  checkxml: {
    width: 10,
    height: 10,
    marginLeft: -10,
    marginRight: -15,
  },
});
export default CalendarEventTraining;
