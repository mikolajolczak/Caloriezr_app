import React, { useState } from "react";
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
import { SvgXml } from "react-native-svg";
const Water = () => {
  const watersvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 0C23.1 0 14.6 3.7 8.6 10.2S-.6 25.4 .1 34.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3H275.3c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S360.9 0 352 0H32zM73 156.5L66.4 64H317.6L311 156.5l-24.2 12.1c-19.4 9.7-42.2 9.7-61.6 0c-20.9-10.4-45.5-10.4-66.4 0c-19.4 9.7-42.2 9.7-61.6 0L73 156.5z"/></svg>`;
  const plussvg = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>`;
  const maxWater = 2600;
  let cupsWater = [];
  const [currentWater, setCurrentWater] = useState(1200);
  const renderWater = () => {
    for (let i = 0; i < maxWater / 200; i += 1) {
      cupsWater[i] = (
        <Pressable
          onPress={() => {
            if (i - 1 < currentWater / 200 && i >= currentWater / 200) {
              setCurrentWater(currentWater + 200);
            } else {
              if (currentWater >= 0) setCurrentWater(currentWater - 200);
            }
          }}
        >
          <View style={{ width: 39, height: 39, marginBottom: 10 }}>
            <SvgXml
              xml={watersvg}
              width="100%"
              height="100%"
              stroke={i < currentWater / 200 ? "#2b9454" : "#9a9a9a"}
              fill={i < currentWater / 200 ? "#2b9454" : "#9a9a9a"}
            ></SvgXml>
            {i - 1 < currentWater / 200 && i >= currentWater / 200 ? (
              <SvgXml
                xml={plussvg}
                width="50%"
                height="50%"
                stroke={"#2b9454"}
                fill={"#2b9454"}
                style={{ marginTop: -25, marginLeft: 9 }}
              ></SvgXml>
            ) : (
              <></>
            )}
          </View>
        </Pressable>
      );
    }
  };
  renderWater();
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            color: "black",
            fontFamily: "Roboto-Regular",
            fontSize: 16,
            marginBottom: 10,
          }}
        >
          Wypita Woda
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#2b9454",
              fontFamily: "Roboto-Light",
              fontSize: 16,
            }}
          >
            {currentWater}
          </Text>
          <Text
            style={{ color: "black", fontFamily: "Roboto-Light", fontSize: 16 }}
          >
            /{maxWater}ml
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {cupsWater}
      </View>
    </View>
  );
};

export default Water;
