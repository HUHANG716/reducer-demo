import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
export const IncomeExpense = () => {
  const { transactions }: any = useContext(GlobalContext);
  const [money, setMoney]:
  [money:{income:string|number,expense:string|number},setMoney:any]
   = useState({ income: 0, expense: 0 });

  useEffect(() => {
    const amounts:Array<number> = transactions.map((transaction: any) => transaction.amount);
    const income= amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0)
    .toFixed(2)
    const expense= (amounts
    .filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item),0)* -1)
    .toFixed(2)
    setMoney({income,expense})
  }, [transactions]);
  return (
    <div className="inc-exp-container">
      <div>
        Income
        <h4 id="money-plus" className="money plus">
          ${money.income}
        </h4>
      </div>
      <div>
        Expense
        <h4 id="money-minus" className="money minus">
        ${money.expense}
        </h4>
      </div>
    </div>
  );
};
