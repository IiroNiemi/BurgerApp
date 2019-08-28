import React from 'react';

import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients)
				.map(igKey => {
					return (
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
					</li>);
				});

	return (
		<Aux>
			<h3>Your order</h3>
			<p>A delicous burger with the following ingredients: </p>
			<ul>
				{ingredientsSummary}
			</ul>
			<p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>
			<Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
			<Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
		</Aux>
	)
};

export default orderSummary;