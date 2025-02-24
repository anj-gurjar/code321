import { DataTypes, Model } from "sequelize";
import sequelize from "./../config/db.config";

// import sequelize from "../../config/db.config";

class Player extends Model {}

Player.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "player" }
);

export default Player;
