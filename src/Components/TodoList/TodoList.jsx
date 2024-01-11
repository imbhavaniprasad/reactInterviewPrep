import React, { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./index.css";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const add = useRef();
  //   useEffect(() => {
  //     document.addEventListener("click");
  //   }, []);
  const addTodo = () => {
    if (todo) {
      setTodos((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          todo: todo,
          status: true,
        },
      ]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleComplete = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: false } : item
    );
    setTodos(updatedTodos);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="container">
      <div className="todolist">
        <div className="input__box">
          <input
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter Todo..."
            onKeyDown={handleKeyPress}
          />
          <button ref={add} onClick={addTodo}>
            Add
          </button>
        </div>
        <div className="todos">
          {todos &&
            todos.map((item) => {
              return (
                <div className="todo" key={item.id}>
                  <li>
                    <p
                      style={{
                        textDecoration:
                          item.status == true ? null : "line-through",
                      }}
                    >
                      {item.todo}
                    </p>
                  </li>
                  <div>
                    <FaCheck
                      onClick={() => handleComplete(item.id)}
                      className="fa_icons"
                    />

                    <FaTrash
                      onClick={() => handleDelete(item.id)}
                      className="fa_icons"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
