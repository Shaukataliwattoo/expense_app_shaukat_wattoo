import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                        <label htmlFor="text">
                            <span className="data">Fill Transaction Detail : لین دین کی تفصیل درج کریں</span></label>
                    <input type="text" value={text} 
                        onChange={(e)=> setText(e.target.value)} 
                        placeholder="Enter Transaction Detail: لین دین کی تفصیل درج کریں" />
                </div>
                <div className="form-control">
                        <label htmlFor="amount">
                            <span className="data">Fill Amount: رقم درج کریں</span>
                            <br />
                            <span className="data3">Note: Use minus - sign for expense :  نوٹ: خرچ کے لیے نفی - کی علامت استعمال کریں </span>
                        </label>
                    <input type="number" value={amount} 
                        onChange={(e)=> setAmount(e.target.value)} 
                        placeholder="Enter Amount :  رقم درج کریں" />
                </div>
                <button className="btn">Add transaction : لین دین کامزیداندراج</button>
                
            </form>
        </>
    )
}
