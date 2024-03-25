import React, { useState } from "react";
import { Text, StyleSheet, Pressable, View, Linking } from "react-native";
import { Image } from "expo-image";
import { Button, RadioButton, TextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import { Datepicker as RNKDatepicker } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";

const UserInfoInputPage = () => {
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
  const [dropdownBox1Open, setDropdownBox1Open] = useState(false);
  const [dropdownBox1Value, setDropdownBox1Value] = useState();
  const [dropdownBox1Items, setDropdownBox1Items] = useState([
    { value: "Engineer", label: "Engineer" },
    { value: "Developer", label: "Developer" },
    { value: "Cyber Security", label: "Cyber Security" },
    { value: "Teacher", label: "Teacher" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Principal", label: "Principal" },
    { value: "Doctor", label: "Doctor" },
    { value: "Nurse", label: "Nurse" },
    { value: "Physician", label: "Physician" },
    { value: "Accounting", label: "Accounting" },
    { value: "Consulting", label: "Consulting" },
    { value: "Sales", label: "Sales" },
    { value: "Animator", label: "Animator" },
    { value: "Photographer", label: "Photographer" },
    { value: "Artist", label: "Artist" },
    { value: "Chef", label: "Chef" },
    { value: "Waiter", label: "Waiter" },
    { value: "Hostess", label: "Hostess" },
    { value: "Officer", label: "Officer" },
    { value: "Fire Fighter", label: "Fire Fighter" },
    { value: "Postal Service", label: "Postal Service" },
  ]);
  const [groupRadioValue, setGroupRadioValue] = useState("Yes");
  const [groupRadio1Value, setGroupRadio1Value] = useState("Yes");
  const [choosingDateDatePicker, setChoosingDateDatePicker] =
    useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.userInfoInputPage}>
      <Pressable
        style={styles.byRegisteringWithContainer}
        numberOfLines={1}
        onClick={() => Linking.openURL("https://www.unitechfinsight.com")}
      >
        <Text
          style={styles.byRegisteringWithFinsight}
        >{`By registering with FinSight, you agree with the T&Cs`}</Text>
      </Pressable>
     
      <Button
        style={styles.submitButton}
        mode="contained"
        labelStyle={styles.submitButtonBtn}
        onPress={() => navigation.navigate("MonthlyInputPage")}
        contentStyle={styles.submitButtonBtn1}
      >
        Submit
      </Button>
      <View
        style={[styles.dropdownBox, styles.dropdownFlexBox]}
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
      <View
        style={[styles.dropdownBox1, styles.dropdownFlexBox]}
        closeAfterSelecting="true"
        zIndex="1"
        showArrowIcon="true"
        showTickIcon="true"
      >
        <DropDownPicker
          style={styles.dropdownpicker}
          open={dropdownBox1Open}
          setOpen={setDropdownBox1Open}
          value={dropdownBox1Value}
          setValue={setDropdownBox1Value}
          placeholder="Job Role *"
          items={dropdownBox1Items}
          labelStyle={styles.dropdownBox1Value}
          textStyle={styles.dropdownBox1Text}
        />
      </View>
      <Text style={styles.employmentDetails}>Employment Details</Text>
      <Text style={styles.userInformation}>User Information</Text>
      <Text style={[styles.doYouKnow, styles.youTypo]} numberOfLines={1}>
        Do you know your credit score?
      </Text>
      <View
        style={[styles.wrapper, styles.wrapperLayout]}
        value={groupRadioValue}
        onValueChange={setGroupRadioValue}
      >
        <RadioButton.Group
          value={groupRadioValue}
          onValueChange={setGroupRadioValue}
        >
          <View>
            <View style={styles.view2}>
              <RadioButton
                color="#9961A8"
                uncheckedColor="#6750a4"
                value="Yes"
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.view2}>
              <RadioButton
                color="#9961A8"
                uncheckedColor="#6750a4"
                value="No"
              />
              <Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <Text style={[styles.doYouKnow1, styles.youTypo]} numberOfLines={1}>
        Do you know your net worth?
      </Text>
      <View
        style={[styles.container, styles.wrapperLayout]}
        value={groupRadio1Value}
        onValueChange={setGroupRadio1Value}
      >
        <RadioButton.Group
          value={groupRadio1Value}
          onValueChange={setGroupRadio1Value}
        >
          <View>
            <View style={styles.view2}>
              <RadioButton
                color="#9961A8"
                uncheckedColor="#6750a4"
                value="Yes"
              />
              <Text>Yes</Text>
            </View>
            <View style={styles.view2}>
              <RadioButton
                color="#9961A8"
                uncheckedColor="#6750a4"
                value="No"
              />
              <Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <StatusBar
        style={styles.statusBarLight}
        contentFit="cover"
        //source={require("../assets/status-bar--light.png")}
      />
      <TextInput
        style={styles.inputAddressLine2}
        label="Address "
        mode="outlined"
        placeholderTextColor="#090a0a"
        theme={{
          fonts: { regular: { fontFamily: "Roboto", fontWeight: "Regular" } },
          colors: { text: "#090a0a" },
        }}
      />
      <View style={styles.choosingDateParent}>
        <RNKDatepicker
          style={styles.choosingDate}
          placeholder={() => (
            <Text style={styles.choosingDateDatePickerPlaceHolder}>
              DD/MM/YYYY
            </Text>
          )}
          date={choosingDateDatePicker}
          onSelect={setChoosingDateDatePicker}
          controlStyle={styles.choosingDateDatePickerValue}
        />
        <Text style={[styles.dateOfBirth, styles.youTypo]} numberOfLines={1}>
          Date of Birth
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitButtonBtn: {
    color: "#f4f6f6",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  submitButtonBtn1: {
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
  dropdownBox1Value: {
    color: "#313144",
    fontSize: 14,
    fontFamily: "Roboto",
  },
  dropdownBox1Text: {
    color: "#313144",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  groupRadioText: {},
  view: {},
  groupRadio1Text: {},
  view1: {},
  choosingDateDatePickerPlaceHolder: {
    fontFamily: "Roboto",
    color: "#101010",
    fontSize: 14,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  choosingDateDatePickerValue: {
    position: "absolute",
    left: "-0.92%",
    top: "41.5%",
    right: "18.43%",
    bottom: "-2.5%",
    width: "155%",
    height: "65%",
  },
  dropdownFlexBox: {
    justifyContent: "center",
    height: 48,
    left: 46,
    alignItems: "center",
    position: "absolute",
  },
  youTypo: {
    height: 18,
    width: 250,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 16,
    fontSize: 16,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.indigoDye,
    fontWeight: "700",
    position: "absolute",
  },
  wrapperLayout: {
    flexWrap: "wrap",
    height: 19,
    width: 119,
    left: 47,
    position: "absolute",
  },
  byRegisteringWithFinsight: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
  },
  byRegisteringWithContainer: {
    left: 18,
    top: 752,
    position: "absolute",
  },
  userInfoInputPageChild: {
    top: 719,
    left: 68,
    width: 237,
    height: 16,
    position: "absolute",
  },
  submitButton: {
    backgroundColor: Color.viridian,
    top: 647,
    right: 100,
    left: 98,
    position: "absolute",
  },
  dropdownpicker: {
    zIndex: 0,
  },
  dropdownBox: {
    top: 301,
    width: 281,
  },
  dropdownBox1: {
    top: 375,
    width: 280,
  },
  employmentDetails: {
    top: 248,
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "left",
    color: Color.indigoDye,
    fontWeight: "700",
    lineHeight: 20,
    left: 46,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  userInformation: {
    top: 48,
    left: 95,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    color: Color.colorBlack,
    lineHeight: 40,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  doYouKnow: {
    marginTop: 36,
    marginLeft: -141.5,
    height: 12,
    width: 217,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    top: 466,
  },
  doYouKnow1: {
    marginTop: 137,
    marginLeft: -141.5,
    height: 12,
    width: 217,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
  },
  container: {
    top: 566,
  },
  statusBarLight: {
    top: 0,
    left: 0,
    width: 375,
    height: 45,
    position: "absolute",
  },
  inputAddressLine2: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderColor: Color.colorBlack,
    top: 170,
    right: 49,
    borderRadius: Border.br_5xs,
    left: 47,
    height: 48,
    position: "absolute",
  },
  choosingDate: {
    left: "-0.92%",
    top: "38.5%",
    right: "20.43%",
    bottom: "-2.5%",
    width: "82.49%",
    height: "65%",
    position: "absolute",
  },
  dateOfBirth: {
    marginTop: -25,
    marginLeft: -108.5,
  },
  choosingDateParent: {
    height: "9.85%",
    width: "57.87%",
    top: "11.19%",
    right: "30.6%",
    bottom: "77.96%",
    left: "12.53%",
    position: "absolute",
  },
  userInfoInputPage: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default UserInfoInputPage;
