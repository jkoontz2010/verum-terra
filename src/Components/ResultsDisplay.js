import React, { Component } from 'react';
import ForgeCardView from './ForgeCardView'

export default class ResultsDisplay extends Component {
    renderMetRequirement = (forgeRequirement, idx) => {
        const { forgeCard, quantity } = forgeRequirement;
        console.log("forge card", forgeCard)
        const matchingForgeCard = this.props.forgeCards.filter(fc => fc.name === forgeCard)[0];
        console.log("MATCHERRRR", matchingForgeCard)
        return (
            <div className='col-sm-5 col-md-4 forge-card-display flex-centered' key={'req'+idx}>
                <div className="col-sm-1">{quantity}/{quantity}</div>
                <div className="no-padding col-sm-10">
                    <ForgeCardView name={forgeCard} icon={matchingForgeCard.icon} />
                    
                </div>
                
            </div>
        )
    }
    renderNotMetRequirement = (forgeRequirement, idx) => {
       const { forgeCard, quantity, quantityMet } = forgeRequirement;
       const matchingForgeCard = this.props.forgeCards.filter(fc => fc.name === forgeCard)[0];
        console.log("MATCHEOOOOOO", matchingForgeCard)
        return (
            <div className='col-sm-5 col-md-4 not-met forge-card-display flex-centered' key={'req'+idx}>
                
                <div className="col-sm-1">{`${quantityMet}/${quantity}`} </div>
                <div className="no-padding col-sm-10">
                    <ForgeCardView name={forgeCard} icon={matchingForgeCard.icon} />
                </div>
            </div>
        )
    }
    renderFullyMetCard = (card, idx) => {
        const { requirements, icon, name } = card; 
        return (
            <div className="req-display col-sm-12" key={`met`+idx}>
                <div className="flex-centered col-sm-12">
                {requirements.map(this.renderMetRequirement)}
                </div>
                <div className="col-sm-4 col-sm-offset-2 special-card-img">
                    <img src={icon} alt="icon" width="270px" height="330px"/>
                </div>
                <div className="col-sm-4 text-center">
                    <h1>{name}</h1>
                </div>
            </div>
        )
    }
    renderPartiallyMetCard = (card, idx) => {
        const { requirements, missingRequirements, icon, name } = card; 
        console.log("CHECKING FOR NAME AS ", name)
        const missingVsNotMetReqs = this.determineMissingVsMet(requirements, missingRequirements)
        const metReqs = missingVsNotMetReqs.filter(req => req.fullyMet === true);
        const notMetReqs = missingVsNotMetReqs.filter(req => req.notMet === true);

        return (
            <div className="req-display col-sm-12" key={`pmet`+idx}>
                <div className="flex-centered col-sm-12">
                    {metReqs.map(this.renderMetRequirement)}
                    {notMetReqs.map(this.renderNotMetRequirement)}
                </div>
                <div className="col-sm-4 col-sm-offset-2 special-card-img">
                    <img src={icon} alt="icon" width="270px" height="330px"/>
                </div>
                <div className="col-sm-4 text-center center-block">
                    <h1>{name}</h1>
                </div>
            </div>
        )
    }
    determineMissingVsMet = (reqs, missing) => {
        const reqsClone = JSON.parse(JSON.stringify(reqs));
        // determine if a partial is in a req 
        reqsClone.map(req => {
            const matchingReq = missing.find(mreq => mreq.forgeCard === req.forgeCard);
            if(matchingReq) {
                req.notMet = true;

                req.quantityMet = req.quantity - matchingReq.quantity;
                
            } else {
                req.fullyMet = true;
            }
        })
        console.log("FINAL REQS RESULT", reqsClone)
        return reqsClone;
    }

    
    render() {
        const { specialCards, returnToHome, forgeCards } = this.props;
        console.log("looking at", forgeCards)

        const fullyMetCards = specialCards.filter(c => c.requirementsFullyMet === true);
        const partiallyMetCards = specialCards.filter(c => c.requirementsFullyMet === false && c.requirementsPartiallyMet===true);
        return (
            <div className="results-display">

                <div className="col-sm-12 text-center card-display">
                    <button className="main-btn" onClick={() => returnToHome()}>Return to Shop</button>
                    <h1>You can make:</h1>
                    {fullyMetCards.map(this.renderFullyMetCard)}
                </div>
                <div className="col-sm-12 text-center card-display">
                    <h1>You can almost make:</h1>
                    {partiallyMetCards.map(this.renderPartiallyMetCard)}
                </div>
                <button className="main-btn" onClick={() => returnToHome()}>Return to Shop</button>
            </div>
        )
    }
}