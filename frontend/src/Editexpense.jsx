import Edit from "./edit";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";



function EditExpense () {
 const location = useLocation();
 const {category,date,amount} = location.state || {};
 
  
  return (
   <>
    <Edit details={{category , date , amount}}/>
   </>
   
  )};

export default EditExpense;