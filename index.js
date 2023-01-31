import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";

config();
const app = express();
const port = process.env.PORT || 5000;

// using middleware
app.use(cors());
app.use(json());

// localhost server setup
const server = app.listen(port, "localhost", () => {
  const { address, port } = server.address();

  console.log(`🌐 Running at: http://${address}:${port}`);
});

// basic server setup
app.get("/", (req, res) => {
  res.sendStatus(200);
});
