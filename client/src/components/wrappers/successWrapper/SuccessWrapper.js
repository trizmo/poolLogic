import React from 'react'

// CSS
import './successWrapper.css'

export default function SuccessWrapper(props) {
  const data = localStorage.getItem("poolData")
  // const poolData = JSON.parse(data)
  console.log(data)
  // console.log(JSON.parse(poolData))

  const { clientName, address1, city, state, zipCode, plans, engineering, projectManager, poolLength, poolWidth, poolAveDepth, spaLength, spaWidth, spaAveDepth } = JSON.parse(data)

  return (
    <div className="successWrapper">
      <div className='successWrapper-header'>
        <div className='successWrapper-header-name'>
          <h3>Pool Logic LA - Estimate Sheet</h3>
        </div>
        <div className='successWrapper-header-client'>
          <p>Client: {clientName}</p>
          <p>Address: {address1}</p>
          <p>{city} {state} {zipCode}</p>
        </div>
      </div>

      <div className='successWrapper-information'>

        <div className='successWrapper-information-left-container'>
          <p>PM: {projectManager}</p>
          <p>Plans: {plans}</p>
          <p>Engineering: {engineering}</p>
        </div>

        <div className='successWrapper-information-right-container'>

          <h5>Pool/Spa Information</h5>
          <p>Depth: {poolAveDepth}</p>
          <p>Length / Width: {poolLength} / {poolWidth}</p>
          <p>Area:  {poolLength * poolWidth}</p>
          <p>Perimeter:  {(2 * poolLength) + (2 * poolWidth)}</p>
          <p>-----------</p>
          <p>Area:  {spaLength * spaWidth}</p>
          <p>Perimeter:  {(2 * spaLength) + (2 * spaWidth)}</p>
          <p>-----------</p>
          <p>Area:  {(spaLength * spaWidth) + (poolLength * poolWidth)}</p>
          <p>Perimeter:  {((2 * spaLength) + (2 * spaWidth)) + ((2 * poolLength) + (2 * poolWidth))}</p>

        </div>

      </div>

    </div>
  )
}
