import React, { Component } from 'react'

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalTotal: 0,
      excavationTotal: 0,
      plumbElectTotal: 0,
      shotcreteTotal: 0,
      masonryTotal: 0,
      additionsTotal: 0,
      grandTotal: 0,
    };
  }

  calculateGeneralTotals() {
    console.log("running totals")
    if (this.props.allData.plans) {
      let general = this.state.generalTotal
      let plans = 400
      general = general + plans
      this.setState({
        generalTotal: general
      }, () => console.log(this.state.generalTotal))
    }
  }

  render(props) {
    // this.calculateGeneralTotals()
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
