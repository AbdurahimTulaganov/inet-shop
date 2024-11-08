import React, { FC, ReactNode, useEffect } from 'react'
import User from '../components/User/User'
import cardStore from '../store/cardStore'

interface IUserLayout {
    children: ReactNode
}

const UserLayout: FC<IUserLayout> = ({children}) => {
  const {card} = cardStore()
  useEffect(()=>{
    const json = JSON.stringify(card)
    localStorage.setItem('card', json)
  }, [card])
  return (
    <div className='wrapper'>
        <User/>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default UserLayout