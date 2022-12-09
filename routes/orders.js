const { Router } = require("express");

const ordersController = require("../controllers/orders");

const ordersRouter = Router();

ordersRouter.get("/", ordersController.getOrders);

ordersRouter.post("/", ordersController.postOrder);

module.exports = ordersRouter;
