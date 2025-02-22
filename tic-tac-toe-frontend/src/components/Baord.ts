import React from "react";
import { useGame } from "../hooks/useGame";

const Board: React.FC = () => {
  const { board, currentPlayer, handleClick } = useGame();

  return (
    <div>
      <h1>Current, Player: {currentPlayer}</h1>
      <div className="grid">
        {board.map((cell, index) => (
          <button key={index} onClick={() = handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
