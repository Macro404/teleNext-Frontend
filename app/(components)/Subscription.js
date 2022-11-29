
export default function Subscription({subscription}){
    
  return (
    <article className="subscription_card">
      <h3>Phone number: {subscription.phoneNumber}</h3>
      <p>{subscription.dataRate}kr / month</p>
      <p>{subscription.data} GB</p>
    </article>
  )
}