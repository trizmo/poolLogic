import React, { Component } from "react";
// import { Button } from "reactstrap";
// import axios from "axios";

// CSS
import "./totals.css";

export default class Totals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profit: this.props.allData.profit,
      subtotal: this.props.allData.subtotal,
      grandTotal: this.props.allData.grandTotal,
    };

  }

  render() {

    return (
      <>
        <p className='font-bold'>
          Sub Total: ${parseFloat(this.state.subtotal).toFixed(2)}        </p>
        <p className='font-bold'>
          Profit: ${parseFloat(this.state.profit).toFixed(2)}        </p>
        <p className='font-bold'>
          Grand Total: ${parseFloat(this.state.grandTotal).toFixed(2)}        </p>
      </>

    );
  }
}
