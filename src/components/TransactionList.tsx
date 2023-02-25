import { Transaction } from "./Transaction";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions }: any = useContext(GlobalContext);
  console.log(transactions);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(
          (transaction: { text: any; amount: any }, index: number) => (
            <Transaction transaction={transaction} key={index} />
          )
        )}
      </ul>
    </div>
  );
};
