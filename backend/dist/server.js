"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const db_config_1 = __importDefault(require("./config/db.config"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", gameRoutes_1.default);
db_config_1.default.authenticate();
console.log('db connected successfully.');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
