import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("Get all users");
});

userRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get user with ID: ${id}`);
});

userRouter.post("/", (req, res) => {
  res.send("Create a new user");
});

userRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update user with ID: ${id}`);
});

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete user with ID: ${id}`);
});

export default userRouter;
