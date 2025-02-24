"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController");
const router = (0, express_1.Router)();
router.get("/game", gameController_1.getGameState);
router.put("/game", gameController_1.updateGameState);
router.post("/game/reset", gameController_1.resetGame);
exports.default = router;
