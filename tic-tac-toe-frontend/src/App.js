"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Board_1 = __importDefault(require("./components/Board"));
const App = () => {
    return (<div className="App">
      <h1>Tic-Tac-Toe</h1>
      <Board_1.default />
    </div>);
};
exports.default = App;
