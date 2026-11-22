import { Router } from "express";
import {
  createSubscription,
  getUserSubscriptions,
  getSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getSubscriptions);

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

// subscriptionRouter.put("/:id", authorize, getUserSubscriptions);

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
