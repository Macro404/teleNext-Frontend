"use client"
import { v4 as uuidv4 } from 'uuid';
import CartItem from "../(components)/Cartitem";
import '../../styles/cart.css'

export default function Checkout (){
    if(!localStorage.getItem('telenext')){
      return <h2>
        Cart is empty, fill it up!
      </h2>;
    }
  const items = JSON.parse(localStorage.getItem('telenext'));

  const phones = items.filter(item => item.model);
  const cartPhones = phones.map(phone => {
    return <CartItem key={uuidv4()} item={phone}/>
  }
  );
  const plans = items.filter(item => item.data);  
  const cartPlans = plans.map(plan=> {
    return <CartItem key={uuidv4()} item={plan}/>
  }
  );
  const total = phones.map((phone) => phone.price).reduce((total, a) => total + a,  0)
  const monthlyRate = plans.map(plan => plan.rate).reduce((total,a) => total + a, 0);

  return (

  <div className='checkout'>
    {cartPhones}
    {cartPlans}
    <p>Total: {total}:-</p>
    <p>Monthly rate: {monthlyRate}:-</p>
  </div>
  )
}