import './navbar.css'
import reactLogo from './assets/react.svg'
import { Link,useLocation } from 'react-router-dom';

import Searchform from './searchform';




function Header({setsort}){

const location = useLocation();
var options ='';
if(location.pathname === '/search'){
 options =<div className="options">
  <select onChange={(e) => setsort(e.target.value)} id="sort" name="sortby">
    <option value="">Sort by</option>
    <option value="date">Date</option>
    <option value="amount">Amount</option>
  </select>
</div>}
    return(
        <>
        <header className="header">
            <button className="logo"> <Link to= '/'> <img className='logoo' src={reactLogo}/></Link></button>
            <h6 className='Name'>Expense Tracker</h6>
            <Searchform/>
            {options}
            <Link className ='options' to="/add">Add</Link> 
            {/* <Link className ='options' to="/edit">Edit</Link>  */}
            <Link className ='options' to="/delete">Delete</Link>
        </header>
        <div className="space"></div>
    </>
    )

}

export default Header