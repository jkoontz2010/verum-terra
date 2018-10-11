// use this to call from the DB store
import DB from './DB'

const cardDB = new DB();

export const  getForgeCards = async () => {
    const forgeCards = await cardDB.initForgeCards();
    return forgeCards;
} 

export const getSpecialCards = () => {
    const specialCards = cardDB.specialCards;
    return specialCards;
} 