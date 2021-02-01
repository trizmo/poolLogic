import React, { Component } from 'react'

// Components
import Header from '../../root/header/Header'
import MainForm from '../../root/mainForm/MainForm'

export default function RootWrapper(props) {
  // console.log(props)
  return (
    <div className="rootWrapper-wrapper">
      <Header />
      <MainForm poolData={props.poolData} updatePoolData={props.updatePoolData} />
    </div>
  )
}