import Card from "./card"
import React, { useEffect, useState } from "react";
import Axios from 'axios'
function App() {
  let list = ["naresh","suresh","paresh"]

  const [details ,setDetails] = useState({});
  const fetchdetails = async()=>{
        const {data} = await Axios.get('https://randomuser.me/api')
        console.log('RESPONSE',data)
        const details = data.results[0];
        setDetails(details)
  }

  useEffect(()=> {
    fetchdetails()
  },[])
  return (
   <>
    <div className="root">
      This is prd
    </div>
    <Card myname ="naresh" list ={list} details ={details} />
    <button onClick={fetchdetails}>getDetails</button>

   </>
    
  );
}

export default App;
