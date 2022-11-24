"use client";

import CartItem from './Cartitem';


export default function Cart() {


  const cart = JSON.parse(localStorage.getItem('telenext'));

  return <ul className="cart">
    {cart.map((item) => (
      <CartItem item={item}/>
    ))}
  </ul>
}