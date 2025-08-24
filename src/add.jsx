import './add.css';
import { useState } from 'react';
import {adddata } from './datarender'

function Add() {
    const [result,setresult] = useState('');
    var description;
    var date;
    var amount;

    async function addmatch(e){
            e.preventDefault();
            var res = await adddata(date,description,amount);
            console.log(await res);
            setresult(await res);
            
    }

    
    return (
        <div className="edit-container">
            <h2>Add Expense</h2>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" placeholder='description...' className='input text' onChange={(e) => {description =e.target.value;}} list = 'categories' id="description" name="description" required />
                <datalist id="categories">
                                <option value="books"></option>
                                <option value="travel"></option>
                                <option value="acessories"></option>
                                <option value="entertainment"></option>
                                <option value="food"></option>
                                <option value="healthcare"></option>
                                </datalist>
                </label>

                <label className='amount' htmlFor="amount">Amount:

                <input type="number" placeholder='enter amount..' onChange={(e) => {amount =e.target.value;}} className='input ' id="amount" name="amount" required />
                </label>

                <label className='date' htmlFor="date">Date:
                    
                <input type="date" placeholder='date' className='input ' onChange={(e) => (date = e.target.value)} id="date" name="date" required />
                </label>

                <button className='submit' onClick= {(e) => addmatch(e)} type="submit">Add Expense</button>
            </form>
            <h6>{result}</h6>
        </div>
    );
}
export default Add;