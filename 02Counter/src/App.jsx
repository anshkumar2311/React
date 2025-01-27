import { useState } from 'react'
import './index.css'

function App() {

  let [counter, setcounter]=useState(0)
  // let counter = 0
  function addvalue() {
    if (counter >= 0 && counter <20){
      counter += 1;
    }
    else {
      return counter = 0
    }

    console.log(setcounter(counter))
  };
  const decvalue = () => {
    if (counter <= 0){
      return counter = 0
    }
    else {
      counter -= 1;
    }

    console.log(setcounter(counter))
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Counter</h1>
      <div>
        <h3 className="text-center text-xl mt-2">Counter:{counter}</h3>
        <div className="flex flex-col items-center mt-5">
          <button onClick={addvalue} className="cursor-pointer p-1 flex w-fit bg-amber-300">Add value</button>
          <button onClick={decvalue} className="cursor-pointer w-fit mt-1 p-1 bg-blue-400">Dec value</button>
        </div>
      </div>
    </>
  )
}

export default App
