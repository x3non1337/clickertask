import React, {useState} from 'react';
import './App.css';

function App()
{
  const [i, setI] = useState(0);

  function getColor() {
    if (i % 2 === 0) {
      return "green";
    } else {
      return "red";
    }
  }

  function PlusClick()
  {
    setI(i + 1);
    console.log(i)
  }

  function MinusClick()
  {
    setI(i - 1);
    if ((i - 1) <= 0)
    {
      setI(0);
    }
  }


  return <div className="App">
    <button onClick={MinusClick}>-</button>
    <button onClick={PlusClick}>+</button>
    <h1 className={getColor()}>{i}</h1>
  </div>
}

export default App;
