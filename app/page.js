import Phone from "./(components)/Phone";
import Subscription from "./(components)/Subscription";


export default async function Home(){

    const products = await fetchProducts();

    return <h1>Here goes content</h1>
}

async function fetchProducts(){
    const res = await fetch('https://doubleshot-app.azurewebsites.net/api',
    {mode:cors});
    return res.json;
}
