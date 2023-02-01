import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";

config();
const app = express();
const port = process.env.PORT || 5000;

// using middleware
app.use(cors());
app.use(json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_CLUSTER_URL}/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", true);
mongoose
  .connect(uri, {
    dbName: `${process.env.DB_NAME}`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: "1"
  })
  .catch(err => console.log(err));

// localhost server setup
const server = app.listen(port, "localhost", () => {
  const { address, port } = server.address();

  console.log(`🌐 Running at: http://${address}:${port}`);
});

// basic server setup
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.use("/todo", todoRouter);
