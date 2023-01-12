import React from "react";
import { useSelector } from "react-redux";
import "../components/result.css";

const Result = () => {
  const { total } = useSelector((state) => state);
  console.log(total);
  return (
    <div className="result-container">
      <h1>This is result</h1>
      <h1>{total}</h1>
    </div>
  );
};

export default Result;
