import React from 'react'
import './index.css'
import NavigationItem from './NavigationItem'

const navigationItems = () => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
)
export default navigationItems
