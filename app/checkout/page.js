"use client"
import { v4 as uuidv4 } from 'uuid';
import CartItem from "../(components)/Cartitem";
import '../../styles/cart.css'
import { useState } from 'react';
import Payment from '../(components)/Payment';
import { useSession, signIn } from "next-auth/react";

export default function Checkout (){
  const { data: session } = useSession();

  
  if (!session){
    signIn();
  }

  if(typeof window == 'undefined' || !localStorage.getItem('telenext')){
    return <h2>
      Cart is empty, fill it up!
    </h2>
  }
  //const [total, setTotal] = useState(0)
    

  const [list, setList] = useState(JSON.parse(localStorage.getItem('telenext')))

  const items = JSON.parse(localStorage.getItem('telenext'));

  const phones = items.filter(item => item.model);
  
  const cartPhones = phones.map(phone => {
    return <CartItem key={uuidv4()} item={phone} list={list} setList={setList}/>
  }
  );
  const plans = items.filter(item => item.data);  
  const cartPlans = plans.map(plan=> {
    return <CartItem key={uuidv4()} item={plan} list={list} setList={setList}/>
  }
  );
  const total = phones.map((phone) => phone.price).reduce((total, a) => total + a,  0)
  //setTotal(phones.map((phone) => phone.price).reduce((total, a) => total + a,  0));
  const monthlyRate = plans.map(plan => plan.rate).reduce((total,a) => total + a, 0);

  const phoneIds = phones.map(item => item.id);
  const planIds = plans.map(item => item.id);
  const productIds = {phones : phoneIds, plans : planIds};

  return (

  <div className='checkout'>
    <div className='checkout-items'>
      {cartPhones}
      {cartPlans}
    </div>
    <p>Total: {total}:-</p>
    <p>Monthly rate: {monthlyRate}:-</p>
    <Payment amount={total} productIds={productIds}/>
  </div>
  )
}