import { useSearchParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {fetchdata,searchrenndering} from './datarender';
import Load from './loadanimation';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 
  const category = searchParams.get("category") || "";
  const date = searchParams.get("date") || "";
  var [final,setfinal] = useState("");
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetchdata();
        var rawdata= await res;
        setfinal(searchrenndering(rawdata,category,date));}
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
  </>)
}
}

export default SearchPage;



