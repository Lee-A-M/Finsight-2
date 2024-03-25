import React, { useState } from "react";
import { Font } from 'expo';
import { Text, StyleSheet, View } from "react-native";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { TextInput, Button } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const GoalCreationPage = () => {
  const [
    controlsTextFieldFloatinDatePicker,
    setControlsTextFieldFloatinDatePicker,
  ] = useState(undefined);
  const [
    controlsTextFieldFloatin1DatePicker,
    setControlsTextFieldFloatin1DatePicker,
  ] = useState(undefined);
  const [controlsTextFieldFloatin3Open, setControlsTextFieldFloatin3Open] =
    useState(false);
  const [controlsTextFieldFloatin3Value, setControlsTextFieldFloatin3Value] =
    useState();
  const [controlsTextFieldFloatin3Items, setControlsTextFieldFloatin3Items] =
    useState([
      { value: "Car", label: "Car" },
      { value: "House", label: "House" },
    ]);
  const navigation = useNavigation();

  return (
    <View style={styles.goalCreationPage}>
      <Text style={styles.goalCreation} numberOfLines={1}>
        Goal Creation
      </Text>
      <RNKDatepicker
        label={() => (
          <Text style={styles.controlsTextFieldFloatinLabel}>Start Date</Text>
        )}
        date={controlsTextFieldFloatinDatePicker}
        onSelect={setControlsTextFieldFloatinDatePicker}
        status="basic"
        controlStyle={styles.controlsTextFieldFloatinValue}
      />
      <RNKDatepicker
        label={() => (
          <Text style={styles.controlsTextFieldFloatin1Label}>End Date </Text>
        )}
        date={controlsTextFieldFloatin1DatePicker}
        onSelect={setControlsTextFieldFloatin1DatePicker}
        controlStyle={styles.controlsTextFieldFloatin1Value}
      />
      <TextInput
        style={[styles.controlsTextFieldFloatin, styles.controlsPosition]}
        label="Total Saving Amount"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#72777a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <View style={[styles.controlsTextFieldFloatin1, styles.controlsPosition]}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={controlsTextFieldFloatin3Open}
          setOpen={setControlsTextFieldFloatin3Open}
          value={controlsTextFieldFloatin3Value}
          setValue={setControlsTextFieldFloatin3Value}
          placeholder="Goal Name"
          items={controlsTextFieldFloatin3Items}
          labelStyle={styles.controlsTextFieldFloatin3Value}
          textStyle={styles.controlsTextFieldFloatin3Text}
          dropDownContainerStyle={
            styles.controlsTextFieldFloatin3dropDownContainer
          }
        />
      </View>
      <Text style={[styles.total, styles.totalFlexBox]}>{`Total `}</Text>
      <Text style={[styles.amount, styles.totalFlexBox]}>{`Amount `}</Text>
      <Button
        style={styles.loginButton}
        mode="contained"
        labelStyle={styles.loginButtonBtn}
        onPress={() => navigation.navigate("GoalTrackingPage")}
        contentStyle={styles.loginButtonBtn1}
      >
        Create Goal
      </Button>
      <Image
        style={styles.arrowDownIcon}
        contentFit="cover"
        source={require("../assets/arrowdown1.png")}
      />
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  controlsTextFieldFloatinLabel: {
    fontFamily: "Roboto",
    color: "#72777a",
    fontSize: 12,
  },
  controlsTextFieldFloatinValue: {},
  controlsTextFieldFloatin1Label: {
    fontFamily: "Roboto",
    color: "#72777a",
    fontSize: 12,
  },
  controlsTextFieldFloatin1Value: {},
  controlsTextFieldFloatin3Value: {
    fontFamily: "Roboto",
  },
  controlsTextFieldFloatin3Text: {
    color: "#090a0a",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  controlsTextFieldFloatin3dropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#104d6c",
    borderWidth: 2,
  },
  loginButtonBtn: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  loginButtonBtn1: {
    borderRadius: 48,
    height: 50,
  },
  controlsPosition: {
    height: 52,
    borderRadius: Border.br_5xs,
    left: 44,
    right: 48,
    borderStyle: "solid",
    position: "absolute",
  },
  totalFlexBox: {
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  goalCreation: {
    top: 48,
    left: 113,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    color: Color.black01,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    lineHeight: 20,
    position: "absolute",
  },
  controlsTextFieldFloatin: {
    top: 305,
  },
  dropdownpicker: {
    backgroundColor: Color.neutralColorsWhite,
    borderColor: Color.indigoDye,
    borderWidth: 2,
    borderStyle: "solid",
  },
  controlsTextFieldFloatin1: {
    top: 113,
  },
  total: {
    top: 546,
    left: 60,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.regularNoneMedium,
    color: Color.colorGray_500,
  },
  amount: {
    top: 568,
    left: 137,
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.roboto,
  },
  loginButton: {
    top: 399,
    right: 83,
    left: 72,
    position: "absolute",
  },
  arrowDownIcon: {
    top: 46,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarLight: {
    top: 0,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
  },
  goalCreationPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default GoalCreationPage;
