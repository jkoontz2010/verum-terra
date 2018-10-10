import React, { Component } from 'react';

export default class Quantifier extends Component {
    render() {
        const { decreaseQuantity, increaseQuantity, quantity } = this.props;
        return (
            <span className="quantifier">
                <div className="">
                    <span className="decrease-btn" onClick={() => decreaseQuantity()}>-</span>
                </div>
                <div className="quantity-display ">{quantity}</div>
                <div className="">
                    <span className="increase-btn" onClick={() => increaseQuantity()}>+</span>
                </div>
            </span>
        )
    }
}