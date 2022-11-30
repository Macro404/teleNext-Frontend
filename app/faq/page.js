import '../../styles/faq.css'
export default function FAQ(){
    return <div className='faq-container'>
        <h1>Frequently asked questions</h1>
        <details className='faq-question'>
            <summary>What does your database architecture look like?</summary>
            <p>We set up our database using <i>Azure Database for PostgreSQL flexible server</i>.</p>
            <p>The tables and relations are constructed using Hibernate to map Spring Data Entities and populated via CrudRepository queries.</p>
        </details>
        <details className='faq-question'>
            <summary>What does your front-end consist of?</summary>
            <p>We are utilizing the latest version of Next.js framework to take advantage of serverside rendering for reduced load times as well as to explore the new appDirectory.</p>
        </details>
        <details className='faq-question'>
            <summary>What are you using for security?</summary>
            <p>In the front-end we're using <i>Sign in with Google</i> to authorize our users.</p>
            <p>Our back-end is protected by a JWT token and <i>Cross Origin Resource Sharing</i>, which only accepts requests from our front-end.</p>
        </details>
        <details className='faq-question'>
            <summary>What does your deployment cycle look like?</summary>
            <p>We developed our application using a <i>Continuous Integration/Continuous Deployment</i>-pipeline through Github Actions.</p>
            <p>Because of this our application has been deployed since day one, gradually gaining features after each commit and push.</p>
        </details>
        <details className='faq-question'>
            <summary>Where did you deploy your application?</summary>
            <p>Our front-end and back-end are deployed on two separate app services hosted by Microsoft Azure.</p>
        </details>
    </div>
}