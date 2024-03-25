import * as React from "react";
import { Font } from 'expo';
import { Button, TextInput } from "react-native-paper";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const ResetPasswordPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPasswordPage}>
      <Button
        style={styles.loginButton}
        disabled={false}
        uppercase={false}
        mode="contained"
        labelStyle={styles.loginButtonBtn}
        onPress={() => navigation.navigate("LoginPage")}
        contentStyle={styles.loginButtonBtn1}
      >{`Reset `}</Button>
      <TextInput
        style={[styles.inputNewPassword, styles.inputPosition]}
        label="Re-enter New Password"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputPassword, styles.inputPosition]}
        label="New Password"
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
        placeholder="sample@example.com"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <ImageBackground
        style={styles.finsightIcon}
        resizeMode="cover"
        source={require("../assets/finsighticon.png")}
      />
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light3.png")}
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
  inputPosition: {
    height: 48,
    borderRadius: Border.br_5xs,
    left: 47,
    right: 48,
    position: "absolute",
  },
  loginButton: {
    top: 534,
    right: 78,
    left: 77,
    position: "absolute",
  },
  inputNewPassword: {
    top: 424,
  },
  inputPassword: {
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
  statusBarLight: {
    top: 0,
    left: 0,
    width: 375,
    height: 44,
    position: "absolute",
  },
  resetPasswordPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ResetPasswordPage;
