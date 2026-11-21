import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send("Login user");
});

authRouter.post("/register", (req, res) => {
  res.send("Register user");
});

export default authRouter;
