import { v4 as uuidv4 } from 'uuid'
import CancelButton from './CancelButton';
import { useRef } from 'react';

export default function Subscription({subscription}){
    
  const subRef = useRef(null);
  const id = uuidv4();
  return (
    <article ref={subRef} className="subscription-card">
      <h3>Phone nr: {subscription.phoneNumber}</h3>
      <p className="subscription-data">{subscription.data} GB</p>
      <div className="subscription-rate">
        <CancelButton key={id} subRef={subRef} subscriptionId={subscription.id}/>
        <p>{subscription.dataRate}kr / month</p></div>
    </article>
  )
}