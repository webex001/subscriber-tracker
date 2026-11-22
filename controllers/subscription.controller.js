import Subscription from "../model/subscription.model.js";

export const createSubscription = async (req, res) => {
  try {
    // Implementation for creating a new subscription
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id, // Assuming the user is authenticated and available in req.user
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: subscription,
    });
    // next();
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create subscription",
      error: error.message,
    });
    // next(error);
  }
};

export const getUserSubscriptions = async (req, res) => {
  try {
    if (req.user.id !== req.params.userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view these subscriptions",
      });
    }

    const subscriptions = await Subscription.find({ user: req.params.userId });

    res.status(200).json({
      success: true,
      message: "User subscriptions retrieved successfully",
      data: subscriptions,
    });
  } catch (error) {
    console.error("Error fetching user subscriptions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user subscriptions",
      error: error.message,
    });
  }
};

export const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.status(200).json({
      success: true,
      message: "Subscriptions retrieved successfully",
      data: subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch subscriptions",
      error: error.message,
    });
  }
};
