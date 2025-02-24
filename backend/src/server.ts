import express from "express";
import cors from "cors";
import gameRoutes from "./routes/gameRoutes";
import sequelize from "./config/db.config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", gameRoutes);

 sequelize.authenticate();
		console.log('db connected successfully.');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
