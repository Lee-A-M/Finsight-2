import * as React from "react";
import { Font } from 'expo';
import { Text, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HelpAndSupportPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpAndSupportPage}>
      <Text
        style={[styles.helpSupport, styles.helpSupportPosition]}
        numberOfLines={1}
      >{`Help & Support`}</Text>
      <Text
        style={[styles.text, styles.textLayout]}
        numberOfLines={4}
      >{`The queries or feedback you have will be sent to the support staff, who will reply at the earliest possible time. `}</Text>
      <Button
        style={styles.saveDetailsButton}
        mode="contained"
        labelStyle={styles.saveDetailsButtonBtn}
        onPress={() => navigation.goBack()}
        contentStyle={styles.saveDetailsButtonBtn1}
      >
        Submit
      </Button>
      <TextInput
        style={styles.inputSavings}
        label="Questions or Feedback"
        mode="outlined"
      />
      <TextInput
        style={[styles.inputDebtToIncome, styles.inputPosition]}
        label="Email Address *"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputCreditScore, styles.inputPosition]}
        label="Name *"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Text style={[styles.text1, styles.textLayout]}>
        Questions or Feedback *
      </Text>
      <Image
        style={[styles.arrowDownIcon, styles.helpSupportPosition]}
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
  helpSupportPosition: {
    top: 48,
    position: "absolute",
  },
  textLayout: {
    height: 88,
    width: 241,
    textAlign: "left",
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  inputPosition: {
    height: 48,
    left: 46,
    right: 49,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  helpSupport: {
    left: 105,
    fontSize: FontSize.size_5xl,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.roboto,
    color: Color.black01,
    textAlign: "center",
  },
  text: {
    marginTop: -317,
    left: 53,
  },
  saveDetailsButton: {
    top: 579,
    right: 88,
    left: 67,
    position: "absolute",
  },
  inputSavings: {
    top: 345,
    right: 50,
    left: 45,
    height: 167,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  inputDebtToIncome: {
    top: 261,
  },
  inputCreditScore: {
    top: 177,
  },
  text1: {
    marginTop: -45,
    left: 56,
  },
  arrowDownIcon: {
    left: 25,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  statusBarLight: {
    top: 0,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
  },
  helpAndSupportPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HelpAndSupportPage;
