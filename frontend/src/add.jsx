import './add.css';
import { useState } from 'react';
import {adddata } from './datarender'
import {motion} from 'framer-motion'

function Add() {
    const [result,setresult] = useState('');
    var description;
    var date;
    var amount;

    async function addmatch(e){
            e.preventDefault();
            var res = await adddata(date,description,amount);
            setresult(await res);
            
    }

    
    return (
        <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:3}}>

    
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

                <button className='submi' onClick= {(e) => addmatch(e)} type="submit">Add Expense</button>
            </form>
            <h6>{result}</h6>
        </div>
        
    </motion.div>
    );
}
export default Add;