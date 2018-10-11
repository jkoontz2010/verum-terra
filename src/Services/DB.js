// initialize all objects? stick them in a store

// forge cards: metal ,lumber, etc

// special cards: sowrd, spear, etc
import ForgeCard from "./ForgeCard";
import SpecialCard from "./SpecialCard";
import firebase from '../api/firebase'
import { specialCards } from "./specialCards";
import forOwn from 'lodash/forOwn'
import sortBy from 'lodash/sortBy'

export default class DB {
  constructor() {
    this.specialCards = this.initSpecialCards();
  }
  async initForgeCards() {

  }

  getForgeCardByName(name) {
    const cardsMatchingName = this.forgeCards.filter(
      card => card.name === name
    );
    return cardsMatchingName[0];
  }
  initSpecialCards() {
    const cards = specialCards.map(
      card => new SpecialCard(card.name, card.icon, card.requirements)
    );
    // might be missing: invisibility cloak, hand of god
    return cards;
  }
}
