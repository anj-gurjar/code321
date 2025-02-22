import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db.config";

class Game extends Model {}

Game.init(
  {
    board: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: Array(9).fill(null),
    },
    currentPlayer: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "X",
    },
    winner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "game" }
);

export default Game;
