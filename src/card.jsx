import React from 'react'

function card({myname,list,details}) {
    console.log(myname);
  return (
    <>
    <div>
      This is out
    </div>
    <h1>{details.gender}</h1>
    <h2>{details.name?.first}</h2>
    <ul>
      {list.map(l =>(
        <li key = {l} >{l}</li>
      ))}
    </ul>
    </>
  )
}

export default card
