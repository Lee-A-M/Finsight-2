import * as React from "react";
import { Font } from 'expo';
import { Button, TextInput } from "react-native-paper";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <Button
        style={styles.loginButton}
        disabled={false}
        uppercase={false}
        mode="contained"
        labelStyle={styles.loginButtonBtn}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
        contentStyle={styles.loginButtonBtn1}
      >
        Login
      </Button>
      <Pressable
        style={styles.forgottenYourPasswordContainer}
        numberOfLines={1}
        onPress={() => navigation.navigate("ResetPasswordPage")}
      >
        <Text style={[styles.forgottenYourPassword, styles.dontHaveAnTypo]}>
          Forgotten your password?
        </Text>
      </Pressable>
      <View style={styles.dontHaveAnAccountParent}>
        <Text
          style={[styles.dontHaveAn, styles.dontHaveAnPosition]}
          numberOfLines={1}
        >
          Don’t have an account?
        </Text>
        <Pressable
          style={styles.registerNow}
          onPress={() => navigation.navigate("AccountCreationPage")}
        >
          <Text style={[styles.registerNow1, styles.dontHaveAnTypo]}>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.registerNow2Typo}>
              Register now
            </Text>
          </Text>
        </Pressable>
      </View>
      <TextInput
        style={[styles.inputPassword, styles.inputPosition]}
        label="Password"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputEmailAdress, styles.inputPosition]}
        label="Email Address"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
          borderColor: Color.viridian,
        }}
      />
      <ImageBackground
        style={styles.finsightIcon}
        resizeMode="cover"
        source={require("../assets/finsighticon.png")}
      />
      <StatusBar
        style={styles.dontHaveAnPosition}
        barStyle="default"
        translucent={true}
        contentFit="cover"
        //source={require("../assets/status-bar--light4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonBtn: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  loginButtonBtn1: {
    borderRadius: 48,
    height: 50,
  },
  dontHaveAnTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 16,
    fontSize: FontSize.size_mini,
  },
  dontHaveAnPosition: {
    left: -10,
    top: 0,
    position: "absolute",
  },
  registerNow2Typo: {
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
  },
  inputPosition: {
    height: 48,
    borderRadius: Border.br_5xs,
    left: 47,
    right: 48,
    position: "absolute",
  },
  loginButton: {
    backgroundColor: Color.viridian,
    top: 450,
    right: 99,
    left: 99,
    position: "absolute",
  },
  forgottenYourPassword: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  forgottenYourPasswordContainer: {
    left: 90,
    top: 569,
    position: "absolute",
  },
  dontHaveAn: {
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 16,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.roboto,
  },
  text: {
    fontFamily: FontFamily.roboto,
  },
  registerNow2: {
    fontFamily: FontFamily.roboto,
  },
  registerNow1: {
    top: "0%",
    left: "-5%",
    position: "absolute",
  },
  registerNow: {
    left: 156,
    width: 100,
    top: 0,
    height: 16,
    position: "absolute",
  },
  dontHaveAnAccountParent: {
    top: 536,
    left: 63,
    width: 248,
    height: 16,
    position: "absolute",
  },
  inputPassword: {
    borderColor: Color.viridian,
    top: 340,
  },
  inputEmailAdress: {
    top: 256,
  },
  finsightIcon: {
    top: 57,
    left: 142,
    width: 91,
    height: 134,
    position: "absolute",
  },
  loginPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginPage;
