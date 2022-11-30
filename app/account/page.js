"use client";

import React from "react";
import {useSession, signOut, getSession} from 'next-auth/react';
import { useState, useEffect } from "react";
import Link from "next/link";
import { env } from "../../next.config";
import Subscription from "../(components)/Subscription";
import Transaction from "../(components)/Transaction";
import { v4 as uuidv4 } from 'uuid'
import '../../styles/account.css'




export default function Account(){
  const {data: session, status } = useSession({required: true});
  const [userData, setData] = useState(null);
  const [isLoading, setLoading] = useState(false)
  const [Subscriptions, setSubsciptions] = useState('')
  const [Transactions, setTransactions] = useState('')

  useEffect(() => {
    if(session){
      fetchUserData(session.user.email)
      .then((data) => {
      setData(data)
      setLoading(false)
      setSubsciptions(data.subscriptionList.map(subscription => {
        const id = uuidv4();
        return <Subscription key={id} subscription={subscription}/>
      }))
      setTransactions(data.transactionList.map(transaction => {
        const id = uuidv4();
         return <Transaction key={id} transaction={transaction}/>
      }))
      console.log(data)
  })}
 },[session] )
  
  if(!session || isLoading){
    return <div>Loading</div>
  }
  

  const deleteUser = () => {
    fetch(`https://doubleshot-app.azurewebsites.net/api/users/${session.user.email}`,
    {
      method: 'DELETE',
      headers: {
        'web_token': process.env.JWT_SECRET
      }
    })
    signOut({
      callbackUrl: `/`
    })
  }
  if(userData){
    
  }
    
 // let Subscriptions;
 //let Transactions;
  // const userData = fetchUserData(session.user.email);
  
  // const populateData = () => {
  //   userData.then((res) => {
  //   Subscriptions = res.subscriptionList.map(subscription => {
  //     <Subscription subscription={subscription}/>
  //   Transactions = res.transactionList.map(transaction => {
  //     <Transaction transaction={transaction}/>
  //   }));
  // }
  // populateData();
  if(status === 'authenticated'){
    return (
      <div>
      <div className="account-container">
        <section className="subscription-container">{Subscriptions}</section>
        <p className="history_title">Payment history:</p>
        <section className="transaction-history">{Transactions}</section>
      </div>
      <button className="delete-button" onClick={deleteUser}>Delete user</button>
      </div>
    )
  }

  
}
 async function fetchUserData (email) {
  const res = await fetch (`https://doubleshot-app.azurewebsites.net/api/users/${email}`,
  {
    headers: {
      'web_token' : process.env.JWT_SECRET
    }
  });
  const json = await res.json();
  return json;
}
