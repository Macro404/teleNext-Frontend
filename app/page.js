import HomepagePhone from "./(components)/homepagePhone";
import Dataplan from "./(components)/dataplans";
import '../styles/layout.css';

export default async function Home(){

    const products = await fetchProducts();

    const phones = products.phones.map(phone => {
        return (
            <HomepagePhone key={phone.id}
            phone={phone}></HomepagePhone>
    )});

    const dataplans = products.dataPlans.map(dataplan => {
        return (<Dataplan key={dataplan.id} 
            plan={dataplan}></Dataplan>
            )});

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
