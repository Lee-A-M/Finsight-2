import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SavingsGoalsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.savingsGoalsPage}>
      <Text
        style={styles.savingGoals}
        numberOfLines={1}
      >{`Saving Goals `}</Text>
      <Image
        style={[styles.savingsGoalsPageChild, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/group-39.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupChild} />
        </View>
        <Image
          style={[styles.groupItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/group-38.png")}
        />
        <Text
          style={[styles.totalSavingsGoals, styles.text1Typo]}
          numberOfLines={1}
        >{`Total Savings Goals `}</Text>
        <Text style={styles.text} numberOfLines={1}>
          2
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout2]}>
        <View style={[styles.rectangleParent, styles.groupLayout2]}>
          <View style={[styles.groupInner, styles.groupShadowBox1]} />
          <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
            <Text style={styles.loremIpsumDolor} numberOfLines={2}>
              Lorem ipsum dolor sit amet, consectetur adipisci.
            </Text>
          </View>
        </View>
        <Text style={[styles.setASaving, styles.savingTypo]} numberOfLines={1}>
          Set a Saving goal
        </Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("GoalCreationPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-345.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.savingsGoalsPageInner, styles.groupLayout1]}>
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout1]}
          onPress={() => navigation.navigate("GoalTrackingPage")}
        >
          <View style={[styles.rectangleView, styles.groupLayout1]} />
          <Pressable
            style={[styles.groupWrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("GoalTrackingPage")}
          >
            <View style={[styles.ellipseParent, styles.groupLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-191.png")}
              />
              <Image
                style={[styles.groupChild1, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-181.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>70%</Text>
            </View>
          </Pressable>
          <Text style={[styles.carSaving, styles.savingTypo]} numberOfLines={1}>
            Car Saving
          </Text>
          <Text
            style={[styles.loremIpsumDolor1, styles.loremTypo]}
            numberOfLines={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipisci.
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout1]}
        onPress={() => navigation.navigate("GoalTrackingPage")}
      >
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupChild2, styles.groupLayout1]} />
          <Pressable
            style={[styles.groupFrame, styles.groupLayout]}
            onPress={() => navigation.navigate("GoalTrackingPage")}
          >
            <View style={[styles.ellipseParent, styles.groupLayout]}>
              <Image
                style={[styles.ellipseIcon, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-191.png")}
              />
              <Image
                style={[styles.groupChild1, styles.ellipseIconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-181.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]} numberOfLines={1}>
                60%
              </Text>
            </View>
          </Pressable>
          <Text style={[styles.carSaving, styles.savingTypo]}>
            House Saving
          </Text>
          <Text
            style={[styles.loremIpsumDolor2, styles.loremTypo]}
            numberOfLines={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipisci.
          </Text>
        </View>
      </Pressable>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light11.png")}
      />
      <Image
        style={[styles.savingsGoalsPageItem, styles.itemLayout]}
        contentFit="cover"
        source={require("../assets/group-398.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupLayout2: {
    height: 95,
    width: 327,
    position: "absolute",
  },
  groupShadowBox1: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    backgroundColor: Color.neutralColorsWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  savingTypo: {
    lineHeight: 24,
    fontSize: FontSize.regularNoneMedium_size,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 159,
    width: 327,
    position: "absolute",
  },
  groupLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 119,
    width: 120,
    left: 0,
    position: "absolute",
  },
  loremTypo: {
    height: 59,
    color: Color.black06,
    top: 40,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.regularNoneMedium,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  savingGoals: {
    top: 50,
    left: 116,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    textAlign: "center",
    color: Color.black01,
    fontFamily: FontFamily.roboto,
    lineHeight: 20,
    position: "absolute",
  },
  savingsGoalsPageChild: {
    height: "10.92%",
    width: "31.09%",
    top: "9.56%",
    right: "64.93%",
    bottom: "79.52%",
    left: "3.97%",
  },
  groupChild: {
    backgroundColor: Color.mikadoYellow,
    opacity: 0.2,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xl,
    height: 124,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    height: 124,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    height: "62.81%",
    width: "53.52%",
    top: "37.11%",
    right: "-0.03%",
    bottom: "0.07%",
    left: "46.51%",
  },
  totalSavingsGoals: {
    top: 37,
    left: 16,
    fontSize: FontSize.size_xl,
    color: Color.indigoDye,
    lineHeight: 20,
    fontWeight: "700",
  },
  text: {
    top: 71,
    left: 79,
    fontSize: FontSize.size_10xl,
    letterSpacing: -0.3,
    lineHeight: 34,
    fontFamily: FontFamily.regularNoneMedium,
    fontWeight: "600",
    textAlign: "left",
    color: Color.indigoDye,
    position: "absolute",
  },
  groupParent: {
    top: 120,
    width: 333,
    height: 136,
    left: 26,
    position: "absolute",
  },
  groupInner: {
    height: 95,
    width: 327,
    position: "absolute",
  },
  loremIpsumDolor: {
    width: 188,
    height: 40,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.regularNoneMedium,
    textAlign: "left",
    color: Color.indigoDye,
    lineHeight: 20,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    top: 33,
    left: 26,
    position: "absolute",
  },
  rectangleParent: {
    opacity: 0.6,
    left: 0,
    top: 0,
  },
  setASaving: {
    top: 9,
    left: 19,
    color: Color.indigoDye,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 244,
    top: 22,
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupContainer: {
    top: 255,
    left: 26,
  },
  rectangleView: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    backgroundColor: Color.neutralColorsWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 0,
  },
  groupChild1: {
    top: 1,
    borderRadius: Border.br_xl,
  },
  text1: {
    top: 49,
    left: 41,
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    width: 58,
    height: 21,
  },
  ellipseParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 179,
    top: 20,
    width: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  carSaving: {
    top: 16,
    left: 20,
    color: Color.black01,
  },
  loremIpsumDolor1: {
    left: 27,
    width: 138,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  savingsGoalsPageInner: {
    top: 361,
    left: 28,
    height: 159,
  },
  groupChild2: {
    elevation: 8,
    shadowRadius: 8,
    shadowColor: "rgba(74, 85, 104, 0.07)",
    backgroundColor: Color.neutralColorsWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  groupFrame: {
    left: 179,
    top: 20,
    width: 120,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  loremIpsumDolor2: {
    left: 29,
    width: 139,
  },
  groupPressable: {
    top: 539,
    left: 28,
    height: 159,
  },
  statusBarLight: {
    left: 2,
    width: 375,
    height: 45,
    top: 0,
    position: "absolute",
  },
  savingsGoalsPageItem: {
    height: "3.2%",
    width: "86.13%",
    top: "95.32%",
    right: "6.93%",
    bottom: "1.48%",
    left: "6.93%",
  },
  savingsGoalsPage: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SavingsGoalsPage;
