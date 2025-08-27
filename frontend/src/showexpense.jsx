import './showexpense.css';
import { useEffect,useState } from 'react';
import {fetchdata,renndering} from './datarender';
import Load from './loadanimation';
import { useNavigate } from "react-router-dom";

function Expenses({sorting}){
  
    const navigate = useNavigate();
  var [final,setfinal] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchdata();
        var rawdata= await res;
        
        setfinal(renndering(rawdata,navigate));}
      catch (err) {console.error("Error fetching data:", err);}
};
loadData();
}, []);
if (!final){
  return (<Load/>);
  
}
else{

  return(<>
  <div className="fullcontain">{final}</div>
  </>
    
  )
}

}

export default Expenses;