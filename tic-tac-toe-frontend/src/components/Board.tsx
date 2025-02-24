import React from "react";
import { useGame } from "../hooks/useGames";

const Board: React.FC = () => {
  const { board = [], currentPlayer, handleClick } = useGame();

  return (
    <div>
      <h1>Current: Player {currentPlayer}</h1>
      <table className="grid">
        <tbody>
          {board.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: string | null, colIndex: number) => (
                <td key={colIndex}>
                  <button onClick={() => handleClick(rowIndex, colIndex)}>
                    {cell || "-"}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
