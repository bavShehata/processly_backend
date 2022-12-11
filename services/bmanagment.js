const OrderModel = require("../models/Order");

module.exports.addNewOrder = async (orderInfo) => {
  const order = new OrderModel({
    deliveryNote: orderInfo.deliveryNote,
    email: orderInfo.email,
    productId: orderInfo.productId,
    quantity: orderInfo.quantity,
    status: orderInfo.status,
    totalPrice: orderInfo.totalPrice,
    size: orderInfo.size,
  });
  try {
    const addedOrder = await order.save();
    return addedOrder;
  } catch (error) {
    throw new Error("Could not add order.", error);
  }
};

module.exports.findOrders = async (user_email) => {
  try {
    const orders =
      user_email === "all"
        ? await OrderModel.find()
        : await OrderModel.find({ email: user_email });
    return orders;
  } catch (err) {
    throw new Error("Could not retrieve orders.");
  }
};

module.exports.getOrder = async (order_id) => {
  try {
    const order = await OrderModel.findById(order_id);
    return order;
  } catch (err) {
    throw new Error("Could not retrieve order of id .", order_id);
  }
};

module.exports.editOrder = async (req) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(
      req.query.orderId,
      { deliveryNote: req.body.deliveryNote, status: req.body.status },
      { returnDocument: "after" }
    );
    return order;
  } catch (err) {
    throw new Error("Could not update order .", err);
  }
};
