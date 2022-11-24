import Phone from "../(components)/Phone";
export default async function Phones(){
    const products = await fetchProducts();

    const phones = products.phones.map(phone => {
        return (
            <Phone key={phone.id}
            phone={phone}
            ></Phone>
    )})

    return <div>
        {phones}
    </div>
}

async function fetchProducts(){
    const res = await fetch('https://doubleshot-app.azurewebsites.net/api/');
    const json = await res.json();
    return json;
}