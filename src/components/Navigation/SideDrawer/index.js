import React from 'react'
import NavigationItems from '../NavigationItems'
import './index.css'
import Logo from '../../Logo'
import Backdrop from '../../UI/Backdrop'
import Aux from '../../../hoc/Auxx'

const sideDrawer = props => {
  let classes = props.open ? ['SideDrawer', 'Open'] : ['SideDrawer', 'Close']
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}
export default sideDrawer
