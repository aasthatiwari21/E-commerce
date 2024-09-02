import React, { useContext } from 'react'
import "./CartItem.css"
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
    const {all_products, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
            <div className="cartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
    </div>
  )
}

export default CartItem
