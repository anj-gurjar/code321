"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("./../config/db.config"));
// import sequelize from "../../config/db.config";
class Player extends sequelize_1.Model {
}
Player.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    symbol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
}, { sequelize: db_config_1.default, modelName: "player" });
exports.default = Player;
