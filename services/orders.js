const OrderModel = require("../models/Order");

module.exports.addNewOrder = async (orderInfo) => {
  const order = new OrderModel({
    date: orderInfo.date,
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
    const orders =
      user_email === "all"
        ? OrderModel.find()
        : OrderModel.find({ email: user_email }, (err, docs) => {
            if (err) throw new Error("orders couldn't be fetched: ", err);
            return docs;
          });
    return orders;
  } catch (err) {
    throw new Error("Could not retrieve orders.");
  }
};
