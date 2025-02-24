import { useState, useEffect } from "react";
import axios from "axios";

export const useGame = () => {
  const [board, setBoard] = useState<(string | null)[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  useEffect(() => {
    axios.get("http://localhost:3000/api/game").then((response) => {
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
    });
  }, []);

  const handleClick = async (row: number, col: number) => {
    if (board[row][col]) return;

    
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[row][col] = currentPlayer;

    setBoard(newBoard);
    
  
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

    await axios.put("http://localhost:3000/api/game", {
      board: newBoard,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
    });
  };

  return { board, currentPlayer, handleClick };
};
