import AstronautDisplay from "../AstronautDisplay";
import React, {useState} from "react";
import './App.css';

function App() {
  const [id, setId] = useState(1);

  function getRandomId(){
    setId(Math.floor(Math.random()*150+1));
  }

  return (
    <div>
      <button onClick={getRandomId}>Get Pokemon</button>
      <AstronautDisplay id={id}></AstronautDisplay>
    </div>
  )
}

export default App;
