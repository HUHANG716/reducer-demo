import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "../context/GlobalState";
export const Balance = () => {
  const { transactions }: any = useContext(GlobalContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const sum = transactions
      .map((transaction: Transaction) => transaction.amount)
      .reduce((sum: number, item: number) => (sum += item), 0);
    setBalance(sum);
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};
