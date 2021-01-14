import React from "react";
import Totals from "./../../root/totals/TotalPrintable";
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
        projectManager,
        poolLength,
        poolWidth,
        poolAveDepth,
        spaLength,
        spaWidth,
        spaAveDepth,
        excavationZone,
        excavationDemo,
        excavationSod,
        excavationGrading,
        excavationSteelLocation,
        excavationSteelSquareFoot,
        plumbingType,
        plumbingLength,
        gasLength,
        electricalLength,
        dedicatedSuction,
        sawCut,
        deputyInspection,
        shotcreteLocation,
        tileCoping,
        deckingType,
        masonryRetainingWall,
        masonryCMUWall,
        masonryCleanup,
        plasterType,
        plasterLength,
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
                  PM: {projectManager ? "TRUE" : "NULL"}
                </p>
                <p>Plans: {plans ? "TRUE" : "NULL"} </p>
                <p>
                  <span className='child1'>
                    {" "}
                    Engineering: {engineering ? "TRUE" : "NULL"}{" "}
                  </span>{" "}
                  {/* <span className='child2'>(SIZE_________)</span>{" "} */}
                </p>

                <div className='left-inner-container'>
                  <p>Zone :{excavationZone ? excavationZone : "NULL"}</p>
                  <p>
                    Demo :{excavationDemo ? "TRUE" : "NULL"}
                    (#Loads: {excavationDemo ? excavationDemo : "NULL"})
                  </p>
                  <p>
                    Sod : {excavationSod ? "TRUE" : "NULL"}
                    (#Loads:{excavationSod ? excavationSod : "NULL"})
                  </p>
                  <p>
                    Grading :{excavationGrading ? "TRUE" : "NULL"} (#Loads:
                    {excavationGrading ? excavationGrading : "NULL"} )
                  </p>
                </div>
                <p>
                  Steel:
                  {excavationSteelLocation
                    ? excavationSteelLocation
                    : "Null"}{" "}
                  :(SF :{" "}
                  {excavationSteelSquareFoot
                    ? excavationSteelSquareFoot
                    : "NULL"}
                  )
                </p>
                <p>Equipment:___________</p>
                <p>Plumbing/Electrical:</p>
                <div className='left-inner-container'>
                  <p>
                    <span className='child1'>
                      {" "}
                      Plumbing: {plumbingType ? plumbingType : "NULL"}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{plumbingLength ? plumbingLength : "NULL"})
                    </span>{" "}
                  </p>
                  <p>
                    <span className='child1'>
                      {" "}
                      Electrical Run: {electricalLength ? "TRUE" : "NULL"}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{electricalLength ? electricalLength : "NULL"})
                    </span>{" "}
                  </p>
                  <p>
                    <span className='child1'>
                      {" "}
                      Gas Run: {gasLength ? "TRUE" : "NULL"}{" "}
                    </span>{" "}
                    <span className='child2'>
                      (LF :{gasLength ? gasLength : "NULL"})
                    </span>{" "}
                  </p>
                  <p>
                    Ded. Suction:{dedicatedSuction ? dedicatedSuction : "NULL"}
                  </p>
                  <p>Saw Cut:{sawCut ? sawCut : "NULL"}</p>
                </div>
                <p>
                  <span className='child1'>
                    {" "}
                    Retaining Wall: {masonryRetainingWall ? "TRUE" : "NULL"}
                  </span>{" "}
                  <span className='child2'>
                    (LF : {masonryRetainingWall ? masonryRetainingWall : "NULL"}
                    )
                  </span>{" "}
                </p>
                <p>
                  <span className='child1'>
                    {" "}
                    CMU Wall: {masonryCMUWall ? "TRUE" : "NULL"}{" "}
                  </span>{" "}
                  <span className='child2'>
                    (LF : {masonryCMUWall ? masonryCMUWall : "NULL"})
                  </span>{" "}
                </p>
                <p>
                  <span className='child1'>
                    {" "}
                    Deputy Inspection: {deputyInspection ? "TRUE" : "NULL"}{" "}
                  </span>{" "}
                  {/* <span className='child2'>(LF_________)</span>{" "} */}
                </p>
                <p>
                  Short Crate:{shotcreteLocation ? shotcreteLocation : "NULL"}
                </p>
                <p>Masonry:</p>
                <div className='left-inner-container'>
                  <p>Tile & Coping : {tileCoping ? tileCoping : "NULL"}</p>
                  <p>
                    <span className='child1'> Steps: ________ </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p>
                    <span className='child1'> RBB: ________ </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p>Spa Finish: ___________</p>
                </div>
                <p>Clean Up: {masonryCleanup ? "TRUE" : "NULL"}</p>
                <p>Docking: ___________</p>
                <div className='left-inner-container'>
                  <p>
                    <span className='child1'>
                      {" "}
                      Deck: {deckingType ? deckingType : "NULL"}{" "}
                    </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p>
                    <span className='child1'> Drains: ________ </span>{" "}
                    <span className='child2'>(LF_________)</span>{" "}
                  </p>
                  <p>Bonding Wire: {bondingWire ? "TRUE" : "NULL"}</p>
                  <p>Mastic:{plasterMastic ? "TRUE" : "NULL"}</p>
                </div>
                <p>
                  Plaster: {plasterType ? plasterType : "NULL"} (
                  {plasterLength ? plasterLength : "NULL"})
                </p>
                <p>Startup: {plasterStartUp ? "TRUE" : "NULL"}</p>
              </div>

              <div className='successWrapper-information-right-container'>
                <h5>Pool/Spa Information</h5>
                <div className='right-inner-container'>
                  <p>Depth: {poolAveDepth}</p>
                  <p>
                    Length / Width: {poolLength} / {poolWidth}
                  </p>
                  <p>Area: {poolLength * poolWidth}</p>
                  <p>Perimeter: {2 * poolLength + 2 * poolWidth}</p>
                  <p>-----------</p>
                  <p>Area: {spaLength * spaWidth}</p>
                  <p>Perimeter: {2 * spaLength + 2 * spaWidth}</p>
                  <p>-----------</p>
                  <p>Area: {spaLength * spaWidth + poolLength * poolWidth}</p>
                  <p>
                    Perimeter:{" "}
                    {2 * spaLength +
                      2 * spaWidth +
                      (2 * poolLength + 2 * poolWidth)}
                  </p>
                </div>
                <p className='text-underline font-bold'>Extras</p>
                <ul>
                  {manualIgnitionFireBowl ? (
                    <li>{manualIgnitionFireBowl} </li>
                  ) : null}
                  {electronicIgnitionFireBowl ? (
                    <li>{electronicIgnitionFireBowl} </li>
                  ) : null}
                  {sheerDecent ? <li>{sheerDecent} </li> : null}
                  {sheerDecentPumps ? <li>{sheerDecentPumps} </li> : null}
                  {sheerDecentRuns ? <li>{sheerDecentRuns} </li> : null}
                  {barbecues ? <li>{barbecues} </li> : null}
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
