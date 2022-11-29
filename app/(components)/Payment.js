import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './form';
import Image from 'next/image';

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Payment({amount, productIds}) {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntent, setPaymentIntent] = useState('');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads using our local API
    fetch('api/stripe_intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        payment_intent_id: '',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret), setPaymentIntent(data.id);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
    labels: 'floating',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Head>
        <title>Stripe Elements</title>
      </Head>
      <h1 className="text-2xl bold mb-4 mt-4 text-center">
        Accept payments with credit card
      </h1>
      <div className="flex justify-center m-auto w-1/2">
        <div className="w-1/3 flex justify-start items-center">
          <img src="/stripe.svg" alt="Stripe" />
        </div>
        <div className="w-1/3 flex justify-center items-center text-4xl bold">
          +
        </div>
        <div className="w-1/3 flex justify-end items-center">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width={110} height={55} alt="Stripe" />
        </div>
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripe}>
          <CheckoutForm paymentIntent={paymentIntent} amount={amount} productIds={productIds}/>
        </Elements>
      )}
    </div>
  );
}
