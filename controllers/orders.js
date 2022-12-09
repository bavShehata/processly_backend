// import the validationResult method from express validator
const { validationResult } = require("express-validator");

const azMapsService = require("../services/azMaps");
const ordersService = require("../services/orders");

module.exports.getOrders = async (req, res) => {
  try {
    const orders = await ordersService.findOrders();
    return res.send({ orders });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message,
    });
  }
};

module.exports.postOrder = async (req, res) => {
  // get validation errors in the form of an array.
  // const validationErrors = validationResult(req).array();
  // if (validationErrors.length > 0) {
  //   const firstError = validationErrors[0];
  //   return res.status(422).send({
  //     error: firstError.msg,
  //   });
  // }
  console.log("Order body: ", req.body);
  const orderInfo = {
    date: req.body.date,
    deliveryNote: req.body.deliveryNote,
    email: req.body.email,
    productId: req.body.productId,
    quantity: req.body.quantity,
    status: req.body.status,
    totalPrice: req.body.totalPrice,
  };

  try {
    // const supplierCoords = await azMapsService.geocodeAddress(req.body.address);
    // if supplierCoords is null, which means that no location is found using the given address
    // if (!supplierCoords) {
    //   return res.status(422).send({
    //     error: "Could not find a valid location using the given address.",
    //   });
    // }

    const addedOrder = await ordersService.addNewOrder(
      orderInfo
      //supplierCoords
    );

    res.send({
      msg: "Order added successfully.",
      supplierId: addedOrder._id,
    });
  } catch (err) {
    res.status(500);
    res.send({
      error: `Couldn't add order ${err.message}`,
    });
  }
};
