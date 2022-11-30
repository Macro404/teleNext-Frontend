import '../../styles/about.css'
export default function AboutUs(){
    return <div className="about-container">
        <h1>About us</h1>
        <article>
            <p>This is the final project for mob Doubleshot consisting of Marcus Westlund (Stockholm) and Michael Vedestig (Oslo) at &lt;/salt&gt;'s Fullstack Java bootcamp.</p>
            <h2>Site features</h2>
            <p>We've built a telecom site featuring products in the form of Phones and subscriptions. We use google validation to enable signups to the page as well as for validating access where necessary.</p>
            <h2>Tech stack</h2>
            <h3>Front-end</h3>
            <p>The front-end was built using next-js.</p>
            <h3>Back-end</h3>
            <p>The back-end is a REST api built using Spring.</p>
            <h3>Data storage</h3>
            <p>All of our data is stored in a postgres database.</p>
            <h3>Cloud</h3>
            <p>Front-end, back-end and our database are all hosted by Azure.</p>
        </article>
    </div>
}