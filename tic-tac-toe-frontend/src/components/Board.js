"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useGames_1 = require("../hooks/useGames");
const Board = () => {
    const { board = [], currentPlayer, handleClick } = (0, useGames_1.useGame)();
    return (<div>
      <h1>Current: Player {currentPlayer}</h1>
      <table className="grid">
        <tbody>
          {board.map((row, rowIndex) => (<tr key={rowIndex}>
              {row.map((cell, colIndex) => (<td key={colIndex}>
                  <button onClick={() => handleClick(rowIndex, colIndex)}>
                    {cell || "-"}
                  </button>
                </td>))}
            </tr>))}
        </tbody>
      </table>
    </div>);
};
exports.default = Board;
