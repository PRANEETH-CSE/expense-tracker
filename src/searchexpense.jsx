import { useSearchParams } from "react-router-dom";

import rawdata from '../finance.json';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); 
  const category = searchParams.get("category") || "";
  const date = searchParams.get("date") || "";
  console.log("Search query:", {category}, {date}); 

    var allexpense = [];
    var perfmatches =[];
    
    
    for (var i in rawdata.data) {
        var year = i ; 
        var yearly = rawdata.data;
        
        for (var j in yearly[i]) {
                var monthly = yearly[i][j] ;
                for (var k in monthly){
                        var transactions = monthly.transactions;
                        var expesns = transactions.map((e) => {
                            if(e.description === category && e.date === date){
                                var perfmatch = [<div className="expenses">
                                        <div className="expensename">{e.description}</div>
                                        <div className="date">{e.date}</div>
                                        <div className="amount">{e.amount}</div>
                                </div>];
                                perfmatches = [...perfmatches, ...perfmatch] }

                            else if(e.description === category || e.date === date){
                                return(<div className="expenses">
                                        <div className="expensename">{e.description}</div>
                                        <div className="date">{e.date}</div>
                                        <div className="amount">{e.amount}</div>
                                </div>)  }});
                        allexpense = [...allexpense, ...expesns]; }


                
                
        }
}

        var data = [...perfmatches,...allexpense];
  return (
    <>
        <div className="expensecontainer">

            {data}
        </div>
    </>
  );
}

export default SearchPage;



