import React from "react";
import useGame from "../hooks/useGames";
import axios from "axios";

const Board: React.FC = () => {
  const { board = [], currentPlayer, winner, handleClick } = useGame();

  const handleRestart = async () => {
    await axios.post("http://localhost:3000/api/game/reset"); 
    window.location.reload(); 
  };

  return (
    <div>
      <h1>Current Player: {currentPlayer}</h1>
      {winner && <h2>🎉 Winner: {winner} 🎉</h2>}
      <table className="grid">
        <tbody>
          {board.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: string | null, colIndex: number) => (
                <td key={colIndex}>
                  <button onClick={() => handleClick(rowIndex, colIndex)} disabled={!!winner}>
                    {cell || "-"}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={handleRestart} style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}>
        🔄 Restart Game
      </button>
    </div>
  );
};

export default Board;
