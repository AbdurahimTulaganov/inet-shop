import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { IProduct } from "../types"
import calcTotalPrice from "../utils/calcTotalPrice"
export interface ICardProduct extends IProduct {
    amount: number
}

interface ICardStore {
   card: ICardProduct[],
   totalPrice: number,
   addToCard: (product:IProduct)=>void,
   minusCard: (id: number)=>void,
   delCard: (id: number)=>void
   
}

const data = localStorage.getItem('card')
const loclaCard: ICardProduct[] = data ? JSON.parse(data) : []
const total = loclaCard.reduce((acc, elem)=>{
    return acc + elem.amount * +elem.price
}, 0)

const cardStore = create<ICardStore>()(devtools((set) => ({
    card: loclaCard,
    totalPrice: total,
    addToCard: (product)=> {
        set((state)=>{
            const {card}= state
            const find = card.find((elem)=>elem.id == product.id)
            let newCards = card
            if (find) {
                
                    newCards = card.map((elem)=>(
                        elem.id == product.id ? {...elem, amount: elem.amount + 1} : elem
                    ))
                
            }else {
                
                newCards = [ ...state.card ,{...product, amount: 1}]
            }
            
            return {card: newCards, totalPrice: calcTotalPrice(newCards)}
        })
    },
   minusCard: (id)=>{
    set((state)=>{
        const {card}= state
        const newCards = card.map((elem)=>{
            return elem.id == id && elem.amount > 1 ? {...elem, amount: elem.amount - 1 } : elem
        })
        return {card: newCards, totalPrice: calcTotalPrice(newCards)}
    })
   },
   delCard: (id)=>{
    set((state)=>{
        const {card} = state
        
        const newCards = card.filter((elem)=>{
            return elem.id != id 
        })
        return {card: newCards, totalPrice: calcTotalPrice(newCards)}
    })
   }
})))

export default cardStore