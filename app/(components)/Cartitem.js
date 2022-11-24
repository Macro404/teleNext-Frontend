

export default function CartItem({ item }) {

  if (item.model){
    return (
      <li className={item.id}>{item.model} {item.price}</li>
    )
  }
  return (
    <li className={item.id}>Plan: {item.data}/month {item.rate}</li>
  )
}