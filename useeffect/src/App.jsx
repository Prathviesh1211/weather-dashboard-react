import React, { useEffect, useState } from 'react'

const App = () => {
  const[cnt,setCnt]=useState(0);
  const[cnt1,setCnt1]=useState(0);

  useEffect(()=>{
    alert("rendered ....")
    alert("rendered cnt2 ....")
  },[])

  useEffect(()=>{
    alert("rendered ....")
    alert("rendered cnt2 ....")
  },[cnt1])



  const handleClick=()=>{
    setCnt(c=>c+1)
  }
  const handleClick1=()=>{
    setCnt1(c=>c+1)
  }

  return (
    <div>
      <h2>Count : {cnt}</h2>
      <button onClick={handleClick}>count</button>
      <h2>Count : {cnt1}</h2>
      <button onClick={handleClick1}>count</button>
    </div>
  )
}

export default App
