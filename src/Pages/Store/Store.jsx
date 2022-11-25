import React from 'react'
import CartCol from '../../Component/CartCol/CartCol';
import ItemsCol from '../../Component/ItemsCol/ItemsCol';
import './Store.css';

function Store() {
  return (
    <div className='home-container'>
      <ItemsCol />
      <CartCol />
    </div>
  )
}

export default Store