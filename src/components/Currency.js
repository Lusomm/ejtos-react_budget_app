import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {currency, dispatch } = useContext(AppContext);
 
   
    const setCurrency = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
	};
    return (
        <div className='alert alert-secondary'>
            <div >
            <select value={currency} id="currency"  onChange={(e)=>setCurrency(e)} style={{background : 'green'}} class="select ">
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            </div>


        </div>
    );
};

export default Currency;