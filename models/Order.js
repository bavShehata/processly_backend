const { model, Schema } = require("mongoose");

const OrderSchema = new Schema({
  date: {
    type: "Date",
    required: true,
  },
  deliveryNote: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  status: {
    type: "String",
  },
  productId: {
    type: "Number",
    required: true,
  },
  quantity: {
    type: "Number",
    required: true,
  },
  totalPrice: {
    type: "Number",
    required: true,
  },
});

const OrderModel = model("order", OrderSchema);

module.exports = OrderModel;
