import './delete.css';
import {useState} from 'react';
import { deletedata,findexpense } from './datarender';

function Delete() {
    const [result,setresult] = useState("");
    var description;
    var date;

    async function deletematch(e){
            var res = await deletedata(date,description);
            setresult(await res);
            
    }

    return (
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

                <label className='date' htmlFor="date">Date:
                <input type="date" className='input ' id="date" onChange={(e) => (date = e.target.value)} name="date" required />
                </label>

                <button className='submit' onClick ={(e)=>deletematch(e)} type="submit">Delete</button>
            </form>
        <h6> {result}   </h6>   
        </div>
    );
}
export default Delete;