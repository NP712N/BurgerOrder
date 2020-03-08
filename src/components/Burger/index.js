import React from 'react'
import './index.css'
import BurgerIngredient from './BurgerIngredient'

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}
export default burger
