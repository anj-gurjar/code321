import { useState, useEffect } from "react";
import axios from "axios";

export const useGame = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");

  useEffect(() => {
    axios.get("http://localhost:3000/api/game").then((response) => {
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
    });
  }, []);

  const handleClick = async (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    const nextPlayer = currentPlayer === "X" ? "O" : "X";

    setBoard(newBoard);
    setCurrentPlayer(nextPlayer);

    await axios.put("http://localhost:3000/api/game", {
      board: newBoard,
      currentPlayer: nextPlayer,
    });
  };

  return { board, currentPlayer, handleClick };
};
