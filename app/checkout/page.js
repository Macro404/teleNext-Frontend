"use client"
import { v4 as uuidv4 } from 'uuid';
import CartItem from "../(components)/Cartitem";
import '../../styles/cart.css'
import { useState } from 'react';
import Payment from '../(components)/Payment';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Checkout (){
  const {data: session, status } = useSession({required: true});
  const router = useRouter();
  const [userId, setUserId] = useState('');

  if(typeof window == 'undefined' || !localStorage.getItem('telenext') || localStorage.getItem('telenext').length == 0){
    return <h2>
      Cart is empty, fill it up!
    </h2>
  }
  
  if (!session){

    signIn({
      callbackUrl: `${window.location.origin}`
    });
  }
  else{
    fetch(`https://doubleshot-app.azurewebsites.net/api/users/${session.user.email}`,
    {
      headers: {
        'web_token' : process.env.JWT_SECRET
      }
    }).then(response => {
      if(response.status !== 200){
        console.log('caught')
        router.push('/signup')
      }
      return response.json()
    })
    .then(json => setUserId(json.id));
  
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
    const monthlyRate = plans.map(plan => plan.rate).reduce((total,a) => total + a, 0);
  
    const phoneIdList = phones.map(item => item.id);
    const planIdList = plans.map(item => item.id);
    const productIds = {phoneIds : phoneIdList, planIds : planIdList};
    return (
  
    <div className='checkout'>
      <div className='checkout-items'>
        {cartPhones}
        {cartPlans}
      </div>
      <p>Total: {total}:-</p>
      <p>Monthly rate: {monthlyRate}:-</p>
      <Payment amount={42069} productIds={productIds} userId={userId}/>
    </div>
    )
  }

    
}