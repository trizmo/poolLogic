import React, { Component } from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'

// CSS
import './totals.css'

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // GENERAL
      clientName: undefined,
      plans: 0,
      engineering: 0,
      generalTotal: 0,

      // EXCAVATION
      excavationZone: 0,
      excavationDemo: 0,
      excavationSod: 0,
      excavationConcreteDemo: 0,
      excavationGrading: 0,
      excavationDeepRamp: 0,
      excavationRockArea: 0,
      excavationDayOfDig: 0,
      excavationSteelSquareFoot: 0,
      excavationTotal: 0,

      // PLUMBING AND ELECTRICAL
      plumbingType: 0,
      plumbingLength: 0,
      gasLength: 0,
      electricalLength: 0,
      stubsOutlets: 0,
      dedicatedSuction: 0,
      bondingWire: 0,
      sawCut: 0,
      plumbElectTotal: 0,

      // SHOTCRETE TOTAL
      deputyInspection: 0,
      shotcreteTotal: 0,

      // MASONRY TOTAL
      tileCoping: 0,
      doubleBullnose: 0,
      deckingSquareFoot: 0,
      masonry1TypeSquareFoot: 0,
      masonryCleanup: 0,
      plasterLength: 0,
      bagsOfGlass: 0,
      bagsOfAbalone: 0,
      plasterStartUp: 0,
      plasterMastic: 0,
      masonryTotal: 0,

      // ADDITIONAL TOTAL
      manualIgnitionFireBowl: 0,
      electronicIgnitionFireBowl: 0,
      sheerDecent: 0,
      sheerDecentPumps: 0,
      barbecues: 0,
      additionsTotal: 0,

      // GRAND TOTAL
      grandTotal: 0,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
    // this.calculateGeneralTotals = this.calculateGeneralTotals.bind(this)
  }


  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps: ", props.allData.engineering)
    let update = {}


    // GENERAL
    if (props.allData.clientName) {
      update.clientName = props.allData.clientName
    }
    if (props.allData.address1) {
      update.address1 = props.allData.address1
    }
    if (props.allData.city) {
      update.city = props.allData.city
    }
    if (props.allData.state) {
      update.state = props.allData.state
    }
    if (props.allData.zipCode) {
      update.zipCode = props.allData.zipCode
    }
    if (props.allData.projectManager) {
      update.projectManager = props.allData.projectManager
    }

    if (props.allData.plans) {
      update.plans = 400
    }
    else {
      update.plans = 0
    }

    if (props.allData.engineering) {
      update.engineering = 175
    }
    else {
      update.engineering = 0
    }

    // EXCAVATION
    if (props.allData.excavationZone === "riversideCounty") {
      update.excavationZone = 1000
      update.excavationZone = "riversideCounty"
    }
    else if (props.allData.excavationZone === "inlandEmpire") {
      update.excavationZone = 1600
      update.excavationZone = "inlandEmpire"
    }
    else if (props.allData.excavationZone === "west605") {
      update.excavationZone = 2000
      update.excavationZone = "west605"
    }
    else if (props.allData.excavationZone === "westLA") {
      update.excavationZone = 2500
      update.excavationZone = "westLA"
    }

    if (props.allData.excavationDemo) {
      update.excavationDemo = 3.75 * props.allData.excavationDemo
    }
    else {
      update.excavationDemo = 0
    }

    if (props.allData.excavationSod) {
      update.excavationSod = 400 * props.allData.excavationSod
    }
    else {
      update.excavationSod = 0
    }

    if (props.allData.excavationConcreteDemo) {
      update.excavationConcreteDemo = 500 * props.allData.excavationConcreteDemo
    }
    else {
      update.excavationConcreteDemo = 0
    }

    if (props.allData.excavationGrading) {
      update.excavationGrading = 450 * props.allData.excavationGrading
    }
    else {
      update.excavationGrading = 0
    }

    if (props.allData.excavationDeepRamp) {
      update.excavationDeepRamp = 800
    }
    else {
      update.excavationDeepRamp = 0
    }

    if (props.allData.excavationRockArea) {
      update.excavationRockArea = 2500
    }
    else {
      update.excavationRockArea = 0
    }

    if (props.allData.excavationDayOfDig) {
      update.excavationDayOfDig = 65 * props.allData.excavationDayOfDig
    }
    else {
      update.excavationDayOfDig = 0
    }

    if (props.allData.excavationSteelLocation && props.allData.excavationSteelSquareFoot) {
      if (props.allData.excavationSteelLocation === "riversideCounty" || props.allData.excavationSteelLocation === "LACounty" || props.allData.excavationSteelLocation === "SBCounty" || props.allData.excavationSteelLocation === "OrangeCounty") {
        update.excavationSteelSquareFoot = 20 * props.allData.excavationSteelSquareFoot
        update.excavationSteelLocation = "riversideCounty, SBCounty, OrangeCounty"
      }
      else if (props.allData.excavationSteelLocation === "LACity") {
        update.excavationSteelSquareFoot = 25 * props.allData.excavationSteelSquareFoot
        update.excavationSteelLocation = "LACity"
      }
      else {
        update.excavationSteelSquareFoot = 0
      }
    }

    // PLUMBING AND ELECTRICAL
    if (props.allData.plumbingType && props.allData.plumbingLength) {
      if (props.allData.plumbingType === "poolOnly") {
        update.plumbingLength = 3000 + (30 * props.allData.plumbingLength)
        update.plumbingType = "poolOnly"
      }
      else if (props.allData.plumbingType === "poolAndSpa") {
        update.plumbingLength = 4000 + (30 * props.allData.plumbingLength)
        update.plumbingType = "poolAndSpa"
      }
      else if (props.allData.plumbingType === "PoolAndSpaRemodel") {
        update.plumbingLength = 5000 + (0 * props.allData.plumbingLength)
        update.plumbingType = "PoolAndSpaRemodel"
      }
      else {
        update.plumbingLength = 0
      }
    }

    if (props.allData.gasLength) {
      if (props.allData.gasLength < 40) {
        update.gasLength = 450

      } else if (props.allData.gasLength >= 40) {
        update.gasLength = (8 * props.allData.gasLength) + 450
      }
      else {
        update.gasLength = 0
      }
    }

    if (props.allData.gasLength) {
      if (props.allData.gasLength < 40) {
        update.gasLength = 450

      } else if (props.allData.gasLength >= 40) {
        update.gasLength = (8 * props.allData.gasLength) + 450
      }
      else {
        update.gasLength = 0
      }
    }

    if (props.allData.electricalLength) {
      if (props.allData.electricalLength < 40) {
        update.electricalLength = 1150

      } else if (props.allData.electricalLength >= 40) {
        update.electricalLength = (8 * props.allData.electricalLength) + 1150
      }
      else {
        update.electricalLength = 0
      }
    }

    if (props.allData.stubsOutlets) {
      update.stubsOutlets = 175 * props.allData.stubsOutlets
    }
    else {
      update.stubsOutlets = 0
    }

    if (props.allData.dedicatedSuction) {
      update.dedicatedSuction = 250
    }
    else {
      update.dedicatedSuction = 0
    }

    if (props.allData.bondingWire) {
      update.bondingWire = 200
    }
    else {
      update.bondingWire = 0
    }

    if (props.allData.sawCut) {
      update.sawCut = 350
    }
    else {
      update.sawCut = 0
    }

    // SHOTCRETE
    if (props.allData.deputyInspection) {
      update.deputyInspection = 390
    }
    else {
      update.deputyInspection = 0
    }

    // MASONRY
    if (props.allData.tileCoping) {
      update.tileCoping = 40 * props.allData.tileCoping
    }
    else {
      update.tileCoping = 0
    }
    if (props.allData.doubleBullnose) {
      update.doubleBullnose = 10 * props.allData.tileCoping
    }
    else {
      update.doubleBullnose = 0
    }

    if (props.allData.deckingType && props.allData.deckingSquareFoot) {
      if (props.allData.deckingType === "ngBroomFinish") {
        update.deckingSquareFoot = 3300 + (6 * props.allData.deckingSquareFoot)
        update.deckingType = "ngBroomFinish"
      }
      else if (props.allData.deckingType === "color1p") {
        update.deckingSquareFoot = 3300 + (1 * props.allData.deckingSquareFoot)
        update.deckingType = "color1p"

      }
      else if (props.allData.deckingType === "acidWash") {
        update.deckingSquareFoot = 3300 + (1 * props.allData.deckingSquareFoot)
        update.deckingType = "acidWash"

      }
      else if (props.allData.deckingType === "stampSeamless") {
        update.deckingSquareFoot = 3300 + (1 * props.allData.deckingSquareFoot)
        update.deckingType = "stampSeamless"

      }
      else if (props.allData.deckingType === "stampPattern") {
        update.deckingSquareFoot = 3300 + (2 * props.allData.deckingSquareFoot)
        update.deckingType = "stampPattern"

      }
      else {
        update.deckingSquareFoot = 0
      }
    }

    if (props.allData.masonry1Type && props.allData.masonry1TypeSquareFoot) {
      if (props.allData.masonry1Type === "rbbStone") {
        update.masonry1TypeSquareFoot = 25 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "rbbStone"
      }
      else if (props.allData.masonry1Type === "retainingWallCMUBlock") {
        update.masonry1TypeSquareFoot = 50 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "retainingWallCMUBlock"
      }
      else if (props.allData.masonry1Type === "stuccoFin") {
        update.masonry1TypeSquareFoot = 15 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "stuccoFin"
      }
      else if (props.allData.masonry1Type === "smoothStucco") {
        update.masonry1TypeSquareFoot = 25 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "smoothStucco"
      }
      else if (props.allData.masonry1Type === "standardPavers") {
        update.masonry1TypeSquareFoot = 12 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "standardPavers"
      }
      else if (props.allData.masonry1Type === "travertine") {
        update.masonry1TypeSquareFoot = 22 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "travertine"
      }
      else if (props.allData.masonry1Type === "concretePadTurf") {
        update.masonry1TypeSquareFoot = 15 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "concretePadTurf"
      }
      else if (props.allData.masonry1Type === "concreteStepPad") {
        update.masonry1TypeSquareFoot = 8 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "concreteStepPad"
      }
      else if (props.allData.masonry1Type === "trexLPE") {
        update.masonry1TypeSquareFoot = 42 * props.allData.masonry1TypeSquareFoot
        update.masonry1Type = "trexLPE"
      }
      else {
        update.masonry1TypeSquareFoot = 0
      }
    }

    if (props.allData.masonryCleanup) {
      update.masonryCleanup = 1000
    }
    else {
      update.masonryCleanup = 0
    }


    if (props.allData.plasterType && props.allData.plasterLength) {
      if (props.allData.plasterType === "white") {
        update.plasterLength = 24 * props.allData.plasterLength
        update.plasterType = "white"
      }
      else if (props.allData.plasterType === "miniPebble") {
        update.plasterLength = 45 * props.allData.plasterLength
        update.plasterType = "miniPebble"

      }
      else if (props.allData.plasterType === "microPebble") {
        update.plasterLength = 57 * props.allData.plasterLength
        update.plasterType = "microPebble"

      }
      else if (props.allData.plasterType === "microFusion") {
        update.plasterLength = 67 * props.allData.plasterLength
        update.plasterType = "microFusion"

      }
      else if (props.allData.plasterType === "polishScapes") {
        update.plasterLength = 110 * props.allData.plasterLength
        update.plasterType = "polishScapes"

      }
      else {
        update.plasterLength = 0
      }
    }


    if (props.allData.bagsOfGlass) {
      update.bagsOfGlass = 350 * props.allData.bagsOfGlass
    }
    else {
      update.bagsOfGlass = 0
    }

    if (props.allData.bagsOfAbalone) {
      update.bagsOfAbalone = 350 * props.allData.bagsOfAbalone
    }
    else {
      update.bagsOfAbalone = 0
    }

    if (props.allData.bagsOfAbalone) {
      update.bagsOfAbalone = 350 * props.allData.bagsOfAbalone
    }
    else {
      update.bagsOfAbalone = 0
    }

    if (props.allData.plasterStartUp) {
      update.plasterStartUp = 375
    }
    else {
      update.plasterStartUp = 0
    }

    if (props.allData.plasterMastic) {
      update.plasterMastic = 250
    }
    else {
      update.plasterMastic = 0
    }

    // ADDITIONS
    if (props.allData.manualIgnitionFireBowl) {
      update.manualIgnitionFireBowl = 1000 * props.allData.manualIgnitionFireBowl
    }
    else {
      update.manualIgnitionFireBowl = 0
    }

    if (props.allData.electronicIgnitionFireBowl) {
      update.electronicIgnitionFireBowl = 1500 * props.allData.electronicIgnitionFireBowl
    }
    else {
      update.electronicIgnitionFireBowl = 0
    }

    if (props.allData.sheerDecent) {
      update.sheerDecent = 1000 * props.allData.sheerDecent
    }
    else {
      update.sheerDecent = 0
    }

    if (props.allData.sheerDecentPumps) {
      update.sheerDecentPumps = 1150 * props.allData.sheerDecentPumps
    }
    else {
      update.sheerDecentPumps = 0
    }

    if (props.allData.barbecues) {
      update.barbecues = 1000 * props.allData.barbecues
    }
    else {
      update.barbecues = 0
    }



    return update;
  }

  // UPDATING TOTALS
  componentDidUpdate(prevProps, prevState) {
    // GENERAL
    let general = this.state.plans + this.state.engineering
    if (general !== this.state.generalTotal) {
      this.setState({
        generalTotal: general
      })
    }

    // EXCAVATION
    let excavation = this.state.excavationDemo + this.state.excavationSod + this.state.excavationConcreteDemo + this.state.excavationGrading + this.state.excavationDeepRamp + this.state.excavationRockArea + this.state.excavationDayOfDig + this.state.excavationSteelSquareFoot
    if (excavation !== this.state.excavationTotal) {
      this.setState({
        excavationTotal: excavation
      })
    }

    // PLUMBING AND ELECTRICAL
    let plumbElect = this.state.plumbingLength + this.state.gasLength + this.state.electricalLength + this.state.stubsOutlets + this.state.dedicatedSuction + this.state.bondingWire + this.state.sawCut
    if (plumbElect !== this.state.plumbElectTotal) {
      this.setState({
        plumbElectTotal: plumbElect
      })
    }

    // SHOTCRETE
    let shotcrete = this.state.deputyInspection
    if (shotcrete !== this.state.shotcreteTotal) {
      this.setState({
        shotcreteTotal: shotcrete
      })
    }

    // MASONRY
    let masonry = this.state.tileCoping + this.state.doubleBullnose + this.state.deckingSquareFoot + this.state.masonry1TypeSquareFoot + this.state.masonryCleanup + this.state.bagsOfGlass + this.state.bagsOfAbalone + this.state.plasterStartUp + this.state.plasterMastic
    if (masonry !== this.state.masonryTotal) {
      this.setState({
        masonryTotal: masonry
      })
    }

    //ADDITIONS
    let additions = this.state.manualIgnitionFireBowl + this.state.electronicIgnitionFireBowl + this.state.sheerDecent + this.state.sheerDecentPumps + this.state.barbecues
    if (additions !== this.state.additionsTotal) {
      this.setState({
        additionsTotal: additions
      })
    }

    // GRAND TOTAL
    let grand = this.state.generalTotal + this.state.excavationTotal + this.state.plumbElectTotal + this.state.shotcreteTotal + this.state.masonryTotal + this.state.additionsTotal
    if (grand !== this.state.grandTotal) {
      this.setState({
        grandTotal: grand
      })
    }

  }

  handleSubmitForm() {
    console.log("SUBMITTING")
    const data = this.state
    console.log(data)

    axios
      .post('api/mailer', data)
      .then(res => console.log("CLIENT POST COMPLETE: ", res))
      .catch(err => console.log("CLIENT POST ERROR: ", err))

  }



  // calculateGeneralTotals = () => {

  // }



  render(props) {
    // this.calculateGeneralTotals()
    // console.log(this.state)
    return (
      <div className='totals-mainWrapper'>
        <div className='totals-container'>
          <p>General: ${this.state.generalTotal}</p>
          <p>Excavation: ${this.state.excavationTotal}</p>
          <p>Plumbing and Electrical: ${this.state.plumbElectTotal}</p>
          <p>Shotcrete: ${this.state.shotcreteTotal}</p>
          <p>Masonry: ${this.state.masonryTotal}</p>
          <p>Additions: ${this.state.additionsTotal}</p>
          <p>Grand Total: ${this.state.grandTotal}</p>
        </div>
        <div className=''>
          <Button outline color="primary" onClick={this.handleSubmitForm}>Submit</Button>
        </div>
      </div>
    )
  }
}
