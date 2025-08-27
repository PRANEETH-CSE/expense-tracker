import './delete.css';
import {useState} from 'react';
import { deletedata,findexpense } from './datarender';
import {motion} from 'framer-motion';

function Delete() {
    const [result,setresult] = useState("");
    var description;
    var date;

    async function deletematch(e){
            e.preventDefault();
            var res = await deletedata(date,description);
            setresult(await res);
            
    }

    return (
        <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:3}}>
        <div className="fullc"> 

        <div className="edit-container">
            <h2>Delete Expense</h2>
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" placeholder='description...' onChange={(e) => {description =e.target.value;}} className='input text' list = 'categories' id="description" name="description" required />
                <datalist id="categories">
                                <option value="books"></option>
                                <option value="travel"></option>
                                <option value="acessories"></option>
                                <option value="entertainment"></option>
                                <option value="food"></option>
                                <option value="healthcare"></option>
                                </datalist>
                </label>

                <label className='daate' htmlFor="date">Date:
                <input type="date" className='input '  id="date" onChange={(e) => (date = e.target.value)} name="date" required />
                </label>

                <button className='submit' onClick ={(e)=>deletematch(e)} type="submit">Delete</button>
            </form>
        <h4> {result}   </h4>   
        </div>
        </div>
        </motion.div>
    );
}
export default Delete;