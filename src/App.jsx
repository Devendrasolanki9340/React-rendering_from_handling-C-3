import { useState } from "react";
const App = () => {
    
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name:"ranam"
  })
  
  return (
    <div>
      <h1>count is {count}</h1>
      <h1>name is {user.name}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>

      <button onClick={()=>{
        setUser({name:"devendra"})
      }}>Change name</button>
    </div>
  )
}

export default App
