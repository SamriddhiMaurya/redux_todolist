// DeleteTodo.js
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/index";

//Deletetodo component
const DeleteTodo = ({ id, data }) => {
  const dispatch = useDispatch();

  //Function
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="eachItem">
      <h3>{data}</h3>
      <div className="todo-btn">
        <i
          className="far fa-trash-alt add-btn"
          title="Delete Item"
          onClick={handleDeleteTodo}
        ></i>
      </div>
    </div>
  );
};

export default DeleteTodo;
