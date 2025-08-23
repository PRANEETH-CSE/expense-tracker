import './navbar.css'
import reactLogo from './assets/react.svg'
import { Link } from 'react-router-dom';

import Searchform from './searchform';

var options =<div className="options">
                <select id="sort" name="sortby">
                        <option value="date">sort by</option>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                        
                </select>
            </div>;



function Header(){
    return(
        <>
        <header className="header">
            <button className="logo"> <Link to= '/'> <img className='logoo' src={reactLogo}/></Link></button>
            <h6 className='Name'>Expense Tracker</h6>
            <Searchform/>
            {options}
            <Link className ='options' to="/add">Add</Link> 
            <Link className ='options' to="/edit">Edit</Link> 
            <Link className ='options' to="/delete">Delete</Link>
        </header>
        <div className="space"></div>
    </>
    )

}

export default Header