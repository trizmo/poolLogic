import React, { Component } from 'react'

// CSS
import './totals.css'

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // GENERAL
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
      shotcreteTotal: 0,

      // MASONRY TOTAL
      masonryTotal: 0,

      // ADDITIONAL TOTAL
      additionsTotal: 0,
      grandTotal: 0,
    };
    this.calculateGeneralTotals = this.calculateGeneralTotals.bind(this)
  }


  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: ", props.allData.engineering)
    let update = {}


    // GENERAL
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
    }
    else if (props.allData.excavationZone === "inlandEmpire") {
      update.excavationZone = 1600
    }
    else if (props.allData.excavationZone === "west605") {
      update.excavationZone = 2000
    }
    else if (props.allData.excavationZone === "westLA") {
      update.excavationZone = 2500
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
      }
      else if (props.allData.excavationSteelLocation === "LACity") {
        update.excavationSteelSquareFoot = 25 * props.allData.excavationSteelSquareFoot
      }
      else {
        update.excavationSteelSquareFoot = 0
      }
    }

    // PLUMBING AND ELECTRICAL
    if (props.allData.plumbingType && props.allData.plumbingLength) {
      if (props.allData.plumbingType === "poolOnly") {
        update.plumbingLength = 3000 + (30 * props.allData.plumbingLength)
      }
      else if (props.allData.plumbingType === "poolAndSpa") {
        update.plumbingLength = 4000 + (30 * props.allData.plumbingLength)
      }
      else if (props.allData.plumbingType === "PoolAndSpaRemodel") {
        update.plumbingLength = 5000 + (0 * props.allData.plumbingLength)
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
    let excavation = this.state.excavationZone + this.state.excavationDemo + this.state.excavationSod + this.state.excavationConcreteDemo + this.state.excavationGrading + this.state.excavationDeepRamp + this.state.excavationRockArea + this.state.excavationDayOfDig + this.state.excavationSteelSquareFoot
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

    // GRAND TOTAL
    let grand = this.state.generalTotal + this.state.excavationTotal + this.state.plumbElectTotal
    if (grand !== this.state.grandTotal) {
      this.setState({
        grandTotal: grand
      })
    }

  }



  calculateGeneralTotals = () => {

  }



  render(props) {
    // this.calculateGeneralTotals()
    console.log(this.state)
    return (
      <div className='totals-wrapper'>
        <div className='totals-container'>
          <p>General: ${this.state.generalTotal}</p>
          <p>Excavation: ${this.state.excavationTotal}</p>
          <p>Plumbing and Electrical: ${this.state.plumbElectTotal}</p>
          <p>Shotcrete: ${this.state.shotcreteTotal}</p>
          <p>Masonry: ${this.state.masonryTotal}</p>
          <p>Additions: ${this.state.additionsTotal}</p>
          <p>Grand Total: ${this.state.grandTotal}</p>
        </div>
      </div>
    )
  }
}
