// import Express Router from express
const { Router } = require("express");

// import our productsController
const bmanagmentController = require("../controllers/products");
const authMiddlewares = require("../middelwares/authorization");

// create an instance of Express Router.
const bmanagmentRouter = Router();

// whenever we receive a GET request on products route '/',
// we will invoke the getProducts method in the products controller.
bmanagmentRouter.get("/", bmanagmentController.getProducts);

// whenever we receive a POST request on products route '/',
// we will invoke the postProduct method in the products controller.
bmanagmentRouter.post("/", bmanagmentController.postProduct);

// whenever we receive a GET request on products DYNAMIC route '/:productId',
// we will invoke the getProduct method in the products controller that extracts the productId
bmanagmentRouter.get("/:productId", bmanagmentController.getProduct);

bmanagmentRouter.delete("/:productId", bmanagmentController.deleteProduct);

// export the router instance we created.
module.exports = bmanagmentRouter;
