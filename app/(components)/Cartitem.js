"use client"

export default function CartItem({ item, list, setList }) {

  const remove = () =>{
    let itemList = JSON.parse(localStorage.getItem('telenext'));
    itemList = itemList.filter(listItem => listItem.uniqueId != item.uniqueId);
    localStorage.setItem('telenext', JSON.stringify(itemList));
    setList(JSON.parse(localStorage.getItem('telenext')));
  }


  if (item.model){
    return (
      <li className={item.id}>{item.model} {item.price} <button onClick={remove}>-</button></li>
    )
  }
  return (
    <li className={item.id}>Plan: {item.data}/month {item.rate} <button onClick={remove}>-</button></li>
  )
}