import { useState, useEffect } from "react";
import axios from "axios";

 const useGame = () => {
  const [board, setBoard] = useState<(string | null)[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/game").then((response) => {
      setBoard(response.data.board);
      setCurrentPlayer(response.data.currentPlayer);
      setWinner(response.data.winner);
    });
  }, []);

  const checkWinner = (board: (string | null)[][]): string | null => {
    const winningCombinations = [
   
      [ [0, 0], [0, 1], [0, 2] ],
      [ [1, 0], [1, 1], [1, 2] ],
      [ [2, 0], [2, 1], [2, 2] ],
 
      [ [0, 0], [1, 0], [2, 0] ],
      [ [0, 1], [1, 1], [2, 1] ],
      [ [0, 2], [1, 2], [2, 2] ],
   
      [ [0, 0], [1, 1], [2, 2] ],
      [ [0, 2], [1, 1], [2, 0] ],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a[0]][a[1]] && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
        return board[a[0]][a[1]];
      }
    }
    return null;
  };

  const handleClick = async (row: number, col: number) => {
    if (board[row][col] || winner) return;

    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[row][col] = currentPlayer;

    const newWinner = checkWinner(newBoard);
    setBoard(newBoard);
    setWinner(newWinner);

    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

    await axios.put("http://localhost:3000/api/game", {
      board: newBoard,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      winner: newWinner,
    });
  };

  return { board, currentPlayer, winner, handleClick };
};
export default useGame