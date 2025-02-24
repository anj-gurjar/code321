import { Router } from "express";
import { getGameState,  updateGameState, resetGame } from "../controllers/gameController";

const router = Router();

router.get("/game", getGameState);
router.put("/game", updateGameState);
router.post("/game/reset", resetGame);

export default router;
