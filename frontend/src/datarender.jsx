
export async function fetchdata() {
  try {
    const res = await fetch("https://expense-tracker-1-re0a.onrender.com/api/expenses");
    const data = await res.json();
    return data; // ✅ directly return the data
  } catch (err) {
    console.error("Error fetching expenses:", err);
    throw err;
  }
}

export async function renndering(rawdata){
if (!rawdata) return <div>Loading...</div>;
else{
        var clore;
        var monthlydetails=[];
        for (var i in rawdata[0].data) {
          var year = i ; 
          var yearly = rawdata[0].data;
          
          for (var j in yearly[i]) {
                  var _month  = j;
                  var monthly = yearly[i][j] ;
                  var monthlyexpense = [];
                  for (var k in monthly){
                          var allexpense = [];
                          var _budget = monthly.budget;
                          var _spend = monthly.spend;
                          var _savings = _budget - _spend;
                          
                          if (_savings >0){ clore = "green"; }
                          else{clore = "red"}
                          
                          
                          
                          var transactions = monthly.transactions;
                          var expesns = transactions.map((e) => {
                                  return(<div className="expenses">
                                        <div className="expensename">{e.description}</div>
                                        <div className="date">{e.date}</div>
                                        <div className="amount">{e.amount}</div>
                                </div>)  });
                        allexpense = [...allexpense, ...expesns]; }
                        
                        
                        monthlyexpense = [<div className="expensecontainer">
                                        <div className="yearmonth">
                                                <div className="month">{_month}</div>
                                                <div className="year">{year}</div>
                                        </div>
                                        <div className="container">
                                                    <div className="details">
                                                            <div className='budjet'>Budjet:{_budget}</div>
                                                            <div className='savings'>Savings:<span className= {`${clore}`}>{ _savings }</span></div>
                                                            <div className= {`spend `}>Spend: <span className= {`${clore}`}>{ _spend }</span> </div>
                                                    </div>
                                                    {allexpense}  
                                        </div>
                                 </div>];

monthlydetails = [...monthlydetails, ...monthlyexpense];

}}
var data = monthlydetails ;
return data;
        }}



export async function searchrenndering(rawdata,category,date){
if (!rawdata) return <div>Loading...</div>;
else{
        var perfmatches =[];
        var allexpense =[];
        for (var i in rawdata[0].data) {
          var year = i ; 
          var yearly = rawdata[0].data;
          
          for (var j in yearly[i]) {
                  var _month  = j;
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
  );}}





export function findexpense(rawdata,category,date){

for (var i in rawdata[0].data) {
          var year = i ; 
          var yearly = rawdata[0].data;
          
          for (var j in yearly[i]) {
                  var _month  = j;
                  var monthly = yearly[i][j] ;
                for (var k in monthly){
                        var transactions = monthly.transactions;
                        var expesns = transactions.map((e) => {
                            if(e.description === category && e.date === date){
                                    console.log("found"); 
                                return([category,date,e.amount])}
                            else{return (0)}})


                
                
        }}}}

function findyeardate(date) {
  date = String(date);
  var allmonth = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var yeardate = date.split("-");
  var year = yeardate[0];
  var monthnum = Number(yeardate[1]);
  var month = allmonth[monthnum - 1];
  return [year, month];
}

export async function deletedata(date, category) {
  const [year, month] = findyeardate(date);

  const res = await fetch(`https://expense-tracker-1-re0a.onrender.com/api/delete`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category,
      date,
      year,
      month,
      
    })
  });
  
  const data = await res.json();
  return (await data) ;
}


export async function adddata(date, category,amount) {
  const [year, month] = findyeardate(date);
  
  const res = await fetch(`https://expense-tracker-1-re0a.onrender.com/api/add`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      category,
      date,
      year,
      month,
      amount 
      
    })
  });
  
  const data = await res.json();
  
  return (await data) ;
}

