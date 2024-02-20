/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from "react";
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
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera, CameraType } from "expo-camera";
import { BlurView } from "expo-blur";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
type cameraData = {
  toggleCamera: Function;
  toggleScanned: Function;
  setProduct: Function;
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CameraView = (props: cameraData) => {
  const [scanned, setScanned] = useState(false);
  const getProduct = async (password, email, barcode) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/product/barcode",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            barcode: barcode,
          }),
        }
      );
      if (response.status == 200) {
        const json = await response.json();
        return await getProductInfo(password, email, json.Id);
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getProductInfo = async (password, email, id) => {
    try {
      const response = await fetch(
        "https://shaped-glazing-402314.lm.r.appspot.com/get/product/info",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            id: id,
          }),
        }
      );
      if (response.status == 200) {
        const json = await response.json();
        props.setProduct(json);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleBarCodeScanned = ({ type, data }) => {
    getProduct(123, "molczak@wp.pl", data).then((res) => {
      if (res) {
        setScanned(true);
        props.toggleCamera(false);
        props.toggleScanned(true);
      }
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#000",
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Camera
          style={[StyleSheet.absoluteFill]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ratio="16:9"
          type={CameraType.back}
        />
        <View
          style={{
            width: 200,
            height: 150,
            alignContent: "space-between",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 200,
              height: 150,
              alignContent: "space-between",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderTopColor: "pink",
                borderLeftColor: "pink",
                borderRightColor: "#0000",
                borderBottomColor: "#0000",
                width: 10,
                height: 10,
              }}
            ></View>
            <View
              style={{
                borderWidth: 2,
                borderBottomColor: "pink",
                borderLeftColor: "pink",
                borderRightColor: "#0000",
                borderTopColor: "#0000",
                width: 10,
                height: 10,
              }}
            ></View>
          </View>
          <View
            style={{
              width: 200,
              height: 150,
              alignContent: "space-between",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                borderWidth: 2,
                borderTopColor: "pink",
                borderRightColor: "pink",
                borderLeftColor: "#0000",
                borderBottomColor: "#0000",
                width: 10,
                height: 10,
              }}
            ></View>
            <View
              style={{
                borderWidth: 2,
                borderBottomColor: "pink",
                borderRightColor: "pink",
                borderLeftColor: "#0000",
                borderTopColor: "#0000",
                width: 10,
                height: 10,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cameraContainer: {
    marginHorizontal: 0,
    marginLeft: 0,
    marginStart: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    paddingStart: 0,
    height: windowHeight,
    padding: 0,
  },
});
export default CameraView;
