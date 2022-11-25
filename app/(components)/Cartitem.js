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
      <div className={item.id}><span className="itemName">{item.model}</span> <span className="price">{item.price}.00:- <button onClick={remove}>-</button></span></div>
    )
  }
  return (
    <div className={item.id}> <span className="itemName">Plan: {item.data}GB/month</span> <span className="price">{item.rate}.00:- <button onClick={remove}>-</button></span></div>
  )
}