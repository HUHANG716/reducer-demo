import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export type Transaction = {
  id: number;
  text: string;
  amount: number;
};
type InitialState = {
  transactions: Array<Transaction>;
};
const initialState: InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 }
  ]
};

export const GlobalContext: any = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id: any) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
