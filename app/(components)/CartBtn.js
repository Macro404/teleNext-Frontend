"use client";
import { v4 as uuidv4 } from 'uuid';
import '../../styles/cart.css'

import CartItem from "./Cartitem";
import React, { createElement } from "react";
import { useState } from 'react';

export default function CartBtn ({ item }) {
  const initialText = 'Add to cart';
  const [buttonText, setButtonText] = useState(initialText);
  const handleClick = (e) => {
    
    e.target.classList.add('clicked');
    setButtonText('Added')
    setTimeout(() => {
      setButtonText(initialText);
      e.target.classList.remove('clicked');
    }, 1000);
    item.uniqueId = uuidv4();
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
  }
  
  return (
    <button
    className="cart_button"
    onClick={handleClick}
    
    
    >{buttonText}</button>
  )
}