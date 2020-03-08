import React from 'react'
import Logo from '../../Logo'
import './index.css'
import NavigationItems from '../NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'

const toolbar = props => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo />
    <nav className='DesktopOnly'>
      <NavigationItems />
    </nav>
  </header>
)
export default toolbar
