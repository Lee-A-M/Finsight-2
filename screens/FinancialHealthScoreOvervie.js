import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const FinancialHealthScoreOvervie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.financialHealthScoreOvervie}>
      <Text style={styles.financialHealthScore} numberOfLines={1}>
        Financial Health Score
      </Text>
      <View style={[styles.containerParent, styles.containerLayout]}>
        <View style={[styles.container, styles.groupShadowBox]} />
        <Text
          style={[styles.amountDescription, styles.amountTypo]}
        >{`Your financial health score 
is  `}</Text>
        <Text style={styles.date}>Updated Nov 24, 2022</Text>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.amount, styles.amountTypo]}>9.2</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.iconLightBulbOn, styles.iconLightBulbOnLayout]}
          contentFit="cover"
          source={require("../assets/-icon-light-bulb-on.png")}
        />
        <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
          Lorem ipsum dolor sit amet, consectetur adipisci.
        </Text>
        <Text style={[styles.aboutTheFinancial, styles.aboutTypo]}>
          About the Financial Health Score
        </Text>
      </View>
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("FinacialHealthScorePage")}
      >
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupInner, styles.groupInnerBg]} />
          <View
            style={[styles.learnMoreAboutYourScoreParent, styles.groupInnerBg]}
          >
            <Text style={[styles.learnMoreAbout, styles.learnMoreAboutTypo]}>
              Learn more about your score
            </Text>
            <Text style={[styles.loremIpsumDolor1, styles.learnMoreAboutTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipisci.
            </Text>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <Button
            style={styles.groupPosition1}
            mode="elevated"
            onPress={() => navigation.navigate("FinacialHealthScorePage")}
            contentStyle={styles.groupIconBtn}
          />
          <Image
            style={styles.chevronLeftIcon}
            contentFit="cover"
            source={require("../assets/chevronleft.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.statusBarLight}
        contentFit="cover"
        source={require("../assets/status-bar--light10.png")}
      />
      <Image
        style={[
          styles.financialHealthScoreOvervieChild,
          styles.iconLightBulbOnLayout,
        ]}
        contentFit="cover"
        source={require("../assets/group-398.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconBtn: {
    height: 50,
    width: 50,
  },
  containerLayout: {
    height: 232,
    width: 294,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  amountTypo: {
    color: Color.neutralColorsBlack,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupChildLayout: {
    height: 150,
    width: 294,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  iconLightBulbOnLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loremIpsumDolorTypo: {
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    position: "absolute",
  },
  aboutTypo: {
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.regularNoneMedium_size,
    lineHeight: 24,
  },
  groupLayout: {
    height: 110,
    width: 294,
  },
  groupInnerBg: {
    backgroundColor: Color.grey100,
    position: "absolute",
  },
  learnMoreAboutTypo: {
    width: 188,
    color: Color.indigoDye,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
  },
  financialHealthScore: {
    top: 53,
    left: 60,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    lineHeight: 20,
    color: Color.black01,
    position: "absolute",
  },
  container: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.neutralColorsWhite,
    shadowColor: "rgba(13, 10, 44, 0.08)",
    shadowRadius: 6,
    elevation: 6,
    left: 0,
    top: 0,
    position: "absolute",
    height: 232,
    width: 294,
  },
  amountDescription: {
    top: 18,
    left: 26,
    fontSize: 18,
    width: 243,
    height: 48,
    lineHeight: 24,
    fontWeight: "700",
  },
  date: {
    top: 190,
    left: 56,
    lineHeight: 18,
    color: Color.neutralColorsTextGray,
    width: 179,
    height: 10,
    fontSize: FontSize.regularNoneMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 77,
    left: 33,
    width: 225,
    height: 113,
    position: "absolute",
  },
  amount: {
    left: 94,
    fontSize: 48,
    lineHeight: 84,
    width: 103,
    height: 59,
    top: 103,
  },
  containerParent: {
    left: 40,
    top: 103,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "rgba(255, 199, 39, 0.2)",
    height: 150,
    width: 294,
    position: "absolute",
  },
  groupItem: {
    top: 20,
    width: 37,
    height: 39,
    left: 18,
    position: "absolute",
  },
  iconLightBulbOn: {
    height: "17.6%",
    width: "6.53%",
    top: "18.2%",
    right: "84.12%",
    bottom: "64.2%",
    left: "9.35%",
  },
  loremIpsumDolor: {
    top: 81,
    left: 65,
    color: Color.black06,
    width: 172,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    height: 39,
  },
  aboutTheFinancial: {
    top: 23,
    left: 67,
    width: 197,
    textAlign: "left",
    fontFamily: FontFamily.regularNoneMedium,
    position: "absolute",
    color: Color.black01,
    display: "flex",
    fontWeight: "600",
  },
  rectangleParent: {
    top: 365,
    left: 40,
  },
  groupInner: {
    shadowColor: "rgba(74, 85, 104, 0.07)",
    shadowRadius: 8,
    elevation: 8,
    height: 110,
    width: 294,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  learnMoreAbout: {
    alignItems: "center",
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.regularNoneMedium_size,
    lineHeight: 24,
  },
  loremIpsumDolor1: {
    height: 40,
    marginTop: 6,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
  },
  learnMoreAboutYourScoreParent: {
    top: 8,
    left: 18,
  },
  rectangleGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chevronLeftIcon: {
    top: 13,
    left: 13,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    top: 30,
    left: 216,
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupParent: {
    top: 545,
    left: 38,
    position: "absolute",
  },
  statusBarLight: {
    left: 4,
    width: 375,
    height: 45,
    top: 0,
    position: "absolute",
  },
  financialHealthScoreOvervieChild: {
    height: "3.2%",
    width: "86.13%",
    top: "94.83%",
    right: "6.93%",
    bottom: "1.97%",
    left: "6.93%",
  },
  financialHealthScoreOvervie: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default FinancialHealthScoreOvervie;
