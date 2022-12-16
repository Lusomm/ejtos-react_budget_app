import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

   
    const handleChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
	};
    return (
        <div className='alert alert-secondary'>
            <div >
            <select  style={{background : 'green'}} class="select ">
                    <option value="dollar">$ Dollar</option>
                    <option value="pound">Two</option>
                    <option value="euro">Three</option>
                    <option value="ruppee">Four</option>
                </select>
            </div>


        </div>
    );
};

export default Currency;