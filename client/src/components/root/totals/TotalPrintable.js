import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

// CSS
import "./totals.css";

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // GENERAL
      clientName: undefined,
      address1: undefined,
      city: undefined,
      state: undefined,
      zipCode: undefined,
      plans: 0,
      engineering: 0,

      poolLength: 0,
      poolWidth: 0,
      poolAveDepth: 0,
      spaLength: 0,
      spaWidth: 0,
      spaAveDepth: 0,

      generalTotal: 0,

      // EXCAVATION
      excavtionEstimate: 0,
      excavationMainSquareFoot: 0,
      excavationZone: 0,
      excavationDemo: 0,
      excavationDemoEstimate: 0,
      excavationSod: 0,
      excavationSodEstimate: 0,
      excavationConcreteDemo: 0,
      excavationConcreteDemoEstimate: 0,
      excavationGrading: 0,
      excavationGradingEstimate: 0,
      excavationDeepRamp: 0,
      excavationRockArea: 0,
      excavationDayOfDig: 0,
      excavationSteelSquareFoot: 0,
      excavationTotal: 0,

      // PLUMBING AND ELECTRICAL
      plumbingType: 0,
      plumbingLength: 0,
      plumbingLengthEstimate: 0,
      gasLength: 0,
      gasLengthEstimate: 0,
      electricalLength: 0,
      electricalLengthEstimate: 0,
      stubsOutlets: 0,
      dedicatedSuction: 0,
      bondingWire: 0,
      sawCut: 0,
      plumbElectTotal: 0,

      // SHOTCRETE TOTAL
      deputyInspection: 0,
      shotcreteLocation: undefined,
      shotcreteCubicYards: 0,
      shotcreteEstimate: 0,
      shotcreteTotal: 0,

      // MASONRY TOTAL
      tileCoping: 0,
      tileCopingEstimate: 0,
      doubleBullnose: 0,
      deckingSquareFoot: 0,
      deckingSquareFootEstimate: 0,
      masonry1TypeSquareFoot: 0,
      masonry1TypeSquareFootEstimate: 0,
      masonryRetainingWall: 0,
      masonryRetainingWallEstimate: 0,
      masonryCMUWall: 0,
      masonryCMUWallEstimate: 0,
      masonryCleanup: 0,
      plasterLength: 0,
      plasterLengthEstimate: 0,
      bagsOfGlass: 0,
      bagsOfGlassEstimate: 0,
      bagsOfAbalone: 0,
      bagsOfAbaloneEstimate: 0,
      plasterStartUp: 0,
      plasterMastic: 0,
      masonryTotal: 0,

      // ADDITIONAL TOTAL
      manualIgnitionFireBowl: 0,
      manualIgnitionFireBowlEstimate: 0,
      electronicIgnitionFireBowl: 0,
      electronicIgnitionFireBowlEstimate: 0,
      sheerDecent: 0,
      sheerDecentEstimate: 0,
      sheerDecentPumps: 0,
      sheerDecentPumpsEstimate: 0,
      sheerDecentRuns: 0,
      sheerDecentRunsEstimate: 0,
      barbecues: 0,
      barbecuesEstimate: 0,
      additionsTotal: 0,

      // GRAND TOTAL
      margin: 0.35,
      profit: 0,
      subtotal: 0,
      grandTotal: 0,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    // this.calculateGeneralTotals = this.calculateGeneralTotals.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("caller joshi");
    // console.log("getDerivedStateFromProps: ", props.allData.engineering)
    let update = {};

    // GENERAL
    if (props.allData.clientName) {
      update.clientName = props.allData.clientName;
    }
    if (props.allData.address1) {
      update.address1 = props.allData.address1;
    }
    if (props.allData.city) {
      update.city = props.allData.city;
    }
    if (props.allData.state) {
      update.state = props.allData.state;
    }
    if (props.allData.zipCode) {
      update.zipCode = props.allData.zipCode;
    }

    if (props.allData.projectManager) {
      update.projectManager = 500;
    } else {
      update.projectManager = 0;
    }

    if (props.allData.plans) {
      update.plans = 400;
    } else {
      update.plans = 0;
    }

    if (props.allData.engineering) {
      update.engineering = 175;
    } else {
      update.engineering = 0;
    }

    if (
      props.allData.poolLength ||
      props.allData.poolWidth ||
      props.allData.poolAveDepth ||
      props.allData.spaLength ||
      props.allData.spaWidth ||
      props.allData.spaAveDepth
    ) {
      update.poolLength = parseInt(props.allData.poolLength);
      update.poolWidth = parseInt(props.allData.poolWidth);
      update.poolAveDepth = parseInt(props.allData.poolAveDepth);
      update.spaLength = parseInt(props.allData.spaLength);
      update.spaWidth = parseInt(props.allData.spaWidth);
      update.spaAveDepth = parseInt(props.allData.spaAveDepth);
    }

    // EXCAVATION

    if (
      props.allData.excavationMainLocation &&
      props.allData.excavationMainSquareFoot
    ) {
      if (props.allData.excavationMainLocation === "63access") {
        if (props.allData.excavationMainSquareFoot < 400) {
          // console.log(props.allData.excavationMainSquareFoot);
          update.excavtionEstimate = 1500;
          update.excavationMainLocation = props.allData.excavationMainLocation;
          update.excavationMainSquareFoot = parseInt(
            props.allData.excavationMainSquareFoot
          );
        } else {
          update.excavtionEstimate = 5 * props.allData.excavationMainSquareFoot;
          update.excavationMainLocation = props.allData.excavationMainLocation;
          update.excavationMainSquareFoot = parseInt(
            props.allData.excavationMainSquareFoot
          );
        }
      } else if (props.allData.excavationMainLocation === "mid-size") {
        if (props.allData.excavationMainSquareFoot < 400) {
          // console.log(props.allData.excavationMainSquareFoot);
          update.excavtionEstimate = 1500;
        } else {
          update.excavtionEstimate = 8 * props.allData.excavationMainSquareFoot;
          update.excavationMainLocation = props.allData.excavationMainLocation;
          update.excavationMainSquareFoot = parseInt(
            props.allData.excavationMainSquareFoot
          );
        }
      } else if (props.allData.excavationMainLocation === "mini-access") {
        if (props.allData.excavationMainSquareFoot < 400) {
          // console.log(props.allData.excavationMainSquareFoot);
          update.excavtionEstimate = 1500;
        } else {
          update.excavtionEstimate =
            12 * props.allData.excavationMainSquareFoot;
          update.excavationMainLocation = props.allData.excavationMainLocation;
          update.excavationMainSquareFoot = parseInt(
            props.allData.excavationMainSquareFoot
          );
        }
      }
    } else {
      update.excavtionEstimate = 0;
      update.excavationMainLocation = props.allData.excavationMainLocation;
      update.excavationMainSquareFoot = props.allData.excavationMainSquareFoot;
    }

    if (props.allData.excavationZone === "riversideCounty") {
      update.excavationZone = 1000;
      update.excavationZone = "riversideCounty";
    } else if (props.allData.excavationZone === "inlandEmpire") {
      update.excavationZone = 1600;
      update.excavationZone = "inlandEmpire";
    } else if (props.allData.excavationZone === "west605") {
      update.excavationZone = 2000;
      update.excavationZone = "west605";
    } else if (props.allData.excavationZone === "westLA") {
      update.excavationZone = 2500;
      update.excavationZone = "westLA";
    }

    if (props.allData.excavationDemo) {
      update.excavationDemoEstimate = 3.75 * props.allData.excavationDemo;
      update.excavationDemo = parseInt(props.allData.excavationDemo);
    } else {
      update.excavationDemoEstimate = 0;
    }

    if (props.allData.excavationSod) {
      update.excavationSodEstimate = 400 * props.allData.excavationSod;
      update.excavationSod = parseInt(props.allData.excavationSod);
    } else {
      update.excavationSodEstimate = 0;
    }

    if (props.allData.excavationConcreteDemo) {
      update.excavationConcreteDemoEstimate =
        500 * props.allData.excavationConcreteDemo;
      update.excavationConcreteDemo = parseInt(
        props.allData.excavationConcreteDemo
      );
    } else {
      update.excavationConcreteDemoEstimate = 0;
    }

    if (props.allData.excavationGrading) {
      update.excavationGradingEstimate = 450 * props.allData.excavationGrading;
      update.excavationGrading = parseInt(props.allData.excavationGrading);
    } else {
      update.excavationGradingEstimate = 0;
    }

    if (props.allData.excavationDeepRamp) {
      update.excavationDeepRamp = 800;
    } else {
      update.excavationDeepRamp = 0;
    }

    if (props.allData.excavationRockArea) {
      update.excavationRockArea = 2500;
    } else {
      update.excavationRockArea = 0;
    }

    if (props.allData.excavationDayOfDig) {
      update.excavationDayOfDigEstimate = 65 * props.allData.excavationDayOfDig;
      update.excavationDayOfDig = parseInt(props.allData.excavationDayOfDig);
    } else {
      update.excavationDayOfDigEstimate = 0;
    }

    if (
      props.allData.excavationSteelLocation &&
      props.allData.excavationSteelSquareFoot
    ) {
      if (
        props.allData.excavationSteelLocation === "riversideCounty" ||
        props.allData.excavationSteelLocation === "LACounty" ||
        props.allData.excavationSteelLocation === "SBCounty" ||
        props.allData.excavationSteelLocation === "OrangeCounty"
      ) {
        update.excavationSteelSquareFootEstimate =
          20 * props.allData.excavationSteelSquareFoot;
        update.excavationSteelSquareFoot = parseInt(
          props.allData.excavationSteelSquareFoot
        );
        update.excavationSteelLocation =
          "riversideCounty, SBCounty, OrangeCounty";
      } else if (props.allData.excavationSteelLocation === "LACity") {
        update.excavationSteelSquareFootEstimate =
          25 * props.allData.excavationSteelSquareFoot;
        update.excavationSteelSquareFoot = parseInt(
          props.allData.excavationSteelSquareFoot
        );
        update.excavationSteelLocation = "LACity";
      } else {
        update.excavationSteelSquareFootEstimate = 0;
      }
    }

    // PLUMBING AND ELECTRICAL
    if (props.allData.plumbingType && props.allData.plumbingLength) {
      if (props.allData.plumbingType === "poolOnly") {
        update.plumbingLengthEstimate =
          3000 + 30 * props.allData.plumbingLength;
        update.plumbingLength = parseInt(props.allData.plumbingLength);
        update.plumbingType = "poolOnly";
      } else if (props.allData.plumbingType === "poolAndSpa") {
        update.plumbingLengthEstimate =
          4000 + 30 * props.allData.plumbingLength;
        update.plumbingLength = parseInt(props.allData.plumbingLength);
        update.plumbingType = "poolAndSpa";
      } else if (props.allData.plumbingType === "PoolAndSpaRemodel") {
        update.plumbingLengthEstimate = 5000 + 0 * props.allData.plumbingLength;
        update.plumbingLength = parseInt(props.allData.plumbingLength);
        update.plumbingType = "PoolAndSpaRemodel";
      } else {
        update.plumbingLengthEstimate = 0;
      }
    }

    if (props.allData.gasLength) {
      if (props.allData.gasLength < 40) {
        update.gasLengthEstimate = 450;
        update.gasLength = parseInt(props.allData.gasLength);
      } else if (props.allData.gasLength >= 40) {
        update.gasLengthEstimate = 8 * props.allData.gasLength + 450;
        update.gasLength = parseInt(props.allData.gasLength);
      } else {
        update.gasLengthEstimate = 0;
      }
    }

    if (props.allData.electricalLength) {
      if (props.allData.electricalLength < 40) {
        update.electricalLengthEstimate = 1150;
        update.electricalLength = parseInt(props.allData.electricalLength);
      } else if (props.allData.electricalLength >= 40) {
        update.electricalLengthEstimate =
          8 * props.allData.electricalLength + 1150;
        update.electricalLength = parseInt(props.allData.electricalLength);
      } else {
        update.electricalLengthEstimate = 0;
      }
    }

    if (props.allData.stubsOutlets) {
      update.stubsOutlets = 175 * props.allData.stubsOutlets;
    } else {
      update.stubsOutlets = 0;
    }

    if (props.allData.dedicatedSuction) {
      update.dedicatedSuction = 250;
    } else {
      update.dedicatedSuction = 0;
    }

    if (props.allData.bondingWire) {
      update.bondingWire = 200;
    } else {
      update.bondingWire = 0;
    }

    if (props.allData.sawCut) {
      update.sawCut = 350;
    } else {
      update.sawCut = 0;
    }

    // SHOTCRETE
    if (props.allData.deputyInspection) {
      update.deputyInspection = 390;
    } else {
      update.deputyInspection = 0;
    }

    if (
      props.allData.shotcreteLocation &&
      props.allData.poolLength &&
      props.allData.poolWidth &&
      props.allData.poolAveDepth &&
      !props.allData.spaLength &&
      !props.allData.spaWidth
    ) {
      let locationCost = 0;
      let perimeter =
        2 * props.allData.poolLength + 2 * props.allData.poolWidth;
      let aveDepth = props.allData.poolAveDepth;
      let surfaceArea = props.allData.poolLength * props.allData.poolWidth;

      if (props.allData.shotcreteLocation === "riversideCounty/IE") {
        update.shotcreteLocation = props.allData.shotcreteLocation;
        locationCost = 200;
      } else if (props.allData.shotcreteLocation === "losAngeles") {
        update.shotcreteLocation = props.allData.shotcreteLocation;
        locationCost = 210;
      }

      let cubicYards = (perimeter * aveDepth + surfaceArea) / 27;

      if (cubicYards < 10) {
        update.shotcreteEstimate = 3500;
        update.shotcreteCubicYards = cubicYards;
      } else if (cubicYards >= 10) {
        update.shotcreteEstimate = 3500 + cubicYards * locationCost;
        update.shotcreteCubicYards = cubicYards;
      }

      // console.log("shotcrete for pool only:");
      // console.log("location cost: " + locationCost);
      // console.log("perimeter: " + perimeter);
      // console.log("aveDepth: " + aveDepth);
      // console.log("surfaceArea: " + surfaceArea);
      // console.log("shotcreteEstimate: " + update.shotcreteEstimate);
    } else if (
      props.allData.shotcreteLocation &&
      props.allData.spaLength &&
      props.allData.spaWidth &&
      props.allData.spaAveDepth &&
      props.allData.poolLength &&
      props.allData.poolWidth &&
      props.allData.poolAveDepth
    ) {
      let locationCost = 0;

      let perimeter =
        2 * props.allData.poolLength +
        2 * props.allData.poolWidth +
        (2 * props.allData.spaLength + 2 * props.allData.spaWidth);
      let aveDepth = props.allData.poolAveDepth;
      let surfaceArea =
        props.allData.poolLength * props.allData.poolWidth +
        props.allData.spaLength * props.allData.spaWidth;

      if (props.allData.shotcreteLocation === "riversideCounty/IE") {
        update.shotcreteLocation = props.allData.shotcreteLocation;
        locationCost = 200;
      } else if (props.allData.shotcreteLocation === "losAngeles") {
        update.shotcreteLocation = props.allData.shotcreteLocation;
        locationCost = 210;
      }

      let cubicYards = (perimeter * aveDepth + surfaceArea) / 27;
      if (cubicYards < 10) {
        update.shotcreteEstimate = 3500;
        update.shotcreteCubicYards = cubicYards;
      } else if (cubicYards >= 10) {
        update.shotcreteEstimate = 3500 + cubicYards * locationCost;
        update.shotcreteCubicYards = cubicYards;
      }

      // console.log("shotcrete for pool and spa:");
      // console.log("location cost: " + locationCost);
      // console.log("perimeter: " + perimeter);
      // console.log("aveDepth: " + aveDepth);
      // console.log("surfaceArea: " + surfaceArea);
      // console.log("shotcreteEstimate: " + update.shotcreteEstimate);
    }

    // MASONRY
    if (props.allData.tileCoping) {
      update.tileCopingEstimate = 40 * props.allData.tileCoping;
      update.tileCoping = parseInt(props.allData.tileCoping);
    } else {
      update.tileCopingEstimate = 0;
    }

    if (props.allData.doubleBullnose) {
      update.doubleBullnose = 10 * props.allData.tileCoping;
    } else {
      update.doubleBullnose = 0;
    }

    if (props.allData.deckingType && props.allData.deckingSquareFoot) {
      if (props.allData.deckingType === "ngBroomFinish") {
        update.deckingSquareFootEstimate =
          3300 + 6 * props.allData.deckingSquareFoot;
        update.deckingSquareFoot = parseInt(props.allData.deckingSquareFoot);
        update.deckingType = "ngBroomFinish";
      } else if (props.allData.deckingType === "color1p") {
        update.deckingSquareFootEstimate =
          3300 + 1 * props.allData.deckingSquareFoot;
        update.deckingSquareFoot = parseInt(props.allData.deckingSquareFoot);

        update.deckingType = "color1p";
      } else if (props.allData.deckingType === "acidWash") {
        update.deckingSquareFootEstimate =
          3300 + 1 * props.allData.deckingSquareFoot;
        update.deckingSquareFoot = parseInt(props.allData.deckingSquareFoot);

        update.deckingType = "acidWash";
      } else if (props.allData.deckingType === "stampSeamless") {
        update.deckingSquareFootEstimate =
          3300 + 1 * props.allData.deckingSquareFoot;
        update.deckingSquareFoot = parseInt(props.allData.deckingSquareFoot);

        update.deckingType = "stampSeamless";
      } else if (props.allData.deckingType === "stampPattern") {
        update.deckingSquareFootEstimate =
          3300 + 2 * props.allData.deckingSquareFoot;
        update.deckingSquareFoot = parseInt(props.allData.deckingSquareFoot);

        update.deckingType = "stampPattern";
      } else {
        update.deckingSquareFootEstimate = 0;
      }
    }

    if (props.allData.masonry1Type && props.allData.masonry1TypeSquareFoot) {
      if (props.allData.masonry1Type === "rbbStone") {
        update.masonry1TypeSquareFootEstimate =
          25 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "rbbStone";
      } else if (props.allData.masonry1Type === "retainingWallCMUBlock") {
        update.masonry1TypeSquareFootEstimate =
          50 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "retainingWallCMUBlock";
      } else if (props.allData.masonry1Type === "stuccoFin") {
        update.masonry1TypeSquareFootEstimate =
          15 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "stuccoFin";
      } else if (props.allData.masonry1Type === "smoothStucco") {
        update.masonry1TypeSquareFootEstimate =
          25 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "smoothStucco";
      } else if (props.allData.masonry1Type === "standardPavers") {
        update.masonry1TypeSquareFootEstimate =
          12 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "standardPavers";
      } else if (props.allData.masonry1Type === "travertine") {
        update.masonry1TypeSquareFootEstimate =
          22 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "travertine";
      } else if (props.allData.masonry1Type === "concretePadTurf") {
        update.masonry1TypeSquareFootEstimate =
          15 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "concretePadTurf";
      } else if (props.allData.masonry1Type === "concreteStepPad") {
        update.masonry1TypeSquareFootEstimate =
          8 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "concreteStepPad";
      } else if (props.allData.masonry1Type === "trexLPE") {
        update.masonry1TypeSquareFootEstimate =
          42 * props.allData.masonry1TypeSquareFoot;
        update.masonry1TypeSquareFoot = parseInt(
          props.allData.masonry1TypeSquareFoot
        );
        update.masonry1Type = "trexLPE";
      } else {
        update.masonry1TypeSquareFootEstimate = 0;
      }
    }

    if (props.allData.masonryRetainingWall) {
      update.masonryRetainingWallEstimate =
        150 * props.allData.masonryRetainingWall;
      update.masonryRetainingWall = parseInt(
        props.allData.masonryRetainingWall
      );
    } else {
      update.masonryRetainingWallEstimate = 0;
    }

    if (props.allData.masonryCMUWall) {
      update.masonryCMUWallEstimate = 50 * props.allData.masonryCMUWall;
      update.masonryCMUWall = parseInt(props.allData.masonryCMUWall);
    } else {
      update.masonryCMUWallEstimate = 0;
    }

    if (props.allData.masonryCleanup) {
      update.masonryCleanup = 1000;
    } else {
      update.masonryCleanup = 0;
    }

    if (props.allData.plasterType && props.allData.plasterLength) {
      if (props.allData.plasterType === "white") {
        update.plasterLengthEstimate = 24 * props.allData.plasterLength;
        update.plasterLength = parseInt(props.allData.plasterLength);
        update.plasterType = "white";
      } else if (props.allData.plasterType === "miniPebble") {
        update.plasterLengthEstimate = 45 * props.allData.plasterLength;
        update.plasterLength = parseInt(props.allData.plasterLength);

        update.plasterType = "miniPebble";
      } else if (props.allData.plasterType === "microPebble") {
        update.plasterLengthEstimate = 57 * props.allData.plasterLength;
        update.plasterLength = parseInt(props.allData.plasterLength);

        update.plasterType = "microPebble";
      } else if (props.allData.plasterType === "microFusion") {
        update.plasterLengthEstimate = 67 * props.allData.plasterLength;
        update.plasterLength = parseInt(props.allData.plasterLength);

        update.plasterType = "microFusion";
      } else if (props.allData.plasterType === "polishScapes") {
        update.plasterLengthEstimate = 110 * props.allData.plasterLength;
        update.plasterLength = parseInt(props.allData.plasterLength);

        update.plasterType = "polishScapes";
      } else {
        update.plasterLengthEstimate = 0;
      }
    }

    if (props.allData.bagsOfGlass) {
      update.bagsOfGlassEstimate = 350 * props.allData.bagsOfGlass;
      update.bagsOfGlass = parseInt(props.allData.bagsOfGlass);
    } else {
      update.bagsOfGlassEstimate = 0;
    }

    if (props.allData.bagsOfAbalone) {
      update.bagsOfAbaloneEstimate = 350 * props.allData.bagsOfAbalone;
      update.bagsOfAbalone = parseInt(props.allData.bagsOfAbalone);
    } else {
      update.bagsOfAbaloneEstimate = 0;
    }

    if (props.allData.plasterStartUp) {
      update.plasterStartUp = 375;
    } else {
      update.plasterStartUp = 0;
    }

    if (props.allData.plasterMastic) {
      update.plasterMastic = 250;
    } else {
      update.plasterMastic = 0;
    }

    // ADDITIONS
    if (props.allData.manualIgnitionFireBowl) {
      update.manualIgnitionFireBowlEstimate =
        1000 * props.allData.manualIgnitionFireBowl;
      update.manualIgnitionFireBowl = parseInt(
        props.allData.manualIgnitionFireBowl
      );
    } else {
      update.manualIgnitionFireBowlEstimate = 0;
    }

    if (props.allData.electronicIgnitionFireBowl) {
      update.electronicIgnitionFireBowlEstimate =
        1500 * props.allData.electronicIgnitionFireBowl;
      update.electronicIgnitionFireBowl = parseInt(
        props.allData.electronicIgnitionFireBowl
      );
    } else {
      update.electronicIgnitionFireBowlEstimate = 0;
    }

    if (props.allData.sheerDecent) {
      update.sheerDecentEstimate = 1000 * props.allData.sheerDecent;
      update.sheerDecent = parseInt(props.allData.sheerDecent);
    } else {
      update.sheerDecentEstimate = 0;
    }

    if (props.allData.sheerDecentPumps) {
      update.sheerDecentPumpsEstimate = 1150 * props.allData.sheerDecentPumps;
      update.sheerDecentPumps = parseInt(props.allData.sheerDecentPumps);
    } else {
      update.sheerDecentPumpsEstimate = 0;
    }

    if (props.allData.sheerDecentRuns) {
      update.sheerDecentRunsEstimate = 0 * props.allData.sheerDecentRuns;
      update.sheerDecentRuns = parseInt(props.allData.sheerDecentRuns);
    } else {
      update.sheerDecentRunsEstimate = 0;
    }

    if (props.allData.barbecues) {
      update.barbecuesEstimate = 1000 * props.allData.barbecues;
      update.barbecues = parseInt(props.allData.barbecues);
    } else {
      update.barbecuesEstimate = 0;
    }
    return update;
  }

  // UPDATING TOTALS
  componentDidMount() {
    // GENERAL
    // console.log("ran");
    let general = this.state.plans + this.state.engineering;
    // console.log("general", general);
    if (general !== this.state.generalTotal) {
      this.setState({
        generalTotal: general,
      });
    }

    // EXCAVATION
    let excavation =
      this.state.excavationDemoEstimate +
      this.state.excavationSodEstimate +
      this.state.excavationConcreteDemoEstimate +
      this.state.excavationGradingEstimate +
      this.state.excavationDeepRamp +
      this.state.excavationRockArea +
      this.state.excavationDayOfDigEstimate +
      this.state.excavationSteelSquareFoot +
      this.state.excavtionEstimate;

    // console.log("EXCAVATION ", this.state.excavationDemoEstimate, this.state.excavationSodEstimate, this.state.excavationConcreteDemoEstimate, this.state.excavationGradingEstimate, this.state.excavationDeepRamp, this.state.excavationRockArea, this.state.excavationDayOfDigEstimate, this.state.excavationSteelSquareFoot, this.state.excavtionEstimate)

    if (excavation !== this.state.excavationTotal) {
      this.setState({
        excavationTotal: excavation,
      });
    }

    // PLUMBING AND ELECTRICAL
    let plumbElect =
      this.state.plumbingLengthEstimate +
      this.state.gasLengthEstimate +
      this.state.electricalLengthEstimate +
      this.state.stubsOutlets +
      this.state.dedicatedSuction +
      this.state.bondingWire +
      this.state.sawCut;

    if (plumbElect !== this.state.plumbElectTotal) {
      this.setState({
        plumbElectTotal: plumbElect,
      });
    }

    // SHOTCRETE
    let shotcrete = this.state.deputyInspection + this.state.shotcreteEstimate;
    if (shotcrete !== this.state.shotcreteTotal) {
      this.setState({
        shotcreteTotal: shotcrete,
      });
    }

    // MASONRY
    let masonry =
      this.state.tileCopingEstimate +
      this.state.doubleBullnose +
      this.state.deckingSquareFootEstimate +
      this.state.masonry1TypeSquareFootEstimate +
      this.state.masonryCleanup +
      this.state.bagsOfGlassEstimate +
      this.state.bagsOfAbaloneEstimate +
      this.state.plasterStartUp +
      this.state.plasterMastic +
      this.state.masonryCMUWallEstimate +
      this.state.masonryRetainingWallEstimate;

    // console.log(this.state.tileCopingEstimate, this.state.doubleBullnose, this.state.deckingSquareFootEstimate, this.state.masonry1TypeSquareFootEstimate, this.state.masonryCleanup, this.state.bagsOfGlassEstimate, this.state.bagsOfAbaloneEstimate, this.state.plasterStartUp, this.state.plasterMastic, this.state.masonryCMUWallEstimate, this.state.masonryRetainingWallEstimate)

    if (masonry !== this.state.masonryTotal) {
      this.setState({
        masonryTotal: masonry,
      });
    }

    //ADDITIONS
    let additions =
      this.state.manualIgnitionFireBowlEstimate +
      this.state.electronicIgnitionFireBowlEstimate +
      this.state.sheerDecentEstimate +
      this.state.sheerDecentPumpsEstimate +
      this.state.barbecuesEstimate;
    if (additions !== this.state.additionsTotal) {
      this.setState(
        {
          additionsTotal: additions,
        },
        () => {
          let sub =
            this.state.generalTotal +
            this.state.excavationTotal +
            this.state.plumbElectTotal +
            this.state.shotcreteTotal +
            this.state.masonryTotal +
            this.state.additionsTotal;
          if (sub !== this.state.subtotal) {
            this.setState(
              {
                subtotal: sub,
              },
              () => {
                let prof = this.state.subtotal * this.state.margin;
                // console.log(prof, this.state.subtotal, this.state.margin, this.state.profit)
                if (prof !== this.state.profit) {
                  this.setState(
                    {
                      profit: prof,
                    },
                    () => {
                      // GRAND TOTAL
                      let grand = this.state.profit + this.state.subtotal;
                      if (grand !== this.state.grandTotal) {
                        this.setState({
                          grandTotal: grand,
                        });
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    }

    // // GRAND TOTAL
    // let grand = this.state.profit + this.state.subtotal;
    // if (grand !== this.state.grandTotal) {
    //   this.setState({
    //     grandTotal: grand,
    //   });
    // }
  }

  handleSubmitForm() {
    console.log("SUBMITTING");
    const data = this.state;
    console.log(data);
    console.log(this.props);
    // this.props.updatePoolData(data)
    localStorage.setItem("poolData", JSON.stringify(data));
    window.location = "/success";

    // axios
    //   .post(`api/mailer/review?state=${data}`)
    //   .then(res => {
    //     console.log("CLIENT POST COMPLETE: ", res)
    //     if (res.status === 200) {
    //       // console.log("redirect")
    //       window.location = res.data.location
    //     }
    //   })
    //   .catch(err => console.log("CLIENT POST ERROR: ", err))
  }

  // calculateGeneralTotals = () => {

  // }

  render(props) {
    // this.calculateGeneralTotals()
    console.log(this.state);
    return (
      <>
        <p className='font-bold text-underline'>
          SUBTOTAL:${parseFloat(this.state.subtotal).toFixed(2)}
        </p>
        <p className='font-bold text-underline'>
          PROFIT:${parseFloat(this.state.profit).toFixed(2)}
        </p>
        <p className='font-bold text-underline'>
          GRAND TOTAL:${parseFloat(this.state.grandTotal).toFixed(2)}
        </p>
      </>
    );
  }
}
