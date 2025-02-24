"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGame = void 0;
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const useGame = () => {
    const [board, setBoard] = (0, react_1.useState)(Array(3)
        .fill(null)
        .map(() => Array(3).fill(null)));
    const [currentPlayer, setCurrentPlayer] = (0, react_1.useState)("X");
    (0, react_1.useEffect)(() => {
        axios_1.default.get("http://localhost:3000/api/game").then((response) => {
            setBoard(response.data.board);
            setCurrentPlayer(response.data.currentPlayer);
        });
    }, []);
    const handleClick = (row, col) => __awaiter(void 0, void 0, void 0, function* () {
        if (board[row][col])
            return;
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
        yield axios_1.default.put("http://localhost:3000/api/game", {
            board: newBoard,
            currentPlayer: currentPlayer === "X" ? "O" : "X",
        });
    });
    return { board, currentPlayer, handleClick };
};
exports.useGame = useGame;
