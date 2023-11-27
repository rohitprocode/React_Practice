import { useState } from "react";
import { useEffect } from "react";
import './App.css'

function App() {

  const [Count,setCount] = useState(0)
  const [Data,setData] = useState(0)

  function CountIncrease(){
    setCount(Count+1)
  }

  function DataIncrease(){
    setData(Data+1)
  }
  

  useEffect(()=>{
    console.log("useEffect Called")
  },[Data])

  return (
    <div className="App">
      <h1>Count {Count}</h1>
      <button onClick={()=>CountIncrease()}>Increase Count Value</button>
      <h1>Data {Data}</h1>
      <button onClick={()=>DataIncrease()}>Increase Data Value</button>
    </div>
  )
}

export default App;
