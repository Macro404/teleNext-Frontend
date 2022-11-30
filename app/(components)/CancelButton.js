"use client";
import '../../styles/cart.css'

export default function CancelButton({subscriptionId, subRef}){

  const cancelSubscription = () => {
    fetch(`https://doubleshot-app.azurewebsites.net/api/subscriptions/${subscriptionId}`, {
        method: 'DELETE',
        headers: {
          'web_token': process.env.JWT_SECRET
        }
      })
    subRef.current.classList.toggle('deleted');
  }
  return (
    <button className="delete-button cart_button" onClick={cancelSubscription}>Cancel</button>
  )
}