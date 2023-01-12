import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Result from "./components/Result";

function App() {
  const [num, setNum] = useState(0);

  // Cara nerima data dari redux atau store nya
  const { total } = useSelector((state) => state)
  console.log(total);

  const handleNumPlus = () => {
    setNum((prevState) => prevState + 1);
  };

  const handleNumMinus = () => {
    setNum((prevState) => prevState - 1);
  };

  return (
    <div className="app-container">
      <div className="increment-decrement-container">
        <div className="plus">
          <button onClick={handleNumPlus}>+</button>
        </div>
        <div className="minus">
          <button onClick={handleNumMinus}>-</button>
        </div>
      </div>
      <div className="num-container">
        <div>
          <h1>{num}</h1>
        </div>
      </div>
      <Result />
    </div>
  );
}

export default App;
