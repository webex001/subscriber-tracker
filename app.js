import express from "express";
import { PORT } from "./config/env.js";
import subscriptionRouter from "./routes/subscription.route.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.route.js";
import connectDB from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await connectDB();
});

export default app;
