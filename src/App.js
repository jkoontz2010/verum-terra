import React, { Component } from 'react';
import './App.css';
import { getForgeCards, getSpecialCards } from './Services/cardApi'
import AskView from './Components/AskView'
import ForgeCard from './Services/ForgeCard'
import ResultsDisplay from './Components/ResultsDisplay'

const FORGES_ROUTE = 'forges';
const ASK_ROUTE = 'ask';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: ASK_ROUTE,
      forgeCards: getForgeCards(),
      specialCards: getSpecialCards()
    }
  }

  increaseQuantity = (forgeCard) => {
    const forgeCardName = forgeCard.name;
    // get forge card from forgeCards
    const { forgeCards } = this.state;
    const card = forgeCards.filter(card => {
      return card.name === forgeCardName;
    })[0];
    card.quantity = card.quantity + 1;
    this.setState({
      forgeCards
    })
  }

  decreaseQuantity = (forgeCard) => {
    const forgeCardName = forgeCard.name;
    // get forge card from forgeCards
    const { forgeCards } = this.state;
    const card = forgeCards.filter(card => {
      return card.name === forgeCardName;
    })[0];
    card.quantity = card.quantity < 1 ? 0 : card.quantity - 1;
    this.setState({
      forgeCards
    })
  }

  submitForge = (forgeCards) => {
    this.getSpecialsFromForged();
 
  }

  getSpecialsFromForged() {
    const { forgeCards, specialCards } = this.state;

    // grab forgeCards with greater than 0 quantity
    const quantifiedForgeCards = forgeCards.filter(forgeCard => {
      return forgeCard.quantity > 0;
    });

    specialCards.forEach(specialCard => specialCard.checkRequirements(quantifiedForgeCards));
    const fullyMetSpecials = specialCards.filter(sc => sc.requirementsFullyMet === true);
    const partiallyMetSpecials = specialCards.filter(sc => sc.requirementsPartiallyMet === true && sc.requirementsFullyMet === false);

    console.log("CARD REQS MET FOR", fullyMetSpecials, partiallyMetSpecials)
    this.setState({
      route: FORGES_ROUTE
    })
  }

  returnToHome = () => {
    this.setState({
      route: ASK_ROUTE
    })
  }

  render() {
    console.log(getForgeCards());
    // in render, handle routing. 
    const { route } = this.state;
    const { forgeCards, specialCards } = this.state;

    return (
      <div className="App container">
        <div className="row">
          <div className="main-area col-xs-11 col-sm-12 col-sm-offset-0 col-md-10 col-md-offset-1">
            {route === ASK_ROUTE &&
              
                <AskView 
                  increaseQuantity={this.increaseQuantity} 
                  decreaseQuantity={this.decreaseQuantity}
                  forgeCards={forgeCards} 
                  submitForge={this.submitForge}/>

            }
            {route === FORGES_ROUTE &&

                <ResultsDisplay 
                  specialCards={specialCards} 
                  returnToHome={this.returnToHome}
                  forgeCards={forgeCards} >FORGE AREA</ResultsDisplay>

            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
