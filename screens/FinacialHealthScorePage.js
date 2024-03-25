import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const FinacialHealthScorePage = () => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.finacialHealthScorePage, styles.whhinfographicIconLayout]}
    >
      <Text style={styles.financialHealthScore} numberOfLines={1}>
        Financial Health Score
      </Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.frameParent, styles.parentLayout]}>
          <View style={[styles.frameGroup, styles.parentFrameShadowBox]}>
            <View style={styles.debtToIncomeRatioParent}>
              <Text style={[styles.debtToIncomeRatio, styles.text4Typo]}>
                Debt-to-income Ratio
              </Text>
              <Text style={[styles.updated10Jan, styles.updated10JanTypo]}>
                Updated 10 Jan 2024
              </Text>
            </View>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-9.png")}
            />
            <Text style={[styles.text, styles.textTypo1]}>35%</Text>
            <Image
              style={[styles.iconScales, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/-icon-scales.png")}
            />
          </View>
          <View style={[styles.frameContainer, styles.factorsUsedToPosition]}>
            <View style={styles.frameItem} />
            <Text style={styles.text1}>750</Text>
            <View style={styles.debtToIncomeRatioParent}>
              <View style={styles.creditScoreWrapper}>
                <Text
                  style={[styles.debtToIncomeRatio, styles.text4Typo]}
                >{`Credit Score `}</Text>
              </View>
              <Text style={[styles.updated10Jan, styles.updated10JanTypo]}>
                Updated 10 Jan 2024
              </Text>
            </View>
            <Image
              style={styles.bxsCoffee1Icon}
              contentFit="cover"
              source={require("../assets/bxscoffee-1.png")}
            />
            <View style={styles.frameInner} />
          </View>
        </View>
        <Text
          style={[styles.factorsUsedTo, styles.factorsUsedToPosition]}
          numberOfLines={2}
        >
          Factors used to calculate financial health score:
        </Text>
      </View>
      <View style={[styles.parent, styles.parentFrameShadowBox]}>
        <Text style={[styles.text2, styles.textTypo]}>{`10,000 `}</Text>
        <View style={styles.debtToIncomeRatioParent}>
          <View style={styles.creditScoreWrapper}>
            <Text style={[styles.debtToIncomeRatio, styles.text4Typo]}>
              Total Savings
            </Text>
          </View>
          <Text style={[styles.updated10Jan, styles.updated10JanTypo]}>
            Updated 11 Jan 2024
          </Text>
        </View>
        <View style={styles.bxsCoffee1Icon} />
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-91.png")}
        />
        <Image
          style={[styles.iconCoins, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/-icon-coins.png")}
        />
      </View>
      <View style={[styles.frameParent2, styles.cardPosition]}>
        <View style={styles.frameItem} />
        <Text
          style={[styles.text3, styles.textTypo]}
          numberOfLines={1}
        >{`10,000 `}</Text>
        <View style={styles.debtToIncomeRatioParent}>
          <View style={styles.creditScoreWrapper}>
            <Text style={[styles.debtToIncomeRatio, styles.text4Typo]}>
              Emergency Funds
            </Text>
          </View>
          <Text style={[styles.updated10Jan, styles.updated10JanTypo]}>
            Updated 11 Jan 2024
          </Text>
        </View>
        <View style={styles.bxsCoffee1Icon} />
        <Image
          style={[styles.rectangleIcon, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-92.png")}
        />
      </View>
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.cardHeader, styles.cardSpaceBlock]}>
          <View style={styles.heading}>
            <Image
              style={[styles.whhinfographicIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/whhinfographic1.png")}
            />
            <Text style={[styles.countriesComparedBy, styles.germanyTypo]}>
              Expenses Categories
            </Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.january221Parent}>
            <Text style={[styles.january221, styles.textTypo1]}>
              January, 221
            </Text>
            <Text
              style={[styles.moreDenselyPopulate, styles.listCountriesTypo]}
            >
              More densely populate
            </Text>
          </View>
          <View style={styles.cardBodyInner}>
            <View style={styles.graphParent}>
              <Image
                style={styles.graphIcon}
                contentFit="cover"
                source={require("../assets/graph2.png")}
              />
              <Image
                style={styles.graphIcon}
                contentFit="cover"
                source={require("../assets/graph3.png")}
              />
              <View style={[styles.vectorParent, styles.vectorParentPosition]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
                <Text style={[styles.text4, styles.text4Typo]}>98%</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cardBody1, styles.cardSpaceBlock]}>
          <Image
            style={styles.chartGraphicIcon}
            contentFit="cover"
            source={require("../assets/chartgraphic2.png")}
          />
        </View>
        <View style={[styles.cardFooter, styles.cardSpaceBlock]}>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.listCountries, styles.listCountriesTypo]}>
              List countries
            </Text>
            <View style={styles.ictwotoneGraphicEq}>
              <Image
                style={styles.vectorIcon1}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
          </View>
          <View style={[styles.frameParent4, styles.parentFlexBox]}>
            <View style={styles.frameParent5}>
              <View style={styles.frameParent6}>
                <View style={[styles.frameChild3, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>
                  Germany
                </Text>
              </View>
              <View style={styles.frameParent7}>
                <View style={[styles.frameChild4, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>Spain</Text>
              </View>
              <View style={styles.frameParent7}>
                <View style={[styles.frameChild5, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>Italy</Text>
              </View>
            </View>
            <View style={styles.frameParent9}>
              <View style={styles.frameParentSpaceBlock}>
                <View style={[styles.frameChild6, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>France</Text>
              </View>
              <View
                style={[styles.frameParent11, styles.frameParentSpaceBlock]}
              >
                <View style={[styles.frameChild7, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>Poland</Text>
              </View>
              <View
                style={[styles.frameParent11, styles.frameParentSpaceBlock]}
              >
                <View style={[styles.frameChild8, styles.frameChildLayout]} />
                <Text style={[styles.germany, styles.germanyTypo]}>
                  Czech Republic
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.chartGraphicIcon1}
        contentFit="cover"
        source={require("../assets/chartgraphic3.png")}
      />
      <View style={styles.frameParent13}>
        <View style={styles.frameParent6}>
          <View style={[styles.frameChild9, styles.frameChildLayout]} />
          <Image
            style={[styles.housingIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/housing.png")}
          />
        </View>
        <View style={styles.frameParent7}>
          <View style={[styles.frameChild10, styles.frameChildLayout]} />
          <Image
            style={[styles.utilitiesIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/utilities.png")}
          />
        </View>
        <View style={styles.frameParent7}>
          <View style={[styles.frameChild11, styles.frameChildLayout]} />
          <Image
            style={[styles.foodIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/food.png")}
          />
        </View>
        <View style={styles.frameParent17}>
          <View style={styles.frameParentSpaceBlock}>
            <View style={[styles.frameChild12, styles.frameChildLayout]} />
            <Image
              style={[styles.transportationIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/transportation.png")}
            />
          </View>
          <View style={[styles.frameParent11, styles.frameParentSpaceBlock]}>
            <View style={[styles.frameChild13, styles.frameChildLayout]} />
            <Image
              style={styles.leisureIcon}
              contentFit="cover"
              source={require("../assets/leisure.png")}
            />
          </View>
          <View style={[styles.frameParent11, styles.frameParentSpaceBlock]}>
            <View style={[styles.frameChild8, styles.frameChildLayout]} />
            <Image
              style={[styles.othersIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/others.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.expenseCategoriesIcon}
        contentFit="cover"
        source={require("../assets/expense-categories.png")}
      />
      <Image
        style={[styles.iconEmergencySiren, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/-icon-emergency-siren.png")}
      />
      <Image
        style={[styles.statusBarLight, styles.vectorParentPosition]}
        contentFit="cover"
        source={require("../assets/status-bar--light11.png")}
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
  whhinfographicIconLayout: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
  parentLayout: {
    width: 298,
    position: "absolute",
  },
  parentFrameShadowBox: {
    height: 79,
    width: 297,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(74, 85, 104, 0.07)",
  },
  text4Typo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  updated10JanTypo: {
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 24,
    textAlign: "left",
  },
  frameChildLayout1: {
    opacity: 0.25,
    height: 65,
    width: 65,
    borderRadius: Border.br_lg,
    top: 7,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  factorsUsedToPosition: {
    top: 0,
    position: "absolute",
  },
  textTypo: {
    left: 206,
    textAlign: "right",
    top: 27,
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  cardPosition: {
    left: 37,
    backgroundColor: Color.neutralColorsWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  cardSpaceBlock: {
    padding: Padding.p_6xl,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  germanyTypo: {
    color: Color.colorBlack,
    fontWeight: "500",
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  listCountriesTypo: {
    lineHeight: 23,
    color: Color.colorBlack,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  vectorParentPosition: {
    top: 1,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    display: "none",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  frameChildLayout: {
    width: 20,
    borderRadius: Border.br_9xs,
    height: 20,
    overflow: "hidden",
  },
  frameParentSpaceBlock: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 13,
    marginLeft: 10,
  },
  iconLayout: {
    height: 11,
    marginLeft: 10,
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
  financialHealthScore: {
    top: 53,
    left: 66,
    textAlign: "center",
    color: Color.black01,
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  debtToIncomeRatio: {
    color: Color.grey900,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    textAlign: "left",
  },
  updated10Jan: {
    fontSize: FontSize.size_3xs,
    marginTop: 6,
    color: Color.grey900,
  },
  debtToIncomeRatioParent: {
    top: 15,
    left: 84,
    position: "absolute",
  },
  frameChild: {
    left: 6,
  },
  text: {
    top: 22,
    left: 231,
    color: Color.indigoDye,
    display: "flex",
    width: 70,
    height: 35,
    alignItems: "center",
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    position: "absolute",
  },
  iconScales: {
    right: "81.25%",
    left: "7.74%",
    bottom: "26.58%",
    top: "27.85%",
    width: "11.01%",
    height: "45.57%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameGroup: {
    top: 90,
    backgroundColor: Color.neutralColorsWhite,
    borderRadius: Border.br_xl,
    width: 297,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(74, 85, 104, 0.07)",
    overflow: "hidden",
    left: 1,
    position: "absolute",
  },
  frameItem: {
    top: 17,
    left: 224,
    alignItems: "flex-end",
    position: "absolute",
  },
  text1: {
    left: 240,
    color: Color.viridian,
    textAlign: "right",
    top: 27,
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
    lineHeight: 20,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  creditScoreWrapper: {
    flexDirection: "row",
  },
  bxsCoffee1Icon: {
    top: 24,
    left: 24,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
    left: 5,
    backgroundColor: "rgba(66, 136, 124, 0.4)",
    opacity: 0.35,
    height: 65,
    width: 65,
    borderRadius: Border.br_lg,
    top: 7,
    position: "absolute",
  },
  frameContainer: {
    height: 79,
    width: 297,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(74, 85, 104, 0.07)",
    backgroundColor: Color.neutralColorsWhite,
    borderRadius: Border.br_xl,
    overflow: "hidden",
    left: 0,
  },
  frameParent: {
    top: 67,
    height: 169,
    left: 0,
  },
  factorsUsedTo: {
    left: 10,
    width: 221,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.regularNoneMedium,
    lineHeight: 24,
    textAlign: "left",
    fontWeight: "600",
    color: Color.black01,
  },
  groupParent: {
    top: 102,
    left: 39,
    height: 236,
  },
  text2: {
    color: Color.colorMediumpurple,
  },
  rectangleIcon: {
    left: 7,
  },
  iconCoins: {
    right: "82.26%",
    left: "6.73%",
    bottom: "26.58%",
    top: "27.85%",
    width: "11.01%",
    height: "45.57%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  parent: {
    top: 353,
    left: 40,
    backgroundColor: Color.neutralColorsWhite,
    borderRadius: Border.br_xl,
    width: 297,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(74, 85, 104, 0.07)",
    overflow: "hidden",
    position: "absolute",
  },
  text3: {
    color: Color.mikadoYellow,
  },
  frameParent2: {
    top: 453,
    height: 79,
    width: 297,
    shadowOpacity: 1,
    elevation: 8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(74, 85, 104, 0.07)",
  },
  whhinfographicIcon: {
    display: "none",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  countriesComparedBy: {
    fontSize: FontSize.size_lgi,
    lineHeight: 28,
    width: 276,
    marginLeft: 10,
    letterSpacing: -0.4,
  },
  heading: {
    width: 310,
    flexDirection: "row",
  },
  cardHeader: {
    display: "none",
    flexDirection: "row",
  },
  january221: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    letterSpacing: -0.3,
  },
  moreDenselyPopulate: {
    letterSpacing: -0.3,
    alignSelf: "stretch",
    fontSize: FontSize.size_mini,
  },
  january221Parent: {
    display: "none",
    flex: 1,
  },
  graphIcon: {
    right: 0,
    bottom: 0,
    height: 30,
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 9,
    height: 8,
  },
  text4: {
    fontSize: FontSize.size_2xs,
    letterSpacing: -0.2,
    color: Color.colorDarkblue_100,
    marginLeft: 3,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
  },
  graphParent: {
    width: 83,
    height: 30,
  },
  cardBodyInner: {
    justifyContent: "center",
    display: "none",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  cardBody: {
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    display: "none",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  chartGraphicIcon: {
    width: 224,
    height: 224,
    display: "none",
  },
  cardBody1: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  listCountries: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
  },
  vectorIcon1: {
    width: 18,
    height: 20,
  },
  ictwotoneGraphicEq: {
    borderRadius: Border.br_31xl,
    backgroundColor: "#f7f7f7",
    height: 40,
    padding: Padding.p_4xs,
    width: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameChild3: {
    backgroundColor: Color.colorDarkblue_100,
  },
  germany: {
    marginLeft: 10,
    fontSize: FontSize.size_sm,
  },
  frameParent6: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameChild4: {
    backgroundColor: "#560bad",
  },
  frameParent7: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frameChild5: {
    backgroundColor: "#7209b7",
  },
  frameParent5: {
    width: 150,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameChild6: {
    backgroundColor: "#b5179e",
  },
  frameChild7: {
    backgroundColor: "#f72585",
  },
  frameParent11: {
    marginTop: 10,
  },
  frameChild8: {
    backgroundColor: Color.colorWhitesmoke_300,
  },
  frameParent9: {
    width: 150,
  },
  frameParent4: {
    marginTop: 26,
  },
  cardFooter: {
    alignItems: "center",
  },
  card: {
    top: 554,
    width: 300,
    height: 230,
  },
  chartGraphicIcon1: {
    marginTop: 213.7,
    marginLeft: -132.2,
    top: "50%",
    left: "50%",
    width: 114,
    height: 124,
    position: "absolute",
  },
  frameChild9: {
    backgroundColor: Color.colorMediumpurple,
  },
  housingIcon: {
    width: 50,
  },
  frameChild10: {
    backgroundColor: "#b071c2",
  },
  utilitiesIcon: {
    width: 46,
  },
  frameChild11: {
    backgroundColor: "#c483d5",
  },
  foodIcon: {
    width: 29,
  },
  frameChild12: {
    backgroundColor: "#daabe7",
  },
  transportationIcon: {
    width: 91,
  },
  frameChild13: {
    backgroundColor: "#dfb9e9",
  },
  leisureIcon: {
    width: 45,
    height: 10,
    marginLeft: 10,
  },
  othersIcon: {
    width: 40,
  },
  frameParent17: {
    width: 144,
    height: 91,
    marginTop: 10,
  },
  frameParent13: {
    top: 577,
    left: 198,
    width: 121,
    height: 180,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  expenseCategoriesIcon: {
    top: 579,
    left: 50,
    width: 141,
    height: 15,
    position: "absolute",
  },
  iconEmergencySiren: {
    height: "4.43%",
    width: "9.33%",
    top: "58.37%",
    right: "74.67%",
    bottom: "37.19%",
    left: "16%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBarLight: {
    width: 375,
    height: 45,
    left: 1,
  },
  arrowDownChild: {
    height: "76.25%",
    width: "58.33%",
    top: "12.08%",
    right: "20.83%",
    bottom: "11.67%",
    left: "20.83%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  arrowDown: {
    top: 71,
    left: 51,
    width: 24,
    height: 24,
  },
  finacialHealthScorePage: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 812,
    overflow: "hidden",
  },
});

export default FinacialHealthScorePage;
