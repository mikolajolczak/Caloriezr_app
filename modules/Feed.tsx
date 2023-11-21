import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
  Button,
} from "react-native";
import { SvgXml, Path, Svg } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
type feedData = {
  steps: number;
  maxSteps: number;
  setModalVisible: Function;
  modalVisible: boolean;
};

const parseMonth = (monthNumber: number) => {
  switch (monthNumber) {
    case 1:
      return "Styczeń";
    case 2:
      return "Luty";
    case 3:
      return "Marzec";
    case 4:
      return "Kwiecień";
    case 5:
      return "Maj";
    case 6:
      return "Czerwiec";
    case 7:
      return "Lipiec";
    case 8:
      return "Sierpień";
    case 9:
      return "Wrzesień";
    case 10:
      return "Październik";
    case 11:
      return "Listopad";
    case 12:
      return "Grudzień";
    default:
      return "null";
  }
};

const Feed = (props: feedData) => {
  const svgXml = `<svg width="103" height="104" viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M91.5729 84C98.6197 75.2252 102.836 64.0801 102.836 51.9502C102.836 23.6602 79.9023 0.726624 51.6122 0.726624C23.3222 0.726624 0.388641 23.6602 0.388641 51.9502C0.388641 64.0801 4.60479 75.2252 11.6515 84H17.3542C9.59082 75.7689 4.7679 64.7341 4.56482 52.5749C4.56039 52.5321 4.55812 52.4887 4.55812 52.4447C4.55812 52.4207 4.5588 52.3969 4.56013 52.3732C4.56055 52.3657 4.56104 52.3583 4.5616 52.3508C4.55929 52.1591 4.55814 51.967 4.55814 51.7747C4.55814 25.831 25.5897 4.79944 51.5334 4.79944C51.8929 4.79944 52.2514 4.80347 52.609 4.81152C52.666 4.80356 52.7242 4.79944 52.7834 4.79944C52.8658 4.79944 52.9464 4.80743 53.0244 4.82266C78.2781 5.61005 98.5087 26.3298 98.5087 51.7747C98.5087 64.2496 93.6459 75.5887 85.7126 84H91.5729ZM79.2886 84C78.9861 83.7719 78.7906 83.4095 78.7906 83.0014C78.7906 82.3111 79.3503 81.7514 80.0406 81.7514H82.3274C89.4495 74.4363 93.9874 64.5926 94.4665 53.6947H92.7993C92.109 53.6947 91.5493 53.1351 91.5493 52.4447C91.5493 51.7544 92.109 51.1947 92.7993 51.1947H94.5048C94.3585 40.1274 90.0285 30.0696 83.0244 22.5307L82.0222 23.5329C81.5341 24.021 80.7426 24.021 80.2545 23.5329C79.7663 23.0447 79.7663 22.2532 80.2545 21.7651L81.2704 20.7491C74.1117 13.8858 64.5822 9.47601 54.0334 8.87094V9.9288C54.0334 10.6191 53.4737 11.1788 52.7834 11.1788C52.093 11.1788 51.5334 10.6191 51.5334 9.9288L51.5334 8.79944C40.2704 8.79944 30.0194 13.1322 22.3562 20.2219L23.2915 21.1572C23.7797 21.6453 23.7797 22.4368 23.2915 22.925C22.8034 23.4131 22.0119 23.4131 21.5238 22.925L20.5709 21.972C13.2566 29.5692 8.71199 39.8517 8.56197 51.1947H9.68748C10.3778 51.1947 10.9375 51.7544 10.9375 52.4447C10.9375 53.1351 10.3778 53.6947 9.68748 53.6947H8.60026C9.07941 64.5926 13.6173 74.4363 20.7394 81.7514H22.4462C23.1365 81.7514 23.6962 82.3111 23.6962 83.0014C23.6962 83.4095 23.5006 83.7719 23.1982 84H79.2886Z" fill="#F7F6ED"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6515 84C21.0397 95.6904 35.4521 103.174 51.6122 103.174C67.7724 103.174 82.1848 95.6904 91.5729 84H11.6515Z" fill="#F7F6ED"/>
  </svg>
  `;

  function polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }
  function describeArc(
    x: number,
    y: number,
    radius: number,
    spread: number,
    startAngle: number,
    endAngle: number
  ) {
    var innerStart = polarToCartesian(x, y, radius, endAngle);
    var innerEnd = polarToCartesian(x, y, radius, startAngle);
    var outerStart = polarToCartesian(x, y, radius + spread, endAngle);
    var outerEnd = polarToCartesian(x, y, radius + spread, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M",
      outerStart.x,
      outerStart.y,
      "A",
      radius + spread,
      radius + spread,
      0,
      largeArcFlag,
      0,
      outerEnd.x,
      outerEnd.y,
      "L",
      innerEnd.x,
      innerEnd.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      innerStart.x,
      innerStart.y,
      "L",
      outerStart.x,
      outerStart.y,
      "Z",
    ].join(" ");

    return d;
  }
  const changeScale = (maxsteps: number, steps: number) => {
    return (steps / maxsteps) * 270 - 135;
  };
  const [arc, setArc] = useState(0);
  const [localDate, setLocalDate] = useState("");
  const getCurrentDate = () => {
    const today = new Date();
    const date =
      today.getDate() +
      " " +
      parseMonth(today.getMonth() + 1) +
      " " +
      today.getFullYear();
    setLocalDate(date);
  };
  const [checkpoints, setCheckpoints] = useState([] as any);
  const setLinspaceCheckpoints = (
    startValue: number,
    stopValue: number,
    numberOfElements: number
  ) => {
    let arr = [];
    let step = (stopValue / 1000 - startValue) / (numberOfElements - 1);
    for (let i = 0; i < numberOfElements; i++) {
      arr.push(Math.round(startValue + step * i));
    }
    setCheckpoints(arr);
  };
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    if (initialRender && props.maxSteps != 0) {
      getCurrentDate();
      setInitialRender(false);
    }
    setLinspaceCheckpoints(0, props.maxSteps, 7);
    setArc(changeScale(props.maxSteps, props.steps));
  }, [props]);
  return (
    <View>
      <LinearGradient
        colors={["#32b960", "#87e1fd"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.9, y: 0 }}
        style={styles.feed}
      >
        <View style={styles.left}>
          <Text style={styles.date}>{localDate}</Text>
          <Text style={styles.footCount}>Dzisiejsza liczba kroków</Text>
          <Text style={styles.footGoal}>
            Pozostało jeszcze tylko{" "}
            <Text style={{ fontFamily: "Roboto-Bold" }}>
              {props.maxSteps - props.steps}
            </Text>{" "}
            kroków do celu!
          </Text>
        </View>
        <View style={styles.right}>
          <View style={styles.wrap}>
            <Svg width="103" height="104" style={styles.circle}>
              <Path
                d={describeArc(51, 57, 40, 10, -180, arc)}
                fill="#2B9454"
                stroke="#2B9454"
              />
              <Path
                d={describeArc(51, 57, 40, 10, arc, 180)}
                fill="#ABDEBA"
                stroke="#ABDEBA"
              />
            </Svg>
            <SvgXml xml={svgXml} style={styles.xml}></SvgXml>
            <View style={styles.numberOne}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "left" }}
              >
                {checkpoints[0]}
              </Text>
            </View>
            <View style={styles.numberTwo}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "left" }}
              >
                {checkpoints[1]}
              </Text>
            </View>

            <View style={styles.numberThree}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "left" }}
              >
                {checkpoints[2]}
              </Text>
            </View>

            <View style={styles.numberFour}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "center" }}
              >
                {checkpoints[3]}
              </Text>
            </View>

            <View style={styles.numberFive}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "right" }}
                numberOfLines={1}
              >
                {checkpoints[4]}
              </Text>
            </View>

            <View style={styles.numberSix}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "right" }}
              >
                {checkpoints[5]}
              </Text>
            </View>

            <View style={styles.numberSeven}>
              <Text
                style={{ fontSize: 9, color: "#2B9454", textAlign: "right" }}
              >
                {checkpoints[6]}
              </Text>
            </View>

            <View style={styles.footCountTextWrapper}>
              {props.steps >= 10000 ? (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={styles.footCountTextNumber}>
                    {Math.floor(props.steps / 1000)}
                  </Text>
                  <Text style={styles.footCountTextNumber}>
                    {(props.steps + "").slice(-3)}
                  </Text>
                </View>
              ) : (
                <View style={{ paddingTop: 17 }}>
                  <Text
                    style={[styles.footCountTextNumber, { marginBottom: 4.5 }]}
                  >
                    {props.steps}
                  </Text>
                </View>
              )}

              <Text style={styles.footCountText}>KROKÓW</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottomfeed}>
        <Text style={styles.weeklyReport}>Tygodniowy raport kroków</Text>
        <Pressable
          onPress={() => {
            props.setModalVisible(!props.modalVisible);
          }}
        >
          <Text style={styles.changeGoal}>Zmień Cel</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    borderRadius: 15,
  },
  text: { paddingBottom: 16, color: "white" },
  left: { flexDirection: "column" },
  right: { aspectRatio: 1, marginLeft: 65, marginTop: -2 },
  xml: {
    height: 103,
    width: 104,
    marginTop: -99,
  },
  bottomfeed: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 5,
    paddingBottom: 10,
  },
  changeGoal: {
    marginLeft: 10,
    fontSize: 13,
    fontFamily: "Roboto-Light",
    color: "#6b6b6b",
  },
  weeklyReport: { color: "#2B9454", fontSize: 13, fontFamily: "Roboto-Medium" },
  circle: {},
  numberOne: {
    position: "absolute",
    zIndex: 1,
    top: 80,
    left: 25,
  },
  numberTwo: {
    position: "absolute",
    zIndex: 1,
    top: 50,
    left: 13,
  },
  numberThree: {
    position: "absolute",
    zIndex: 1,
    bottom: 69,
    left: 23,
    width: 12,
    transform: [{ rotate: "45deg" }],
  },
  numberFour: {
    position: "absolute",
    zIndex: 1,
    top: 15,
    left: 47,
    width: 12,
  },
  numberFive: {
    position: "absolute",
    zIndex: 1,
    bottom: 69,
    right: 22,
    width: 12,
    transform: [{ rotate: "-45deg" }],
  },
  numberSix: {
    position: "absolute",
    margin: 0,
    padding: 0,
    zIndex: 1,
    top: 50,
    right: 13,
  },
  numberSeven: {
    position: "absolute",
    margin: 0,
    padding: 0,
    zIndex: 1,
    top: 80,
    right: 26,
  },
  footCount: {
    color: "white",
    fontSize: 20,
    width: 140,
    paddingBottom: 8,
    fontFamily: "Roboto-Bold",
  },
  footCountTextWrapper: {
    position: "absolute",
    top: 26,
    left: 21,
    width: 60,
    alignItems: "center",
  },
  footCountTextNumber: { color: "#2B9454", fontWeight: "bold", fontSize: 16 },
  footCountText: { color: "#2B9454", fontSize: 9 },
  date: { paddingBottom: 1, color: "white", fontSize: 13 },
  footGoal: {
    color: "white",
    paddingBottom: 7,
    width: 150,
    fontSize: 13,
  },
  wrap: { zIndex: 0, position: "absolute" },
});

export default Feed;
