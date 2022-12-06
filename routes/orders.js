const { Router } = require("express");

const ordersController = require("../controllers/orders");

const ordersRouter = Router();

ordersRouter.get("/", ordersController.getSuppliers);

module.exports = ordersRouter;
