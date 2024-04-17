import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import {  removeTodo } from "../actions/index";
import AddTodo from "./AddTodo"; 
import DeleteTodo from "./DeleteTodo"; 

// Header component
const Header = () => {
  return (
    <header>
      <div className="logo">Todo App</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};


//Footer Component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Todo App. All rights reserved.</p>
    </footer>
  );
};

//Todo component
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your Todo here 🤘</figcaption>
          </figure>
          <AddTodo setInputData={setInputData} dispatch={dispatch} />
          <div className="showItems">
            {list.map((elem) => (
              <DeleteTodo key={elem.id} id={elem.id} data={elem.data} />
            ))}
          </div>
          <div className="showItem">
            <button
              className="btn-effect04"
              data-sm-link="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Todo;
