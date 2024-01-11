import { useState } from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import StarRating from "./Components/StarRating/StarRating";
import Modal from "./Components/Modal/Modal";
import SideNav from "./Components/SideNav/SideNav";
import FetchHook from "./Components/FetchHook/FetchHook";

function App() {
  return (
    <div>
      {/* <TicTacToe/> */}
      {/* <StarRating/> */}
      {/* <Modal/> */}
      {/* <SideNav/> */}
      <FetchHook />
    </div>
  );
}

export default App;
