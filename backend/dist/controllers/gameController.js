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
exports.resetGame = exports.updateGameState = exports.getGameState = void 0;
const game_1 = __importDefault(require("../models/game"));
const getGameState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield game_1.default.findOne({ order: [["createdAt", "DESC"]] });
    res.json(game);
});
exports.getGameState = getGameState;
const updateGameState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { board, currentPlayer, winner } = req.body;
    const newGame = yield game_1.default.create({ board, currentPlayer, winner });
    res.json(newGame);
});
exports.updateGameState = updateGameState;
const resetGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield game_1.default.destroy({ where: {} });
    res.json({ message: "Game reset successfully" });
});
exports.resetGame = resetGame;
