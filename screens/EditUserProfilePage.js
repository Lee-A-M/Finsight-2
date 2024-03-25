import React, { useState } from "react";
import { Font } from 'expo';
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const EditUserProfilePage = () => {
  const [choosingDateDatePicker, setChoosingDateDatePicker] =
    useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={[styles.editUserProfilePage, styles.iconLayout]}>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light8.png")}
      />
      <TextInput
        style={[styles.controlsTextFieldFloatin, styles.controlsPosition1]}
        label="Address"
        placeholder="Villa 15, Mamzar, Dubai"
        mode="outlined"
        placeholderTextColor="#72777a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Image
        style={[
          styles.materialSymbolseditOutlineIcon,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolseditoutlinerounded.png")}
      />
      <TextInput
        style={[styles.controlsTextFieldFloatin1, styles.controlsPosition]}
        label="Name"
        placeholder="Jane Die"
        mode="outlined"
        placeholderTextColor="#72777a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Image
        style={[
          styles.materialSymbolseditOutlineIcon1,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolseditoutlinerounded.png")}
      />
      <TextInput
        style={[styles.controlsTextFieldFloatin2, styles.controlsPosition]}
        label="Password"
        placeholder="..........."
        mode="outlined"
        placeholderTextColor="#72777a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Image
        style={[
          styles.materialSymbolseditOutlineIcon2,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolseditoutlinerounded.png")}
      />
      <TextInput
        style={[styles.controlsTextFieldFloatin3, styles.controlsPosition1]}
        label="Email"
        placeholder="jane.doe@"
        mode="outlined"
        placeholderTextColor="#72777a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <Image
        style={[
          styles.materialSymbolseditOutlineIcon3,
          styles.materialIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolseditoutlinerounded.png")}
      />
      <Button
        style={styles.loginButton}
        mode="contained"
        labelStyle={styles.loginButtonBtn}
        onPress={() => navigation.goBack()}
        contentStyle={styles.loginButtonBtn1}
      >{`Save `}</Button>
      <Text style={styles.editUserProfile}>Edit User Profile</Text>
      <View style={styles.choosingDateParent}>
        <RNKDatepicker
          style={styles.choosingDate}
          placeholder={() => (
            <Text style={styles.choosingDateDatePickerPlaceHolder}>
              25/11/1999
            </Text>
          )}
          date={choosingDateDatePicker}
          onSelect={setChoosingDateDatePicker}
          controlStyle={styles.choosingDateDatePickerValue}
        />
        <Text style={styles.dateOfBirth} numberOfLines={1}>
          Date of Birth
        </Text>
      </View>
      <Pressable
        style={styles.arrowDown}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { screen: "HomePage" })
        }
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/arrowdown1.png")}
        />
      </Pressable>
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
  choosingDateDatePickerPlaceHolder: {
    fontFamily: "Roboto",
    color: "#101010",
    fontSize: 14,
  },
  choosingDateDatePickerValue: {
    position: "absolute",
    left: "-0.92%",
    top: "37.5%",
    right: "18.43%",
    bottom: "-2.5%",
    width: "82.49%",
    height: "65%",
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  controlsPosition1: {
    height: 52,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 45,
    right: 47,
    position: "absolute",
  },
  materialIconLayout: {
    height: 20,
    width: 20,
    left: 291,
    position: "absolute",
    overflow: "hidden",
  },
  controlsPosition: {
    left: 46,
    right: 46,
    height: 52,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  statusBarLight: {
    top: 0,
    left: 2,
    width: 375,
    height: 45,
    position: "absolute",
  },
  controlsTextFieldFloatin: {
    top: 315,
  },
  materialSymbolseditOutlineIcon: {
    top: 331,
  },
  controlsTextFieldFloatin1: {
    top: 111,
  },
  materialSymbolseditOutlineIcon1: {
    top: 127,
  },
  controlsTextFieldFloatin2: {
    top: 247,
  },
  materialSymbolseditOutlineIcon2: {
    top: 263,
  },
  controlsTextFieldFloatin3: {
    top: 179,
  },
  materialSymbolseditOutlineIcon3: {
    top: 195,
  },
  loginButton: {
    top: 589,
    right: 78,
    left: 77,
    position: "absolute",
  },
  editUserProfile: {
    top: 48,
    left: 99,
    fontSize: FontSize.size_5xl,
    lineHeight: 20,
    fontWeight: "800",
    fontFamily: FontFamily.roboto,
    color: Color.black01,
    textAlign: "center",
    position: "absolute",
  },
  choosingDate: {
    left: "-0.92%",
    top: "37.5%",
    right: "18.43%",
    bottom: "-2.5%",
    width: "82.49%",
    height: "65%",
    position: "absolute",
  },
  dateOfBirth: {
    marginTop: -40,
    marginLeft: -108.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: FontFamily.regularNoneMedium,
    color: Color.indigoDye,
    textAlign: "left",
    width: 217,
    height: 12,
    position: "absolute",
  },
  choosingDateParent: {
    height: "9.85%",
    width: "57.87%",
    top: "47.41%",
    right: "29.33%",
    bottom: "42.73%",
    left: "12.8%",
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowDown: {
    left: 25,
    top: 46,
    width: 24,
    height: 24,
    position: "absolute",
  },
  editUserProfilePage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
  },
});

export default EditUserProfilePage;
