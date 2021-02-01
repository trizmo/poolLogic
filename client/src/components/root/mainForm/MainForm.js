import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// CSS
import "./mainForm.css";

// COMPONENTS
import Totals from "../totals/Totals";
import Review from "../review/Review";

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayReview: false,
      clientName: undefined,
      address1: undefined,
      city: undefined,
      state: undefined,
      zipCode: undefined,
      poolArea: undefined,
      spaArea: undefined,
      poolLength: undefined,
      poolWidth: undefined,
      poolAveDepth: undefined,
      spaLength: undefined,
      spaWidth: undefined,
      spaAveDepth: undefined,
      poolPerimeter: undefined,
      spaPerimeter: undefined,
      projectManager: false,
      plans: false,
      engineering: false,
      equipment: undefined,
      excavationMainLocation: undefined,
      excavationMainSquareFoot: undefined,
      excavationZone: undefined,
      excavationDemo: undefined,
      excavationSod: undefined,
      excavationConcreteDemo: undefined,
      excavationGrading: undefined,
      excavationDeepRamp: false,
      excavationRockArea: false,
      excavationDayOfDig: undefined,
      excavationSteelLocation: undefined,
      excavationSteelSquareFoot: undefined,
      plumbingType: undefined,
      plumbingLength: undefined,
      gasLength: undefined,
      electricalLength: undefined,
      stubsOutlets: undefined,
      dedicatedSuction: false,
      bondingWire: false,
      sawCut: false,
      deputyInspection: false,
      shotcreteLocation: undefined,
      shotcretePerimeter: undefined,
      shotcreteAveDepth: undefined,
      shotcreteSurfaceArea: undefined,
      shotcreteCubicYards: undefined,
      tileCoping: undefined,
      doubleBullnose: false,
      deckingType: undefined,
      deckingSquareFoot: undefined,
      masonry1Type: undefined,
      masonryRetainingWall: undefined,
      masonryCMUWall: undefined,
      masonryCleanup: false,
      plasterType: undefined,
      plasterLength: undefined,
      bagsOfGlass: undefined,
      bagsOfAbalone: undefined,
      plasterStartUp: false,
      plasterMastic: false,
      manualIgnitionFireBowl: undefined,
      electronicIgnitionFireBowl: undefined,
      sheerDecent: undefined,
      sheerDecentPumps: undefined,
      sheerDecentRuns: undefined,
      barbecues: undefined,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.toggleDisplayReview = this.toggleDisplayReview.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name)
    // console.log(event.target.value)

    this.setState({
      [name]: value,
    });
  }

  handleCheckboxChange(event) {
    const name = event.target.name;
    const checked = event.target.checked;
    // console.log(name, checked)

    this.setState({
      [name]: checked,
    });
  }

  handleDropdownChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(event.target.value)
    // console.log(event.target.name)

    this.setState({
      [name]: value,
    });
  }

  toggleDisplayReview() {
    this.setState({
      displayReview: !this.state.displayReview,
    });
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div className='mainForm-wrapper'>
        {this.state.displayReview ? <Review /> : null}
        <div className='mainForm-mainContainer'>
          <div className='mainForm-customerInfo'>
            <Form>
              <FormGroup>
                <Label for='clientName'>Client Name</Label>
                <Input
                  type='name'
                  name='clientName'
                  id='clientName'
                  placeholder='Client First and Last Name'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='address1'>Address</Label>
                <Input
                  type='text'
                  name='address1'
                  id='address1'
                  placeholder="Address"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='city'>City</Label>
                <Input
                  type='text'
                  name='city'
                  id='city'
                  placeholder="City"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='state'>State</Label>
                  <Input
                    type='text'
                    name='state'
                    id='state'
                    placeholder="State"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='zipCode'>Zip Code</Label>
                  <Input
                    type='text'
                    name='zipCode'
                    id='zipCode'
                    placeholder="Zip Code"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </div>
            </Form>
          </div>

          <div className='mainForm-general'>
            <Form>
              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='poolArea'>Pool Area</Label>
                  <Input
                    type='number'
                    name='poolArea'
                    id='poolArea'
                    placeholder="Square Feet"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='poolPerimeter'>Pool Perimeter</Label>
                  <Input
                    type='number'
                    name='poolPerimeter'
                    id='poolPerimeter'
                    placeholder="Linear Feet"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='poolAveDepth'>Pool Average Depth</Label>
                  <Input
                    type='number'
                    name='poolAveDepth'
                    id='poolAveDepth'
                    placeholder="Linear Feet"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </div>

              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='spaArea'>Spa Area</Label>
                  <Input
                    type='number'
                    name='spaArea'
                    id='spaArea'
                    placeholder="Square Feet"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='spaPerimeter'>Spa Perimeter</Label>
                  <Input
                    type='number'
                    name='spaPerimeter'
                    id='spaPerimeter'
                    placeholder="Linear Feet"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='spaAveDepth'>Spa Average Depth</Label>
                  <Input
                    type='number'
                    name='spaAveDepth'
                    id='spaAveDepth'
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </div>

              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='projectManager'>
                    <Input
                      type='checkbox'
                      name='projectManager'
                      id='projectManager'
                      onChange={this.handleCheckboxChange}
                    />
                  Project Manager
                </Label>
                </FormGroup>
                <FormGroup>
                  <Label for='plans'>
                    <Input
                      type='checkbox'
                      name='plans'
                      id='plans'
                      onChange={this.handleCheckboxChange}
                    />{" "}
                  Plans
                </Label>
                </FormGroup>
                <FormGroup>
                  <Label for='engineering'>
                    <Input
                      type='checkbox'
                      name='engineering'
                      id='engineering'
                      onChange={this.handleCheckboxChange}
                    />
                  Engineering
                </Label>
                </FormGroup>
              </div>
            </Form>
          </div>

          <div className='mainForm-excavation'>
            {/* <h3>Excavation</h3> */}

            <Form>

              <FormGroup>
                <Label for='excavationZone'>Excavation Zone</Label>
                <Input
                  type='select'
                  name='excavationZone'
                  id='excavationZone'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Zone</option>
                  <option value={"riversideCounty"}>Riverside County</option>
                  <option value={"inlandEmpire"}>Inland Empire</option>

                  {/* OPEN THESE OPTIONS IF BEING  USED BY OTHER BRANCHES */}
                  {/* <option value={"west605"}>West of 605</option> */}
                  {/* <option value={"westLA"}>West of LA City / OC</option> */}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for='excavationMainLocation'>
                  Excavation Location / Type
                </Label>
                <Input
                  type='select'
                  name='excavationMainLocation'
                  id='excavationMainLocation'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Location / Type</option>
                  <option value={"63access"}>6' 3" access</option>
                  <option value={"mid-size"}>Mid-size 5' 3"</option>
                  <option value={"mini-access"}>Mini access 3' 6"</option>

                  {/* OPEN THESE OPTIONS IF BEING  USED BY OTHER BRANCHES */}
                  {/* <option value={"west605"}>West Of 605 (Base)</option> */}
                  {/* <option value={"west405"}>West of 405 (Base)</option> */}
                </Input>
                {/* <Input type="text" name="excavationMainSquareFoot" id="excavationMainSquareFoot" placeholder="Square Footage" onChange={this.handleInputChange} /> */}
              </FormGroup>

              <FormGroup>
                <Label for='excavationDemo'>Demo</Label>
                <Input
                  type='text'
                  name='excavationDemo'
                  id='excavationDemo'
                  placeholder='Square Footage'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='excavationSod'>Sod / Trash</Label>
                <Input
                  type='text'
                  name='excavationSod'
                  id='excavationSod'
                  placeholder='Total Loads'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='excavationConcreteDemo'>Concrete Demo</Label>
                <Input
                  type='text'
                  name='excavationConcreteDemo'
                  id='excavationConcreteDemo'
                  placeholder='Total Loads'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='excavationGrading'>Grading</Label>
                <Input
                  type='text'
                  name='excavationGrading'
                  id='excavationGrading'
                  placeholder='Total Loads'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='excavationDeepRamp'>
                    <Input
                      type='checkbox'
                      name='excavationDeepRamp'
                      id='excavationDeepRamp'
                      onChange={this.handleCheckboxChange}
                    />
                  Deep-end Ramp
                </Label>
                </FormGroup>
                <FormGroup>
                  <Label for='excavationRockArea'>
                    <Input
                      type='checkbox'
                      name='excavationRockArea'
                      id='excavationRockArea'
                      onChange={this.handleCheckboxChange}
                    />
                  Rock Area - Claremont, Fontana, Upland, Rancho Cucamonga
                </Label>
                </FormGroup>
              </div>

              {/* <FormGroup>
                <Label for="excavationDayOfDig">
                  Day Of Dig - To enlarge Pool
                </Label>
                <Input type="text" name="excavationDayOfDig" id="excavationDayOfDig" placeholder="Square Footage" onChange={this.handleInputChange} />
              </FormGroup> */}
              <FormGroup>
                <Label for='excavationSteelLocation'>Steel</Label>
                <Input
                  type='select'
                  name='excavationSteelLocation'
                  id='excavationSteelLocation'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Location</option>
                  <option value={"riversideCounty"}>Riverside County</option>
                  {/* <option value={"LACounty"}>Los Angeles County</option> */}
                  <option value={"SBCounty"}>San Bernardino County</option>
                  {/* <option value={"OrangeCounty"}>Orange County</option> */}
                  {/* <option value={"LACity"}>Los Angeles CITY</option> */}
                </Input>
                <Input
                  type='text'
                  name='excavationSteelSquareFoot'
                  id='excavationSteelSquareFoot'
                  placeholder='Square Footage'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='equipment'>Equipment</Label>
                <Input
                  type='number'
                  name='equipment'
                  id='equipment'
                  placeholder='Total Amount'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Form>
          </div>

          <div className='mainForm-plumbingElectrical'>
            <h3>Plumbing and Electrical</h3>
            <Form>
              <FormGroup>
                <Label for='plumbing'>Plumbing Type and Linear Feet</Label>
                <Input
                  type='select'
                  name='plumbingType'
                  id='plumbingType'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Type</option>
                  <option value={"poolOnly"}>Pool Only</option>
                  <option value={"poolAndSpa"}>Pool and Spa</option>
                  <option value={"PoolAndSpaRemodel"}>
                    Pool and Spa Remodel
                  </option>
                </Input>
                <Input
                  type='text'
                  name='plumbingLength'
                  id='plumbingLength'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='gasLength'>Gas length</Label>
                <Input
                  type='text'
                  name='gasLength'
                  id='gasLength'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='electricalLength'>Electrical Length</Label>
                <Input
                  type='text'
                  name='electricalLength'
                  id='electricalLength'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='stubsOutlets'>Stubs and Outlets</Label>
                <Input
                  type='text'
                  name='stubsOutlets'
                  id='stubsOutlets'
                  placeholder='Total Stubs/Outlets'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <div className='mainForm-customerInfo-address2'>
                <FormGroup>
                  <Label for='dedicatedSuction'>
                    <Input
                      type='checkbox'
                      name='dedicatedSuction'
                      id='dedicatedSuction'
                      onChange={this.handleCheckboxChange}
                    />
                  Dedicated Suction
                </Label>
                </FormGroup>
                <FormGroup>
                  <Label for='bondingWire'>
                    <Input
                      type='checkbox'
                      name='bondingWire'
                      id='bondingWire'
                      onChange={this.handleCheckboxChange}
                    />
                  Bonding Wire
                </Label>
                </FormGroup>
                <FormGroup>
                  <Label for='sawCut'>
                    <Input
                      type='checkbox'
                      name='sawCut'
                      id='sawCut'
                      onChange={this.handleCheckboxChange}
                    />
                  Sawcut
                </Label>
                </FormGroup>
              </div>


            </Form>
          </div>

          <div className='mainForm-shotcrete'>
            <h3>ShotCrete</h3>
            <Form>
              <FormGroup>
                <Label for='deputyInspection'>
                  <Input
                    type='checkbox'
                    name='deputyInspection'
                    id='deputyInspection'
                    onChange={this.handleCheckboxChange}
                  />
                  Deputy Inspection
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for='shotcreteLocation'>Shotcrete Location</Label>
                <Input
                  type='select'
                  name='shotcreteLocation'
                  id='shotcreteLocation'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Location</option>
                  <option value={"riversideCounty/IE"}>
                    Riverside County / Inland Empire
                  </option>
                  {/* <option value={"losAngeles"}>
                    West of 605 / Los Angeles
                  </option> */}
                </Input>
              </FormGroup>
            </Form>
          </div>

          <div className=''>
            <h3>Masonry</h3>
            <Form>
              <FormGroup>
                <Label for='tileCoping'>Tile and Coping</Label>
                <Input
                  type='text'
                  name='tileCoping'
                  id='tileCoping'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='doubleBullnose'>
                  <Input
                    type='checkbox'
                    name='doubleBullnose'
                    id='doubleBullnose'
                    onChange={this.handleCheckboxChange}
                  />
                  Double Bullnose
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for='decking'>Decking: NG Broom Finish</Label>
                <Input
                  type='number'
                  name='decking'
                  id='decking'
                  onChange={this.handleDropdownChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='color1p'>
                  <Input
                    type='checkbox'
                    name='color1p'
                    id='color1p'
                    onChange={this.handleCheckboxChange}
                  />
                  Color 1% {" "}
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for='acidWash'>
                  <Input
                    type='checkbox'
                    name='acidWash'
                    id='acidWash'
                    onChange={this.handleCheckboxChange}
                  />
                  Acid Wash or Top Cast {" "}
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for='stampSeamless'>
                  <Input
                    type='checkbox'
                    name='stampSeamless'
                    id='stampSeamless'
                    onChange={this.handleCheckboxChange}
                  />
                  Seamless Stamp {" "}
                </Label>
              </FormGroup>

              <FormGroup>
                <Label for='stampPattern'>
                  <Input
                    type='checkbox'
                    name='stampPattern'
                    id='stampPattern'
                    onChange={this.handleCheckboxChange}
                  />
                  Pattern Stamp {" "}
                </Label>
              </FormGroup>

              {/* <option>Select Type</option>
                  <option value={"ngBroomFinish"}>NG Broom Finish</option>
                  <option value={"color1p"}>Color 1%</option>
                  <option value={"acidWash"}>Acid Wash or Top Cast</option>
                  <option value={"stampSeamless"}>Seamless Stamp</option>
                  <option value={"stampPattern"}>Pattern Stamp</option> */}

              {/* <Input
                  type='number'
                  name='deckingSquareFoot'
                  id='deckingSquareFoot'
                  placeholder='Square Footage'
                  onChange={this.handleInputChange}
                /> */}


              {/* EVEYTHING BELOW SHOULD BE IT'S OWN INPUT */}
              {/* <FormGroup>
                <Label for='masonry1'>Masonry1</Label>
                <Input
                  type='select'
                  name='masonry1Type'
                  id='masonry1Type'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Type</option>
                  <option value={"rbbStone"}>RBB Stone or Tile</option>
                  <option value={"retainingWallCMUBlock"}>
                    Retaining Wall CMU Block, No Caps (3' and under)
                  </option>
                  <option value={"stuccoFin"}>Stucco Finish</option>
                  <option value={"smoothStucco"}>Smooth Stucco</option>
                  <option value={"standardPavers"}>Standard Pavers</option>
                  <option value={"travertine"}>
                    Travertine or Tile Floor or Flagstone with Concrete Base
                  </option>
                  <option value={"concretePadTurf"}>
                    Concrete Pad and Turf Ribbons
                  </option>
                  <option value={"concreteStepPad"}>
                    Concrete Stepping Pads
                  </option>
                  <option value={"trexLPE"}>Trex or LPE</option>
                </Input>
                <Input
                  type='text'
                  name='masonry1TypeSquareFoot'
                  id='masonry1TypeSquareFoot'
                  placeholder='Square Footage'
                  onChange={this.handleInputChange}
                />
              </FormGroup> */}

              <FormGroup>
                <Label for='rbbStone'>RBB Stone or Tile</Label>
                <Input
                  type='number'
                  name='rbbStone'
                  id='rbbStone'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='retainingWallCMUBlock'>Retaining Wall CMU Block, No Caps (3' and under)</Label>
                <Input
                  type='number'
                  name='retainingWallCMUBlock'
                  id='retainingWallCMUBlock'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='stuccoFin'>Stucco Finish</Label>
                <Input
                  type='number'
                  name='stuccoFin'
                  id='stuccoFin'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='smoothStucco'>Smooth Stucco</Label>
                <Input
                  type='number'
                  name='smoothStucco'
                  id='smoothStucco'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='standardPavers'>Standard Pavers</Label>
                <Input
                  type='number'
                  name='standardPavers'
                  id='standardPavers'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='travertine'>Travertine or Tile Floor or Flagstone with Concrete Base</Label>
                <Input
                  type='number'
                  name='travertine'
                  id='travertine'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='concretePadTurf'>Concrete Pad and Turf Ribbons</Label>
                <Input
                  type='number'
                  name='concretePadTurf'
                  id='concretePadTurf'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='concreteStepPad'>Concrete Stepping Pads</Label>
                <Input
                  type='number'
                  name='concreteStepPad'
                  id='concreteStepPad'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='trexLPE'>Trex or LPE</Label>
                <Input
                  type='number'
                  name='trexLPE'
                  id='trexLPE'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='masonryRetainingWall'>Retaining Wall</Label>
                <Input
                  type='text'
                  name='masonryRetainingWall'
                  id='masonryRetainingWall'
                  placeholder='Square Footage'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='masonryCMUWall'>CMU Wall</Label>
                <Input
                  type='text'
                  name='masonryCMUWall'
                  id='masonryCMUWall'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for='masonryCleanup'>
                  <Input
                    type='checkbox'
                    name='masonryCleanup'
                    id='masonryCleanup'
                    onChange={this.handleCheckboxChange}
                  />
                  Clean Up
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for='plaster'>Plaster</Label>
                <Input
                  type='select'
                  name='plasterType'
                  id='plasterType'
                  onChange={this.handleDropdownChange}
                >
                  <option>Select Type</option>
                  <option value={"white"}>White</option>
                  <option value={"miniPebble"}>
                    Mini Pebble (Except White)
                  </option>
                  <option value={"microPebble"}>Micro Pebble</option>
                  <option value={"microFusion"}>Micro Fusion</option>
                  <option value={"polishScapes"}>PolishScapes</option>
                </Input>
                <Input
                  type='text'
                  name='plasterLength'
                  id='plasterLength'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='bagsOfGlass'>Bags of Glass</Label>
                <Input
                  type='input'
                  name='bagsOfGlass'
                  id='bagsOfGlass'
                  placeholder='Total Bags'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='bagsOfAbalone'>Bags of Abalone</Label>
                <Input
                  type='input'
                  name='bagsOfAbalone'
                  id='bagsOfAbalone'
                  placeholder='Total Bags'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='plasterStartUp'>
                  <Input
                    type='checkbox'
                    name='plasterStartUp'
                    id='plasterStartUp'
                    onChange={this.handleCheckboxChange}
                  />
                  Start Up
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for='plasterMastic'>
                  <Input
                    type='checkbox'
                    name='plasterMastic'
                    id='plasterMastic'
                    onChange={this.handleCheckboxChange}
                  />
                  Mastic
                </Label>
              </FormGroup>
            </Form>
          </div>
          <div className='mainForm-Additions'>
            <h3>Additions</h3>
            <Form>
              <FormGroup>
                <Label for='manualIgnitionFireBowl'>
                  Firebowl - Manual Ignition
                </Label>
                <Input
                  type='text'
                  name='manualIgnitionFireBowl'
                  id='manualIgnitionFireBowl'
                  placeholder='Total Bowls'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='electronicIgnitionFireBowl'>
                  Firebowl - Electronic Ignition
                </Label>
                <Input
                  type='text'
                  name='electronicIgnitionFireBowl'
                  id='electronicIgnitionFireBowl'
                  placeholder='Total Bowls'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='sheerDecent'>Sheer Decent</Label>
                <Input
                  type='text'
                  name='sheerDecent'
                  id='sheerDecent'
                  placeholder='Total Sheer Decents'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='sheerDecentPumps'>Sheer Decent - Pumps</Label>
                <Input
                  type='text'
                  name='sheerDecentPumps'
                  id='sheerDecentPumps'
                  placeholder='Total Pumps'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='sheerDecentRuns'>Sheer Decent - Runs</Label>
                <Input
                  type='text'
                  name='sheerDecentRuns'
                  id='sheerDecentRuns'
                  placeholder='Total Runs'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='barbecues'>Barbecues</Label>
                <Input
                  type='text'
                  name='barbecues'
                  id='barbecues'
                  placeholder='Linear Feet'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Form>
          </div>
          <div className='mainForm-Notes'>
            <h3>Additional Notes</h3>
            <p>Step Lights: Have client go through landscaper</p>
            <p>Showers: Send Hank for Estimates</p>
            <p>
              Pool Covers: $13,000 for 15 x 30. For oversized have client call
              Pool Cover Specialist for pricing
            </p>
            <ol>
              Patio Covers
              <li>
                Get quote from Elly Ramose: 714-296-8788 (New Generation
                Construction)
              </li>
              <li>Pergolas: JSM Drywall - Jeff Martija: 626-780-3394</li>
            </ol>
          </div>
        </div>
        <div className='totals-wrapper'>
          <Totals
            allData={this.state}
            toggleDisplayReview={this.toggleDisplayReview}
            poolData={this.props.poolData}
            updatePoolData={this.props.updatePoolData}
          />
        </div>
      </div>
    );
  }
}
