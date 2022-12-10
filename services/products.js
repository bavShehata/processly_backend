const { ObjectId } = require('mongoose').Types;

const ProductModel = require('../models/Product');

module.exports.findAllProducts = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (err) {
    throw new Error('Could not retrieve products.');
  }
};

module.exports.findProductById = async (productId) => {
  try {
    const product = await ProductModel.findById(productId)
    return product;
  } catch (err) {
    throw new Error('Could not find product.');
  }
};

module.exports.addNewProduct = async (productInfo) => {
  try {
    const product = new ProductModel({
      name: productInfo.name,
      price: productInfo.price,
      imgUrl: productInfo.imgUrl,
      sizes: productInfo.size
      
    });
    const createdProduct = await product.save();
    return createdProduct;
  } catch (err) {
    throw new Error('Could not create product.');
  }
};

module.exports.removeProduct = async (productId) => {
  try {
    await ProductModel.deleteOne({ _id: productId });
  } catch (err) {
    throw new Error('Could not remove product.');
  }
};

module.exports.editProduct = async (req) => {
  try {
    const product = await OrderModel.findByIdAndUpdate(
      req.query.productId,
      { name: req.body.name, price: req.body.price,  imgUrl: req.body.imgUrl, sizes: req.body.size},
      { returnDocument: "after" }
    );
    return order;
  } catch (err) {
    throw new Error("Could not update Product .", err);
  }
};
