import HomepagePhone from "./(components)/homepagePhone";
import Dataplan from "./(components)/dataplans";
import '../styles/layout.css';
import LoginBtn from "./(components)/LoginBtn";

export default async function Home(){

    const products = await fetchProducts();

    const phones = products.phones.map(phone => {
        return (
            <HomepagePhone key={phone.id}
            model={phone.model}
            price={phone.price}
            images={phone.images}></HomepagePhone>
    )});

    const dataplans = products.dataPlans.map(dataplan => {
        return (<Dataplan key={dataplan.id} 
            rate={dataplan.rate} 
            data={dataplan.data}>
            </Dataplan>)
    });

    return (
    
    <div>
        <div className="dataplans-container">
            {dataplans}
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
    const res = await fetch('https://doubleshot-app.azurewebsites.net/api/');
    const json = await res.json();
    return json;
}
