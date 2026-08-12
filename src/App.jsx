import { useState } from "react";





function App(){

// const [val,setval]=useState("anil sidhu")  this will be used when we have to give a default value
const [val,setval]=useState("")
  return(
    <div>
     <h1>Get input field value</h1>
     <input type="text"   value={val} onChange={(event)=>setval(event.target.value)} placeholder="enter username"/>
     <h1>{val}</h1>
     <button onClick={()=>setval("")}>clear Value</button>
    </div>
  )
}

export default App;