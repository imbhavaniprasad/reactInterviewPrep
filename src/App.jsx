import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import StarRating from "./Components/StarRating/StarRating";
import Modal from "./Components/Modal/Modal";
import SideNav from "./Components/SideNav/SideNav";
import FetchHook from "./Components/FetchHook/FetchHook";
import TodoList from "./Components/TodoList/TodoList";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div>
      {/* <TicTacToe/> */}
      {/* <StarRating/> */}
      {/* <Modal/> */}
      {/* <SideNav/> */}
      {/* <FetchHook /> */}
      {/* <TodoList /> */}
      <Slider />
    </div>
  );
}

export default App;
