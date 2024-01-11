import React from 'react'
import {nav} from "./data.js"
import MenuList from "./MenuList.jsx"
import "./index.css"
const SideNav = () => {
  return (
    <div className='nav_sidebar'>
      <MenuList data={nav}/>
    </div>
  )
}

export default SideNav