const { model, Schema } = require("mongoose");

const OrderSchema = new Schema(
  {
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
    size: {
      type: "String",
      required: false,
    },
    totalPrice: {
      type: "Number",
      required: true,
    },
  },
  { timestamps: true }
);

const OrderModel = model("order", OrderSchema);

module.exports = OrderModel;
