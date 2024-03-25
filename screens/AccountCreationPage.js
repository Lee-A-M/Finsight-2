import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  View,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { color } from "react-native-reanimated";

const AccountCreationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountCreationPage}>
      <Pressable
        style={styles.byRegisteringWithContainer}
        numberOfLines={1}
        onPress={() => Linking.openURL("https://www.unitechfinsight.com")}
      >
        <Text
          style={styles.byRegisteringWithFinsight}
        >{`By registering with FinSight, you agree with the T&Cs`}</Text>
      </Pressable>
      <Image
        style={styles.accountCreationPageChild}
        contentFit="cover"
        source={require("../assets/group-37.png")}
      />
      <ImageBackground
        style={styles.finsightIcon}
        resizeMode="cover"
        source={require("../assets/finsighticon.png")}
      />
      <TextInput
        style={[styles.inputEmailAdress, styles.inputPosition]}
        label="Name *"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputEmailAdress1, styles.inputPosition]}
        label="Email Address *"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <TextInput
        style={[styles.inputPassword, styles.inputPosition]}
        label="Password *"
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Button
        style={styles.registerButton}
        mode="contained"
        labelStyle={styles.registerButtonBtn}
        onPress={() => navigation.navigate("UserInfoInputPage")}
        contentStyle={styles.registerButtonBtn1}
      >
        Register
      </Button>
      <StatusBar
        style={styles.statusBarLight}
        contentFit="cover"
        //source={require("../assets/status-bar--light1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  registerButtonBtn: {
    color: "#f4f6f6",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  registerButtonBtn1: {
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
  byRegisteringWithFinsight: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontFamily: FontFamily.roboto,
    color: Color.colorBlack,
    textAlign: "center",
  },
  byRegisteringWithContainer: {
    left: 20,
    top: 655,
    position: "absolute",
  },
  accountCreationPageChild: {
    top: 625,
    left: 68,
    width: 237,
    height: 16,
    position: "absolute",
  },
  finsightIcon: {
    top: 57,
    left: 142,
    width: 91,
    height: 134,
    position: "absolute",
  },
  inputEmailAdress: {
    top: 256,
  },
  inputEmailAdress1: {
    top: 340,
  },
  inputPassword: {
    top: 424,
  },
  registerButton: {
    backgroundColor: Color.viridian,
    top: 550,
    right: 100,
    left: 98,
    position: "absolute",
  },
  statusBarLight: {
    top: 0,
    left: -1,
    width: 375,
    height: 45,
    position: "absolute",
  },
  accountCreationPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AccountCreationPage;
