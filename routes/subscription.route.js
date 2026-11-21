import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send("Get all subscriptions");
});

subscriptionRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Get subscription with ID: ${id}`);
});

subscriptionRouter.post("/", (req, res) => {
  res.send("Create a new subscription");
});

subscriptionRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Update subscription with ID: ${id}`);
});

subscriptionRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Delete subscription with ID: ${id}`);
});

subscriptionRouter.get("/user/:id", (req, res) => {
  const { userId } = req.params;
  res.send(`Get subscriptions for user with ID: ${userId}`);
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  const { id } = req.params;
  res.send(`Cancel subscription with ID: ${id}`);
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send("Get upcoming subscription renewals");
});

subscriptionRouter.get("/expired", (req, res) => {
  res.send("Get expired subscriptions");
});

subscriptionRouter.get("/active", (req, res) => {
  res.send("Get active subscriptions");
});

export default subscriptionRouter;
