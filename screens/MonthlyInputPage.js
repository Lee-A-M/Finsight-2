import * as React from "react";
import { Font } from 'expo';
import { Text, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MonthlyInputPage = () => {
  return (
    <View style={styles.monthlyInputPage}>
      <Text
        style={styles.monthlyFinancialInput}
        numberOfLines={1}
      >{`Monthly Financial Input `}</Text>
      <Button
        style={styles.saveDetailsButton}
        mode="contained"
        labelStyle={styles.saveDetailsButtonBtn}
        contentStyle={styles.saveDetailsButtonBtn1}
      >{`Save `}</Button>
      <TextInput
        style={[styles.inputExpenses, styles.inputPosition]}
        label="Monthly Expenses"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputSavings, styles.inputPosition]}
        label="Saving *"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputDebtToIncome, styles.inputPosition]}
        label="Income *"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputCreditScore, styles.inputPosition]}
        label="Emergency Funds *"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputCreditScore1, styles.inputPosition]}
        label="Rent *"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputCreditScore2, styles.inputPosition]}
        label="Utilities *"
        placeholder="AED"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Image
        style={styles.arrowDownIcon}
        contentFit="cover"
        source={require("../assets/arrowdown1.png")}
      />
      <Text
        style={[styles.text, styles.textTypo]}
        numberOfLines={4}
      >{`This is your expense for the previous month. Once your account has been created, your expenses will be entered weekly and categorised.  `}</Text>
      <Text
        style={[styles.text1, styles.textTypo]}
        numberOfLines={3}
      >{`Please enter the following areas for the month. These will be used to calculate your financial health score.  `}</Text>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  saveDetailsButtonBtn: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  saveDetailsButtonBtn1: {
    borderRadius: 48,
    height: 50,
  },
  inputPosition: {
    height: 48,
    borderRadius: Border.br_5xs,
    left: 49,
    right: 46,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.indigoDye,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    left: 62,
    top: "50%",
    position: "absolute",
  },
  monthlyFinancialInput: {
    top: 48,
    left: 60,
    fontSize: FontSize.size_5xl,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.roboto,
    color: Color.black01,
    textAlign: "center",
    position: "absolute",
  },
  saveDetailsButton: {
    top: 655,
    right: 78,
    left: 77,
    position: "absolute",
  },
  inputExpenses: {
    top: 585,
  },
  inputSavings: {
    top: 215,
  },
  inputDebtToIncome: {
    top: 152,
  },
  inputCreditScore: {
    top: 278,
  },
  inputCreditScore1: {
    top: 341,
  },
  inputCreditScore2: {
    top: 406,
  },
  arrowDownIcon: {
    top: 46,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    marginTop: 91,
    width: 251,
    height: 88,
  },
  text1: {
    marginTop: -307,
    width: 241,
    height: 53,
  },
  statusBarLight: {
    top: 0,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
  },
  monthlyInputPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MonthlyInputPage;
