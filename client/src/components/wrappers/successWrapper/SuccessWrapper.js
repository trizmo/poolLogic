import React from "react";
import Totals from "./../../root/totals/TotalPrintable-NEW";
// CSS
// import "./successWrapper.css";
import "./index.css";
export default class SuccessWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    let data = localStorage.getItem("poolData");
    if (data !== null) {
      console.log(JSON.parse(data));
      this.setState({
        data: JSON.parse(data),
      });
    }
  }

  render() {
    const { data } = this.state;
    if (data == null) {
      return <div>Loading...</div>;
    } else {
      const {
        clientName,
        address1,
        sheerDecentRuns,
        barbecues,
        manualIgnitionFireBowl,
        manualIgnitionFireBowlEstimate,
        plasterMastic,
        electronicIgnitionFireBowl,
        sheerDecent,
        bondingWire,
        sheerDecentPumps,
        city,
        plasterStartUp,
        state,
        zipCode,
        plans,
        engineering,
        equipment,
        projectManager,
        poolLength,
        poolWidth,
        poolAveDepth,
        spaLength,
        spaWidth,
        spaPerimeter,
        poolPerimeter,
        poolArea,
        spaArea,
        spaAveDepth,
        excavationZone,
        excavationDemo,
        excavationSod,
        excavationGrading,
        excavationGradingEstimate,
        excavationSteelLocation,
        excavationSteelSquareFoot,
        excavationSteelSquareFootEstimate,
        plumbingLengthEstimate,
        stuccoFinEstimate,
        plumbingLength,
        gasLength,
        gasLengthEstimate,
        electricalLength,
        electricalLengthEstimate,
        dedicatedSuction,
        sawCut,
        rbbStone,
        rbbStoneEstimate,
        deputyInspection,
        shotcreteLocation,
        shotcreteTotal,
        tileCoping,
        tileCopingEstimate,
        deckingType,
        masonryRetainingWall,
        masonryRetainingWallEstimate,
        masonryCMUWall,
        masonryCMUWallEstimate,
        masonryCleanup,
        plasterType,
        plasterLength,
        plasterLengthEstimate,
        standardPaversEstimate,
        smoothStuccoEstimate,
        standardPavers,
        travertineEstimate,
        concretePadTurfEstimate,
        concreteStepPadEstimate,
        trexLPEEstimate,
        deckingSquareFoot,
        deckingSquareFootEstimate,
        electronicIgnitionFireBowlEstimate,
        sheerDecentEstimate,
        sheerDecentPumpsEstimate,
        sheerDecentRunsEstimate,
        barbecuesEstimate,
      } = data;

      return (
        <React.Fragment>
          <div className='successWrapper'>
            <div className='successWrapper-header'>
              <div className='successWrapper-header-name'>
                <h3>Pool Logic LA - Estimate Sheet</h3>
              </div>
              <div className='successWrapper-header-client'>
                <p>Client: {clientName}</p>
                <p>Address: {address1}</p>
                <p>
                  {city} {state} {zipCode}
                </p>
              </div>
            </div>

            <div className='successWrapper-information'>
              <div className='successWrapper-information-left-container'>
                <p className='flex-item'>
                  PM: ${projectManager ? projectManager.toFixed(2) : 0}
                </p>
                <p>Plans: ${plans ? plans : 0} </p>
                <p>
                  <span className='child1'>
                    {" "}
                    Engineering: ${engineering ? engineering.toFixed(2) : 0}{" "}
                  </span>{" "}
                  {/* <span className='child2'>(SIZE_________)</span>{" "} */}
                </p>

                <div className='left-inner-container'>
                  <p className='zero-margin'>Zone: ${excavationZone ? excavationZone.toFixed(2) : 0}</p>
                  <p className='zero-margin'>
                    Demo: ${excavationDemo ? excavationDemo.toFixed(2) : 0} {" "}
                    (#Loads: {excavationDemo ? excavationDemo : 0})
                  </p>
                  <p className='zero-margin'>
                    Sod: ${excavationSod ? excavationSod.toFixed(2) : 0} {" "}
                    (#Loads:{excavationSod ? excavationSod : 0})
                  </p>
                  <p className='zero-margin'>
                    Grading: ${excavationGradingEstimate ? <strong>{excavationGradingEstimate.toFixed(2)}</strong> : 0} {" "}
                     (#Loads: {excavationGrading ? excavationGrading : 0} )
                  </p>
                </div>
                <p>
                  Steel: ${excavationSteelSquareFootEstimate ? excavationSteelSquareFootEstimate.toFixed(2) : 0} {" "}
                  (SF :{" "}{excavationSteelSquareFoot ? excavationSteelSquareFoot : 0})
                </p>
                <p>Equipment: ${equipment ? equipment : 0}</p>
                <p>Plumbing/Electrical:</p>
                <div className='left-inner-container'>
                  <p className='zero-margin'>
                    <span className='child1 zero-margin'>
                      {" "}
                      Plumbing: ${plumbingLengthEstimate ? plumbingLengthEstimate.toFixed(2) : 0}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{plumbingLength ? plumbingLength : 0})
                    </span>{" "}
                  </p>
                  <p className='zero-margin'>
                    <span className='child1 zero-margin'>
                      {" "}
                      Electrical Run: ${electricalLengthEstimate ? electricalLengthEstimate.toFixed(2) : 0}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{electricalLength ? electricalLength : 0})
                    </span>{" "}
                  </p>
                  <p className='zero-margin'>
                    <span className='child1 zero-margin'>
                      {" "}
                      Gas Run: ${gasLengthEstimate ? gasLengthEstimate.toFixed(2) : 0}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{gasLength ? gasLength : 0})
                    </span>{" "}
                  </p>
                  <p className='zero-margin'>
                    Ded. Suction: ${dedicatedSuction ? dedicatedSuction : 0}
                  </p>
                  <p className='zero-margin'>Saw Cut:{sawCut ? sawCut : 0}</p>
                </div>
                <p>
                  <span className='child1'>
                    {" "}
                    Retaining Wall: ${masonryRetainingWall ? masonryRetainingWallEstimate : 0}
                  </span>{" "}
                  <span className='child2'>
                    (LF : {masonryRetainingWall ? masonryRetainingWall : 0}
                    )
                  </span>{" "}
                </p>
                <p>
                  <span className='child1'>
                    {" "}
                    CMU Wall: {masonryCMUWall ? masonryCMUWallEstimate.toFixed(2) : 0}{" "}
                  </span>{" "}
                  <span className='child2'>
                    (LF : {masonryCMUWall ? masonryCMUWall : 0})
                  </span>{" "}
                </p>
                <p>
                  <span className='child1'>
                    {" "}
                    Deputy Inspection: ${deputyInspection ? deputyInspection.toFixed(2) : 0}{" "}
                  </span>{" "}
                  {/* <span className='child2'>(LF_________)</span>{" "} */}
                </p>
                <p>
                  Shotcrete: ${shotcreteTotal ? shotcreteTotal.toFixed(2) : 0}
                </p>
                <p>Masonry:</p>
                <div className='left-inner-container'>
                  <p className='zero-margin'>Tile & Coping : {tileCoping ? tileCopingEstimate.toFixed(2) : 0}</p>
                  <p className='zero-margin'>
                    <span className='child1'> Steps: ________ </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p className='zero-margin'>
                    {rbbStone ? <React.Fragment><span className='child1'> RBB: ${rbbStoneEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {rbbStone})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {stuccoFinEstimate ? <React.Fragment><span className='child1'> Stucco Finish: ${stuccoFinEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {stuccoFinEstimate})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {smoothStuccoEstimate ? <React.Fragment><span className='child1'> Smooth Stucco: ${smoothStuccoEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {smoothStuccoEstimate})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {standardPavers ? <React.Fragment><span className='child1'> Standard Pavers: ${standardPaversEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {standardPavers})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {travertineEstimate ? <React.Fragment><span className='child1'> Travertine or Tile Floor or Flagstone with Concrete Base: ${travertineEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {travertineEstimate})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {concretePadTurfEstimate ? <React.Fragment><span className='child1'> Concrete Pad and Turf Ribbons: ${concretePadTurfEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {concretePadTurfEstimate})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {concreteStepPadEstimate ? <React.Fragment><span className='child1'> Concrete Stepping Pads: ${concreteStepPadEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {concreteStepPadEstimate})</span>{" "} </React.Fragment> : null}
                  </p>
                  <p className='zero-margin'>
                    {trexLPEEstimate ? <React.Fragment><span className='child1'> Trex or LPE: ${trexLPEEstimate.toFixed(2)} </span> {" "} <span className='child2'>(LF: {trexLPEEstimate})</span>{" "} </React.Fragment> : null}
                  </p>

                  <p>Spa Finish: ___________</p>
                </div>
                <p>Clean Up: ${masonryCleanup ? masonryCleanup.toFixed(2) : 0}</p>
                <p>Decking: ${deckingSquareFoot ? deckingSquareFootEstimate.toFixed(2) : 0}</p>
                <div className='left-inner-container'>
                  <p className='zero-margin'>
                    <span className='child1'>
                      {" "}
                      Deck: {deckingType ? deckingType : "NULL"}{" "}
                    </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p className='zero-margin'>
                    <span className='child1'> Drains: ________ </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p className='zero-margin'>Bonding Wire: ${bondingWire ? bondingWire : 0}</p>
                  <p className='zero-margin'>Mastic: ${plasterMastic ? plasterMastic : 0}</p>
                </div>
                <p>
                  Plaster: {plasterType ? plasterType : "NULL"}: ${plasterLength ? plasterLengthEstimate.toFixed(2) : 0}
                </p>
                <p>Startup: ${plasterStartUp ? plasterStartUp.toFixed() : 0}</p>
              </div>

              <div className='successWrapper-information-right-container'>
                <h5>Pool/Spa Information</h5>
                <div className='right-inner-container'>
                  <p className="zero-margin">Depth: {poolAveDepth} / {spaAveDepth}</p>
                  <p>Length / Width: {poolLength} / {poolWidth}</p>
                  <p className="zero-margin">Pool Area: {poolArea}</p>
                  <p>Perimeter: {poolPerimeter}</p>
                  <p className="zero-margin">Spa Area: {spaArea}</p>
                  <p>Spa Perimeter: {spaPerimeter}</p>
                  <p className="zero-margin">Total Area: {parseFloat(poolArea) + parseFloat(spaArea)}</p>
                  <p>Total Perimeter: {parseFloat(spaPerimeter) + parseFloat(poolPerimeter)}</p>
                </div>

                <p className='text-underline font-bold'>Extras</p>
                <ul>
                  {manualIgnitionFireBowl ? (<li>Manual Ignition Fire Bowl: ${manualIgnitionFireBowlEstimate.toFixed(2)} </li>) : null}
                  {electronicIgnitionFireBowl ? (<li>Electronic Ignition Fire Bowl: ${electronicIgnitionFireBowlEstimate.toFixed(2)} </li>) : null}
                  {sheerDecent ? <li>Sheer Decent: ${sheerDecentEstimate.toFixed(2)} </li> : null}
                  {sheerDecentPumps ? <li>Sheer Decent - Pumps: ${sheerDecentPumpsEstimate.toFixed(2)} </li> : null}
                  {sheerDecentRuns ? <li>Sheer Decent - Runs: ${sheerDecentRunsEstimate.toFixed(2)} </li> : null}
                  {barbecues ? <li>Barbecues: ${barbecuesEstimate.toFixed(2)} </li> : null}
                </ul>

                <Totals allData={data} />
              </div>



            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
