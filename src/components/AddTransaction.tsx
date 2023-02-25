import {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
  const { transactions,addTransaction }: any = useContext(GlobalContext)
  const [input,setInput]:[input:{text:any,amount:number|''},setInput:any]=useState({text:'',amount:''})
  return (
    <div>
      <h3>Add new transaction</h3>
   
        <div className="form-control">
          <label>Text</label>
          <input onChange={(e)=>setInput((prevState:any)=>({...prevState,text:e.target.value}))} type="text" value={input.text} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(e)=>setInput((prevState:any)=>({...prevState,amount:parseInt(e.target.value)}))} value={input.amount}
            id="amount"
            placeholder="Enter amount..."
           
          />
        </div>
        <button className="btn" onClick={()=>addTransaction([...transactions,input])}>add transaction</button>
    
    </div>
  );
};
