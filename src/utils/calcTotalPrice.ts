import { ICardProduct } from "../store/cardStore";

function calcTotalPrice(cards:ICardProduct[]): number {
    return cards.reduce((acc, elem)=>{
        return acc + elem.amount * +elem.price
    }, 0)
    
}

export default calcTotalPrice