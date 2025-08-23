import './showexpense.css';
import { useEffect,useState } from 'react';
import {fetchdata,renndering} from './datarender';



function Expenses(){
  var [final,setfinal] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchdata();
        var rawdata= await res;
        setfinal(renndering(rawdata));}
      catch (err) {console.error("Error fetching data:", err);}
};
loadData();
}, []);

return(<>{final}</>)

}

export default Expenses;