import './edit.css';
import { useState } from 'react';
import { fetchdata,findexpense } from './datarender';
import {motion } from 'framer-motion';

function Edit() {
    var [final,setfinal] = useState('');
    const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
    function search(e){
        e.preventDefault();
        
        const loadData = async () => {
              try {

                
                const res = await fetchdata();
                var rawdata= await res;
                setfinal(findexpense(rawdata,description,date));
                if(final !=0){console.log("found")}}
              catch (err) {console.error("Error fetching data:", err);}
        };
        loadData();

    }

    return (
        <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:3}}>

        <div className="edit-container">
            <h2>Edit Expense</h2>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" placeholder='description...' className='input text' list = 'categories' id="description" name="description" value={description}
          onChange={(e) => setDescription(e.target.value)} required />
                <datalist id="categories">
                                <option value="books"></option>
                                <option value="travel"></option>
                                <option value="acessories"></option>
                                <option value="entertainment"></option>
                                <option value="food"></option>
                                <option value="healthcare"></option>
                                </datalist>
                </label>

                <label className='date' htmlFor="date">Date:
                <input type="date" className='input ' id="date" name="date" value={date}
          onChange={(e) => setDate(e.target.value)} required />
                </label>

                <button className='button' onClick={(e) =>{search(e)}} type="submit">Search</button>
            </form>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" className='input text' id="description" name="description"  />
                </label>

                <label className='amount' htmlFor="amount">Amount:

                <input type="number" className='input ' id="amount" name="amount" />
                </label>

                <label className='date' htmlFor="date">Date:
                    
                <input type="date" className='input ' id="date" name="date"  />
                </label>

                <button className='button' type="submit">Save Changes</button>
            </form>
        </div>
        </motion.div>
    );
}
export default Edit;