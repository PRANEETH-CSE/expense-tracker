import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./navbar";
import Home from './Home'
import EditExpense from './Editexpense'
import AddExpense from './Addexpense'
import DeleteExpense from './Deleteexpenses'
import SearchPage from './searchexpense';
import './App.css'
function App() {
  

  return (
    <>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit" element={<EditExpense />} />
          <Route path="/delete" element={<DeleteExpense />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
    </Router>
    
    </>
  )
}

export default App
