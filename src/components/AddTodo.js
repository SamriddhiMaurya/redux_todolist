// AddTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const AddTodo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(inputData));
    setInputData("");
  };

  return (
    <div className="addItems">
      <input
        type="text"
        placeholder="✍️ Add Items..."
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      <i className="fa fa-plus add-btn" onClick={handleAddTodo}></i>
    </div>
  );
};

export default AddTodo;
