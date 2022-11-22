import Phone from "./(components)/Phone";
import Subscription from "./(components)/Subscription";
import '../styles/layout.css'


export default async function Home(){

    const products = await fetchProducts();

    const phones = products.phones.map(phone => {
        return (
            <Phone key={phone.id}
            model={phone.model}
            price={phone.price}
            camera={phone.model}
            cpu={phone.cpu}
            battery={phone.battery}
            screen={phone.screen}
            images={phone.images}></Phone>
    )})

    return (<div>
        <div className="subscriptions-container">
        </div>
        <div className="phones-container">
        {phones[0]}
        {phones[8]}
        {phones[1]}
        </div>
        </div>
    )
}

async function fetchProducts(){
    const res = await fetch('https://doubleshot-app.azurewebsites.net/api/  ');
    const json = await res.json();
    console.log(json)
    return json;
}
