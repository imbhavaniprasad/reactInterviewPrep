import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import StarRating from "./Components/StarRating/StarRating";
import Modal from "./Components/Modal/Modal";
import SideNav from "./Components/SideNav/SideNav";
import FetchHook from "./Components/FetchHook/FetchHook";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div>
      {/* <TicTacToe/> */}
      {/* <StarRating/> */}
      {/* <Modal/> */}
      {/* <SideNav/> */}
      {/* <FetchHook /> */}
      <TodoList />
    </div>
  );
}

export default App;
