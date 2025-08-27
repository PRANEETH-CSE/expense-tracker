import './edit.css';
import { useState } from 'react';
import { adddata,deletedata} from './datarender';
import {motion } from 'framer-motion';



function Edit({details}) {


    var  [category,setcat] = useState(details.category);
    var  [date,setdate] = useState(details.date);
    var  [amount,setamount] = useState(details.amount);
    var [final,setfinal] = useState('');

    async function Editexpense(e){
        e.preventDefault();
        setbuttons(<button className='save' onClick={(e)=>{savechanges(e)}} type="submit">Save changes</button>);
    }

    async function savechanges(e) {
        e.preventDefault();
        deletematch(e);
        addmatch(e);

    }

    async function addmatch(e){
            e.preventDefault();
            var res = await adddata(date,category,amount);
            
            
            setfinal("Changes saved");
            
    }

    
        async function deletematch(e){
                e.preventDefault();
                var res = await deletedata(details.date,details.category);
                }

    var [buttons,setbuttons] = useState(<div className="button"><button onClick={(e)=>{deletematch(e)}} className='de buttons' type="submit">Delete</button>
                  <button className='et buttons' onClick={(e)=>{Editexpense(e)}} type="submit">Edit</button></div>);


    

    return (
        <motion.div initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{ opacity:0 }}
    transition={{duration:1}}>

        <div className="edit-container">
            <h2>Edit Expense</h2>
            
            <form className='form'>
                <label htmlFor="description">Category:

                <input type="text" className='input text' onChange={(e)=>{setcat(e.target.value)}} value={category} id="description" name="description"  />
                </label>

                <label className='amount'  htmlFor="amount">Amount:

                <input type="number" value={amount} onChange={(e)=>{setamount(e.target.value)}} className='input ' id="amount" name="amount" />
                </label>

                <label className='date' htmlFor="date">Date:
                    
                <input type="date" value={date} onChange={(e)=>{setdate(e.target.value)}} className='input ' id="date" name="date"  />
                </label>

                {buttons}
            </form>
            <h4>{final}</h4>
        </div>
        </motion.div>
    );
}
export default Edit;