import React from "react";
import "./todo.css";
import { useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useDispatch } from "react-redux";
import { useState } from "react";



const Header = () => {
  return (
    <header>
      <div className="logo">Todo App</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>

        </ul>
      </nav>
    </header>
  );
};
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Todo App. All rights reserved.</p>
    </footer>
  );
};
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
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => {
                        dispatch(deleteTodo(elem.id));
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
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
