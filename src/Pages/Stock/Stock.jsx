import React from 'react'
import card from './img/card.png'
import cardMan from './img/cardMan.png'

const Stock = () => {
  return (
    <div className='bg-[white] rounded-[30px]'>
        <div className="container">
            <div>
                <img src={card} alt="" />
                <img src={cardMan} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Stock