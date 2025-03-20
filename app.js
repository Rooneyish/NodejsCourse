import express from "express";
import connectDB from "./database/mongodb.js";
import authRouter from "./routes/auth.js";
import 'dotenv/config';
import userRouter from "./routes/user.js";

const app = express();
const port = 7000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Node js course!");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
  await connectDB();
});