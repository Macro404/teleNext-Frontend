import '../../styles/dataplan.css'
import CartBtn from './CartBtn'
export default function Dataplan({ plan }){
    return <div className="dataplan-container">
        <h1>{plan.data}GB</h1>
        <h2>{plan.rate}:-/month</h2>
        <CartBtn item={plan}/>
    </div>
}