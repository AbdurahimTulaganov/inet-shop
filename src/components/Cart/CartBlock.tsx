import React from 'react'
import s from './cartBlock.module.scss'
import CartItem from './CartItem'
import cardStore from '../../store/cardStore'

const CartBlock = () => {
  const {card, totalPrice} = cardStore()
    
  return (
   <div className={s.cart}>
    <h1 className={s.cart__title}>Корзина</h1>
    <div className={s.cart__list}>
      {
        card.map((elem)=>(
          
          <CartItem key={elem.id} {...elem}/>
        ))
      }
    </div>
    <div className={s.cart__sum}>
        <p>Итог</p>
        <h3>{totalPrice}<span>₽</span></h3>
    </div>
   </div>
  )
}

export default CartBlock