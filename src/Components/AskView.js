import React, { Component } from 'react';
import ForgeCardView from './ForgeCardView'
import Quantifier from './Quanitifier'
import get from 'lodash/get'
export default class AskView extends Component {

    renderCardQuantifier = (forgeCard, idx) => {
        const { increaseQuantity, decreaseQuantity } = this.props;
        
        return (
            <div className="card-quantifier col-sm-6" key={idx}>
                <div className="forge-card-view-area col-sm-7">
                    <ForgeCardView icon={forgeCard.icon} name={forgeCard.name} />
                </div>
                <div className="quanitifer-view-area col-sm-5 clearfix">
                    <Quantifier quantity={forgeCard.quantity} 
                        increaseQuantity={() => increaseQuantity(forgeCard)}
                        decreaseQuantity={() => decreaseQuantity(forgeCard)}
                        />
                </div>
            </div>
        )
    }
    render() {
        const { forgeCards, submitForge } = this.props;

        const hasLoaded = get(forgeCards, 'length') > 1

        if(!hasLoaded) return (
            <div className="ask-area col-sm-12">
    
                    <h1>Loading!</h1>
                
                
                </div>
        )
        return (

                <div className="ask-area col-sm-12">
    
                    {forgeCards.map(this.renderCardQuantifier)}
                    <div className="col-sm-12 forge-action-area">
                        <button className="main-btn" onClick={() => submitForge()}>FORGE</button>
                    </div>
                
                
                </div>
                

        )
    }
}