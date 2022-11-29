
export default function Transaction({ transaction }) {
  return (
    <article className="transaction">
      <h3>
        <span className="transaction_date">{transaction.date} </span>
        <span className="transaction_description">{transaction.description} </span>
        <span className="transaction_amount"> {transaction.amount};-</span>
      </h3>
    </article>
  )
}