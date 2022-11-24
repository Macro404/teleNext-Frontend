"use client";
import '../../styles/cart.css'

import CartItem from "./Cartitem";
import React, { createElement } from "react";

export default function CartBtn ({ item }) {

  const handleClick = () => {

    const cartString = localStorage.getItem('telenext');
    if(!cartString){
      const items = [];
      items.push(item);
      localStorage.setItem('telenext', JSON.stringify(items));
      return;
    }
    const cartObject = JSON.parse(cartString);
    cartObject.push(item);
    localStorage.setItem('telenext', JSON.stringify(cartObject));
    console.log(localStorage.getItem('telenext'));
  }
  
  return (
    <button
    className="cart_button"
    onClick={handleClick}
    
    
    >🛒</button>
  )
}