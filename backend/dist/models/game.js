"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require(".././config/db.config"));
class Game extends sequelize_1.Model {
}
Game.init({
    board: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: Array(9).fill(null),
    },
    currentPlayer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: "X",
    },
    winner: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, { sequelize: db_config_1.default, modelName: "game" });
exports.default = Game;
