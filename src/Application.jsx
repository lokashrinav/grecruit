import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Application.css'

const Application = () => {
  return (
    <div className="page">
        <div className="name input1" aria-placeholder='Full Name...'></div>
        <div className="email input1" aria-placeholder='Email...'></div>
        <div className="phone input1" aria-placeholder='Format: 1-123-456-789'></div>
        <div className="linkedin input1"></div>
        <div className="github"></div>
    </div>
  )
}

export default Application;