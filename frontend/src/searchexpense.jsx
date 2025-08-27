import { useSearchParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import {fetchdata,searchrenndering,sortsearchrenndering} from './datarender';
import Load from './loadanimation';
import './searchexpense.css' 

function SearchPage({sorting}) {
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
        if(sorting == 'date'){
          setfinal(sortsearchrenndering(rawdata,category,date));}
          else{
          setfinal(searchrenndering(rawdata,category,query,date));}
        }
      catch (err) {console.error("Error fetching data:", err);}};
loadData();}, [sorting]);

if (!final){
  return (<Load/>);  }
else{

  return(<>
  <div className="fullcontain">{final}</div>
  </>)
}
}

export default SearchPage;



