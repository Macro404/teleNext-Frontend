import Phone from "./(components)/Phone";
import Subscription from "./(components)/Subscription";

export default function Home({products}){

    return <h1>Here goes content</h1>
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://doubleshot-app.azurewebsites.net/api',
    {mode:cors});
    const products = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
    }
  }