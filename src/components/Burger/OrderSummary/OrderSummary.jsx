import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {

  componentDidUpdate(){
    console.log("Order summary component updated")
  }

	render(){
    let ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
        </li>);
      });

		return (
			<Aux>
				<h3>Your order</h3>
				<p>A delicous burger with the following ingredients: </p>
				<ul>
					{ingredientsSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		)
	}
	
};

export default OrderSummary;