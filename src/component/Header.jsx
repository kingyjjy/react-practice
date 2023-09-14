import React from 'react'
import Nav from './Nav'
import {mystyle} from '../style/style'

const Header = () => {
  return (
    <div style={mystyle}>
        <div style={{fontSize:"20px", fontWeight:700, color:"#6f5ad3", lineHeight:"80px"}}>
            Header Logo 
        </div>
        <Nav/>
    </div>
  )
}

export default Header