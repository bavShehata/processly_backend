const OrderModel = require("../models/Order");
const UserModel = require("../models/User");

module.exports.addNewOrder = async (orderInfo) => {
  const order = new OrderModel({
    deliveryNote: orderInfo.deliveryNote,
    userId: orderInfo.userId,
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
    var orders;
    if (user_email == "all") {
      orders = await OrderModel.find().populate("productId");
    } else {
      user = await UserModel.findOne({ email: user_email });
      orders = await OrderModel.find({ userId: user._id.toString() }).populate(
        "productId"
      );
    }
    return orders;
  } catch (err) {
    console.log(err);
    throw new Error("Could not retrieve orders.", err);
  }
};

module.exports.getOrder = async (order_id) => {
  try {
    const order = await OrderModel.findById(order_id).populate("productId");
    console.log(order);
    return order;
  } catch (err) {
    console.log(err);
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
