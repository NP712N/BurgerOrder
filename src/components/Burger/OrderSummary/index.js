import React, { Component } from 'react'
import Aux from '../../../hoc/Auxx'
import Button from '../../UI/Button'

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OderSummary] updated')
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      )
    })
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Price: <strong>${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType='Danger' clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    )
  }
}
export default OrderSummary
