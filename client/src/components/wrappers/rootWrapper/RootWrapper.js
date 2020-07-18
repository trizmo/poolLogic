import React from 'react'

// Components
import Header from '../../root/header/Header'
import MainForm from '../../root/mainForm/MainForm'

export default function RootWrapper() {
  return (
    <div className="rootWrapper-wrapper">
      <Header />
      <MainForm />
    </div>
  )
}
