import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Button, TextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const WeeklyInputPage = () => {
  const [dropdownBoxOpen, setDropdownBoxOpen] = useState(false);
  const [dropdownBoxValue, setDropdownBoxValue] = useState();
  const [dropdownBoxItems, setDropdownBoxItems] = useState([
    { value: "IT", label: "IT" },
    { value: "Education", label: "Education" },
    { value: "Health Care", label: "Health Care" },
    { value: "Business", label: "Business" },
    { value: "Arts", label: "Arts" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Government", label: "Government" },
  ]);

  return (
    <View style={styles.weeklyInputPage}>
      <Text style={styles.weeklyExpenseInput}>{`Weekly Expense Input `}</Text>
      <Image
        style={styles.weeklyInputPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Text style={[styles.total, styles.totalFlexBox]}>{`Total `}</Text>
      <Text style={[styles.amount, styles.totalFlexBox]}>{`Amount `}</Text>
      <Button
        style={styles.loginButton}
        mode="contained"
        labelStyle={styles.loginButtonBtn}
        contentStyle={styles.loginButtonBtn1}
      >{`Save `}</Button>
      <Button
        style={styles.loginButton1}
        mode="contained"
        labelStyle={styles.loginButton1Btn}
        contentStyle={styles.loginButton1Btn1}
      >{`Save `}</Button>
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
      <View
        style={[styles.dropdownBox, styles.dropdownBoxLayout]}
        closeAfterSelecting="true"
        zIndex="10"
        showArrowIcon="true"
        showTickIcon="true"
      >
        <DropDownPicker
          style={styles.dropdownpicker}
          open={dropdownBoxOpen}
          setOpen={setDropdownBoxOpen}
          value={dropdownBoxValue}
          setValue={setDropdownBoxValue}
          placeholder="Job Industry *"
          items={dropdownBoxItems}
          labelStyle={styles.dropdownBoxValue}
          textStyle={styles.dropdownBoxText}
        />
      </View>
      <TextInput
        style={[styles.inputAddressLine3, styles.dropdownBoxLayout]}
        label="Address "
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  loginButton1Btn: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  loginButton1Btn1: {
    borderRadius: 48,
    height: 50,
  },
  dropdownBoxValue: {
    color: "#313144",
    fontSize: 14,
    fontFamily: "Roboto",
  },
  dropdownBoxText: {
    color: "#313144",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  totalFlexBox: {
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  dropdownBoxLayout: {
    height: 48,
    position: "absolute",
  },
  weeklyExpenseInput: {
    top: 48,
    left: 68,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    color: Color.black01,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    lineHeight: 20,
    position: "absolute",
  },
  weeklyInputPageChild: {
    top: 573,
    left: 40,
    borderRadius: Border.br_5xl,
    width: 295,
    height: 65,
    position: "absolute",
  },
  total: {
    top: 580,
    left: 60,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.regularNoneMedium,
    color: Color.colorGray_500,
  },
  amount: {
    top: 602,
    left: 137,
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    color: Color.colorWhitesmoke_200,
    fontFamily: FontFamily.roboto,
  },
  loginButton: {
    top: 654,
    right: 81,
    left: 74,
    position: "absolute",
  },
  loginButton1: {
    top: 251,
    right: 112,
    left: 103,
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
    top: -1,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
  },
  dropdownpicker: {
    zIndex: 0,
  },
  dropdownBox: {
    top: 111,
    left: 43,
    width: 281,
    alignItems: "center",
    justifyContent: "center",
  },
  inputAddressLine3: {
    top: 185,
    right: 52,
    left: 44,
    borderRadius: Border.br_5xs,
  },
  weeklyInputPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default WeeklyInputPage;
