import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'

class orderSummary extends React.Component {
	constructor(props){
		super(props)
		
		let state = {
			ingredients: this.props.ingredients
		}
		
	}

	ingredientsSummary(props){
		return Object.keys(this.state.ingredients)
		.map(igKey => {
			return (
			<li key={igKey}>
				<span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
			</li>);
		});
	} 

	render(){
		return (
			<Aux>
				<h3>Your order</h3>
				<p>A delicous burger with the following ingredients: </p>
				<ul>
					{this.ingredientsSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
			</Aux>
		)
	}
	
};

export default orderSummary;