
export default function Subscription({subscription}){
    
  return (
    <article className="subscription-card">
      <h3>Phone nr: {subscription.phoneNumber}</h3>
      <p className="subscription-data">{subscription.data} GB</p>
      <p className="subscription-rate">{subscription.dataRate}kr / month</p>
    </article>
  )
}