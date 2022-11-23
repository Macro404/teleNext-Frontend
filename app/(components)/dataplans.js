import '../../styles/dataplan.css'
export default function Dataplan({id, rate, data}){
    return <div className="dataplan-container">
        <h1>{data}GB</h1>
        <h2>{rate}:-/month</h2>
        <button>🛒</button>
    </div>
}