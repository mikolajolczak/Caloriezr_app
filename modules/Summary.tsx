import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rect, Svg, SvgXml } from "react-native-svg";
type Data = {
  color: string;
  secondary_color: string;
  text_color: string;
  max_value: string;
  current_value: number;
  description: string;
  unit: string;
};
const Summary = (props: Data) => {
  const maxHeight = 95;
  const calculatePercentage = (current: any, max: string) => {
    if (max.toString().includes("-")) {
      const firsthalf = parseInt(max.substring(0, max.indexOf("-")));
      const secondhalf = parseInt(max.slice(max.indexOf("-") + 1));
      const average = (firsthalf + secondhalf) / 2;
      return Math.round((current / average) * 100);
    } else {
      return Math.round((current / parseInt(max)) * 100);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Svg style={styles.svg}>
        <Rect width="75" height={maxHeight} fill={props.color} rx={6} ry={6} />
        <Rect
          width="75"
          height={
            maxHeight -
            calculatePercentage(props.current_value, props.max_value)
          }
          fill={props.secondary_color}
          rx={6}
          ry={6}
        />
      </Svg>
      {calculatePercentage(props.current_value, props.max_value) > 10 ? (
        <Text
          style={{
            color: props.text_color,
            marginLeft: 20,
            marginTop: -67,
            fontFamily: "Roboto-Bold",
            fontSize: 20,
          }}
        >
          {calculatePercentage(props.current_value, props.max_value)}%
        </Text>
      ) : (
        <View style={{ marginLeft: 16, marginTop: -67, flexDirection: "row" }}>
          <Text
            style={{ color: "#0000", fontFamily: "Roboto-Bold", fontSize: 20 }}
          >
            0
          </Text>
          <Text
            style={{
              color: props.text_color,

              fontFamily: "Roboto-Bold",
              fontSize: 20,
            }}
          >
            {calculatePercentage(props.current_value, props.max_value)}%
          </Text>
        </View>
      )}

      <View style={styles.textStats}>
        <Text style={styles.unitText}>{props.description}</Text>
        <Text style={styles.currentValue}>
          {Math.round(props.current_value)}/{"\n"}
          {props.max_value}
          {props.unit}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    marginRight: 18,
  },
  svg: {
    width: 75,
    height: 100,
  },
  textStats: {
    marginTop: 40,
  },
  unitText: { fontFamily: "Roboto-Medium", color: "black", fontSize: 13 },
  currentValue: {
    fontSize: 12,
    fontFamily: "Roboto-Light",
    color: "#686868",
    lineHeight: 12,
  },
});
export default Summary;
