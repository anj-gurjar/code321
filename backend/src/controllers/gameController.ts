import {Request,Response} from "express";
import Game from "../models/game";

export const getGameState = async (req: Request, res: Response) => {
  const game = await Game.findOne({ order: [["createdAt", "DESC"]] });
  res.json(game);
};

export const updateGameState = async (req: Request, res: Response) => {
  const { board, currentPlayer, winner } = req.body;
  const newGame = await Game.create({ board, currentPlayer, winner });
  res.json(newGame);
};

export const resetGame = async (req: Request, res: Response) => {
  await Game.destroy({ where: {} });
  res.json({ message: "Game reset successfully" });
};
 
