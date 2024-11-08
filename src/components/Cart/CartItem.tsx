import React, { FC } from 'react'
import s from './cartBlock.module.scss'
import { closeIcon, productImg } from '../../utils'
import cardStore, { ICardProduct } from '../../store/cardStore'
import { IProduct } from '../../types'
import { toast } from 'react-toastify'

const CartItem: FC <ICardProduct>= ({title, price, image, amount, id}) => {
  const {addToCard, minusCard,delCard} = cardStore()
  const removeItem = ()=>{
    delCard(id)
    toast.error('Товар удален из корзины!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
   <div className={s.cart__item}>
    <div className={s.cart__info}>
        <img src={image} alt="" className={s.cart__image} />
        
        <h2 className={s.cart__name}>{title}</h2>
        <p className={s.cart__price}>{amount * +price} ₽</p>
    </div>
    <div className={s.cart__controls}>
        <button onClick={()=>{minusCard(id)}} className={s.cart__minus}>‒</button>
        <span className={s.cart__amount}>{amount}</span>
        <button onClick={()=>{addToCard({id} as IProduct)}} className={s.cart__plus}>+</button>
        <button onClick={removeItem} className={s.cart__del}><img src={closeIcon} alt="" /></button>
        
    </div>
   </div>
  )
}

export default CartItem