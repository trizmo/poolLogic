import React, { Component } from 'react'

// CSS
import './totals.css'

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: 0,
      engineering: 0,
      excavationZone: 0,
      excavationDemo: 0,
      excavationSod: 0,
      excavationConcreteDemo: 0,
      excavationGrading: 0,
      excavationDeepRamp: 0,
      excavationRockArea: 0,
      excavationDayOfDig: 0,
      excavationSteelSquareFoot: 0,
      generalTotal: 0,
      excavationTotal: 0,
      plumbElectTotal: 0,
      shotcreteTotal: 0,
      masonryTotal: 0,
      additionsTotal: 0,
      grandTotal: 0,
    };
    this.calculateGeneralTotals = this.calculateGeneralTotals.bind(this)
  }


  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: ", props.allData.engineering)
    let update = {}

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




    return update;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    let general = this.state.plans + this.state.engineering
    if (general !== this.state.generalTotal) {
      this.setState({
        generalTotal: general
      })
    }

    let excavation = this.state.excavationZone + this.state.excavationDemo + this.state.excavationSod + this.state.excavationConcreteDemo + this.state.excavationGrading + this.state.excavationDeepRamp + this.state.excavationRockArea + this.state.excavationDayOfDig + this.state.excavationSteelSquareFoot

    if (excavation !== this.state.excavationTotal) {
      this.setState({
        excavationTotal: excavation
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
