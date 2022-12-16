import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {currency, budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
   
    const handleChange = (e) => {
        if(e.target.value > 20000){
            alert("The value cannot exceed +" + currency+ "20,000");
        }
        else if(e.target.value < totalExpenses){
            alert("The budget is lower than spending");
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: e.target.value,
            });
        }
	};

    return (
        <div className='alert alert-secondary'>
            <span>
                <text>
                Budget: {currency}
                    </text>
                <input value={budget} type='number' onChange={(e) => handleChange(e)}> 
                </input>
            </span>
        </div>
    );
};

export default Budget;