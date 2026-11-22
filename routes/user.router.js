import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send("Create a new user");
});

userRouter.put("/:id", authorize, (req, res) => {
  const { id } = req.params;
  res.send(`Update user with ID: ${id}`);
});

userRouter.delete("/:id", authorize, (req, res) => {
  const { id } = req.params;
  res.send(`Delete user with ID: ${id}`);
});

export default userRouter;
