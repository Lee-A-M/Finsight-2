import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GoalTrackingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.goalTrackingPage}>
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.groupContainer, styles.groupShadowBox]}>
          <Image
            style={[styles.groupChild, styles.parentPosition]}
            contentFit="cover"
            source={require("../assets/group-421.png")}
          />
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>/ 5,000</Text>
          </View>
        </View>
        <Text style={[styles.since01Jan, styles.textTypo]}>
          Since 01 Jan 2024
        </Text>
        <Text
          style={[styles.totalSaved, styles.text1Clr]}
        >{`Total Saved `}</Text>
        <View style={styles.container}>
          <Text style={[styles.text1, styles.text1Clr]}>3,578</Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.rectangleParent, styles.groupViewLayout]}>
          <View style={styles.groupItem} />
          <View style={[styles.groupWrapper, styles.groupParentLayout]}>
            <View style={[styles.groupFrame, styles.groupParentLayout]}>
              <View style={[styles.ellipseParent, styles.groupParentLayout]}>
                <Image
                  style={[styles.groupInner, styles.groupInnerLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-19.png")}
                />
                <Image
                  style={[styles.ellipseIcon, styles.groupInnerLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-18.png")}
                />
                <Text style={[styles.text2, styles.text2Typo]}>70%</Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={[styles.youHaveReached, styles.text1Clr]}
        >{`You have Reached  `}</Text>
      </View>
      <Text style={[styles.carSaving, styles.text2Typo]}>{`Car Saving  `}</Text>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={[styles.rectangleWrapper, styles.rectangleShadowBox]}>
          <View style={styles.groupChild1ShadowBox} />
        </View>
        <Text
          style={[styles.addMoney, styles.addMoneyTypo]}
        >{`Add Money `}</Text>
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("GoalCreationPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-345.png")}
          />
        </Pressable>
        <View
          style={[styles.loremIpsumDolorSitAmetCoWrapper, styles.loremPosition]}
        >
          <Text style={[styles.loremIpsumDolor, styles.text1Clr]}>
            Lorem ipsum dolor sit amet, consectetur adipisci.
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleShadowBox]}>
          <View style={styles.groupChild1ShadowBox} />
        </View>
        <Text
          style={[styles.editGoalEnd, styles.addMoneyTypo]}
          numberOfLines={1}
        >{`Edit Goal End Date/Amount `}</Text>
        <View
          style={[
            styles.loremIpsumDolorSitAmetCoContainer,
            styles.loremPosition,
          ]}
        >
          <Text
            style={[styles.loremIpsumDolor, styles.text1Clr]}
            numberOfLines={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisci.
          </Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.frameLayout]}
          onPress={() => navigation.navigate("GoalCreationPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-345.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light12.png")}
      />
      <Pressable
        style={[styles.arrowDown, styles.arrowTransform]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={[styles.arrowDownChild, styles.arrowTransform]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 168,
    width: 338,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  parentPosition: {
    left: 0,
    top: 0,
  },
  textTypo: {
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "600",
  },
  text1Clr: {
    color: Color.indigoDye,
    textAlign: "left",
  },
  groupViewLayout: {
    height: 268,
    width: 327,
    position: "absolute",
  },
  groupParentLayout: {
    height: 200,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 199,
    width: 200,
    left: 0,
    position: "absolute",
  },
  text2Typo: {
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rectangleShadowBox: {
    opacity: 0.6,
    height: 95,
    width: 327,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  addMoneyTypo: {
    lineHeight: 24,
    left: 17,
    color: Color.indigoDye,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "600",
    fontSize: FontSize.regularNoneMedium_size,
    position: "absolute",
  },
  frameLayout: {
    height: 50,
    width: 50,
    left: 245,
    position: "absolute",
  },
  loremPosition: {
    left: 26,
    position: "absolute",
  },
  arrowTransform: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    height: 168,
    width: 338,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    fontSize: FontSize.regularNoneMedium_size,
    color: Color.colorDarkslategray_300,
  },
  wrapper: {
    top: 120,
    left: 94,
    position: "absolute",
  },
  groupContainer: {
    height: 168,
    width: 338,
    position: "absolute",
  },
  since01Jan: {
    top: 61,
    left: 183,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  totalSaved: {
    top: 58,
    left: 14,
    fontFamily: FontFamily.roboto,
    position: "absolute",
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.indigoDye,
  },
  text1: {
    fontSize: FontSize.size_10xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    color: Color.indigoDye,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "600",
  },
  container: {
    top: 84,
    left: 42,
    position: "absolute",
  },
  groupParent: {
    top: 382,
    left: 19,
  },
  groupItem: {
    backgroundColor: Color.grey100,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    borderRadius: Border.br_5xl,
    height: 268,
    width: 327,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 0,
  },
  ellipseIcon: {
    top: 1,
    borderRadius: Border.br_xl,
  },
  text2: {
    top: 83,
    left: 82,
    fontSize: FontSize.size_6xl,
    fontWeight: "700",
    color: Color.colorBlack,
    width: 65,
    height: 35,
    textAlign: "left",
  },
  ellipseParent: {
    width: 200,
    height: 200,
    left: 0,
    top: 0,
  },
  groupFrame: {
    width: 200,
    height: 200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 46,
    left: 63,
    width: 200,
    height: 200,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  youHaveReached: {
    top: 14,
    left: 16,
    fontFamily: FontFamily.roboto,
    position: "absolute",
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.indigoDye,
  },
  groupView: {
    left: 22,
    top: 105,
  },
  carSaving: {
    top: 43,
    left: 135,
    fontSize: FontSize.size_5xl,
    color: Color.black01,
    textAlign: "center",
    fontWeight: "800",
    fontFamily: FontFamily.roboto,
    lineHeight: 20,
  },
  groupChild1ShadowBox: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 95,
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    borderRadius: Border.br_5xl,
    width: 327,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 0,
  },
  addMoney: {
    top: 9,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  frame: {
    top: 21,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_smi,
    width: 188,
    height: 40,
    lineHeight: 20,
    color: Color.indigoDye,
    fontFamily: FontFamily.regularNoneMedium,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    top: 33,
  },
  rectangleContainer: {
    top: 105,
  },
  editGoalEnd: {
    top: 114,
  },
  loremIpsumDolorSitAmetCoContainer: {
    top: 138,
  },
  groupPressable: {
    top: 126,
  },
  groupParent1: {
    top: 554,
    left: 25,
    height: 200,
    width: 327,
  },
  statusBarLight: {
    left: -2,
    width: 375,
    height: 42,
    top: 0,
    position: "absolute",
  },
  arrowDownChild: {
    height: "76.25%",
    width: "58.33%",
    top: "12.08%",
    right: "20.83%",
    bottom: "11.67%",
    left: "20.83%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrowDown: {
    top: 65,
    left: 43,
    width: 24,
    height: 24,
  },
  goalTrackingPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default GoalTrackingPage;
