import React from "react";
import Board from "./components/Board";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};

export default App;
