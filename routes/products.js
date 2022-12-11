const { Router } = require('express');

const productsController = require('../controllers/products');
const authMiddlewares = require('../middelwares/authorization');

const productsRouter = Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.post('/', productsController.postProduct);


productsRouter.get('/:productId', productsController.getProduct);

productsRouter.delete('/:productId', productsController.deleteProduct);

productsRouter.put("/", productsController.editProduct)

module.exports = productsRouter;
