import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <Text style={[styles.helloJane, styles.helloJaneTypo]} numberOfLines={1}>
        Hello, Jane!
      </Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-42.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.financialTipOfClr]}>
          Lorem ipsum dolor sit amet, consectetur adipisci.
        </Text>
        <Text style={[styles.financialTipOf, styles.financialTipOfClr]}>
          Financial Tip of the Week
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.groupView, styles.groupWrapperLayout]}>
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View style={styles.rectangleShadowBox}>
              <View style={styles.groupItemShadowBox} />
              <View style={styles.generateMonthlyReportParent}>
                <Text style={styles.generateMonthlyReport}>
                  Generate Monthly Report
                </Text>
                <Text style={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipisci.
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={[styles.groupInner, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-345.png")}
          />
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupWrapperLayout]}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", {
              screen: "EditUserProfilePage",
            })
          }
        >
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <Pressable
              style={[styles.groupWrapper, styles.groupWrapperLayout]}
              onPress={() =>
                navigation.navigate("BottomTabsRoot", {
                  screen: "EditUserProfilePage",
                })
              }
            >
              <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
                  <Image
                    style={[styles.groupWrapper, styles.groupWrapperLayout]}
                    contentFit="cover"
                    source={require("../assets/group-44.png")}
                  />
                </View>
              </View>
            </Pressable>
          </View>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-45.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.groupWrapper4, styles.groupWrapperLayout]}
          onPress={() => navigation.navigate("HelpAndSupportPage")}
        >
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <Pressable
              style={[styles.groupWrapper, styles.groupWrapperLayout]}
              onPress={() => navigation.navigate("HelpAndSupportPage")}
            >
              <View style={styles.rectangleShadowBox}>
                <View style={styles.groupItemShadowBox} />
                <View style={styles.generateMonthlyReportParent}>
                  <Text style={styles.generateMonthlyReport}>
                    Help and Support
                  </Text>
                  <Text style={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipisci.
                  </Text>
                </View>
              </View>
            </Pressable>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-345.png")}
            />
          </View>
        </Pressable>
      </View>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  helloJaneTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  groupLayout: {
    height: 277,
    width: 332,
    position: "absolute",
  },
  financialTipOfClr: {
    color: Color.neutralColorsWhite,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 110,
    width: 294,
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 50,
    top: 30,
    position: "absolute",
  },
  helloJane: {
    top: 64,
    left: 30,
    fontSize: FontSize.size_17xl,
    lineHeight: 50,
    textAlign: "center",
    width: 222,
    height: 42,
    color: Color.indigoDye,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  loremIpsumDolor: {
    top: 126,
    left: 55,
    width: 172,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    fontSize: FontSize.size_smi,
    color: Color.neutralColorsWhite,
  },
  financialTipOf: {
    top: 82,
    left: 56,
    fontSize: FontSize.size_xl,
    width: 231,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
  },
  groupParent: {
    top: 90,
    left: 21,
  },
  groupItemShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    borderRadius: Border.br_5xl,
    backgroundColor: Color.grey100,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    height: 110,
    width: 294,
    left: 0,
    top: 0,
    position: "absolute",
  },
  generateMonthlyReport: {
    fontSize: FontSize.regularNoneMedium_size,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    color: Color.indigoDye,
  },
  loremIpsumDolor1: {
    width: 188,
    height: 40,
    marginTop: 6,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    color: Color.indigoDye,
  },
  generateMonthlyReportParent: {
    top: 20,
    left: 18,
    backgroundColor: Color.grey100,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 110,
    width: 294,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  groupInner: {
    left: 218,
  },
  groupView: {
    top: 127,
    left: 1,
  },
  groupChild1: {
    left: 217,
  },
  groupPressable: {
    left: 3,
    top: 0,
  },
  groupChild2: {
    left: 220,
  },
  groupWrapper4: {
    top: 254,
    left: 0,
  },
  groupContainer: {
    top: 348,
    left: 39,
    width: 297,
    height: 364,
    position: "absolute",
  },
  statusBarLight: {
    left: 2,
    width: 375,
    height: 45,
    top: 0,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomePage;
