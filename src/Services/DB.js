// initialize all objects? stick them in a store

// forge cards: metal ,lumber, etc

// special cards: sowrd, spear, etc
import ForgeCard from './ForgeCard'
import SpecialCard from './SpecialCard'
const METAL = "Metal";
const LUMBER = "Lumber";
const ROPE = "Rope";
const GLOW_STONE = "Glow Stone";
const FELUGIO_SEPTIA = "Felugio Septia";
const GLASS = "Glass";
const DRAGON_EYE = "Dragon Eye";
const HAMMER = "Hammer";
const FOOD_RATION = "Food Ration";
const LEATHER = "Leather";
const IRON_ORE ="Iron Ore";
const NAILS = "Nails";
const COTTON = "Cotton";
const OLD_CLOTH = "Old Cloth";
const FIRE = "Fire";
import { forgeCards } from './forgeCards'
import { specialCards } from './specialCards'

export default class DB {
    constructor() {
        this.forgeCards = this.initForgeCards();
        this.specialCards = this.initSpecialCards();
    }
    initForgeCards() {
        const cards = forgeCards.map(card => new ForgeCard(card.name, card.icon, 0))

        return cards;
    }

    getForgeCardByName(name) {
        const cardsMatchingName = this.forgeCards.filter(card => card.name === name);
        return cardsMatchingName[0];
    }
    initSpecialCards() {
        const cards = specialCards.map(card => new SpecialCard(card.name, card.icon, card.requirements))
         // might be missing: invisibility cloak, hand of god
        return cards;
    }




}