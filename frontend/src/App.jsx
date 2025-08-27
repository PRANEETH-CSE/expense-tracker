import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from "./navbar";
import Home from './Home'
import EditExpense from './Editexpense'
import AddExpense from './Addexpense'
import DeleteExpense from './Deleteexpenses'
import SearchPage from './searchexpense';
import './App.css'
function App() {
  
  const [sort, setsort] = useState(0);
  return (
    <>
    <Router>
      <Header setsort={setsort}/>
      <Routes>
          <Route path="/" element={<Home sorte={sort} />} />
          <Route path="/add" element={<AddExpense  />} />
          <Route path="/edit" element={<EditExpense />} />
          <Route path="/delete" element={<DeleteExpense />} />
          <Route path="/search" element={<SearchPage sorting={sort} />} />
        </Routes>
    </Router>
    
    </>
  )
}

export default App
