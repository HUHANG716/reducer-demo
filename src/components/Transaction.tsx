export const Transaction = ({ transaction }: any) => {
  const sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
