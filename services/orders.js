const OrderModel = require("../models/Order");

module.exports.addNewOrder = async (orderInfo) => {
  const order = new OrderModel({
    deliveryNote: orderInfo.deliveryNote,
    email: orderInfo.email,
    productId: orderInfo.productId,
    quantity: orderInfo.quantity,
    status: orderInfo.status,
    totalPrice: orderInfo.totalPrice,
  });
  try {
    const addedOrder = await order.save();
    return addedOrder;
  } catch (error) {
    console.log(error);
    throw new Error("Could not add order.");
  }
};

module.exports.findOrders = async (user_email) => {
  try {
    console.log("user email: ", user_email);
    const orders =
      user_email === "all"
        ? await OrderModel.find()
        : await OrderModel.find({ email: user_email });
    return orders;
  } catch (err) {
    throw new Error("Could not retrieve orders.");
  }
};
