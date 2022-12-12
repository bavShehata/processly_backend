// import the validationResult method from express validator
const bmanagmentService = require("../services/bmanagment");
const ordersService = require("../services/orders");

module.exports.generateReport = async (req, res) => {
  try {
    // Get all orders for the past week
    const orders = await bmanagmentService.getWeeksOrders();
    // initialize the object
    report = {
      totalRevenue: 0,
      numOfOrders: 0,
      mostSoldProduct: "",
      highestPurchaser: "",
      products: {},
    };
    let maxTotal = 0;
    let productsObj = {};
    // Get the number of orders
    report.numOfOrders = orders.length;
    orders.forEach((order) => {
      // Calculate total revenue
      report.totalRevenue += order.totalPrice;
      // Get the email of the user with the highest purchase
      if (maxTotal < order.totalPrice) {
        maxTotal = order.totalPrice;
        order.totalPrice;
        report.highestPurchaser = order.userId.email;
      }
      // Get
      productsObj[order.productId.name] = productsObj[order.productId.name]
        ? [
            productsObj[order.productId.name][0] + 1,
            productsObj[order.productId.name][1] + order.totalPrice,
          ]
        : [1, order.totalPrice];
    });
    report.products = productsObj;
    maxTotal = 0;
    for (prod in productsObj) {
      if (maxTotal < productsObj[prod][0]) {
        maxTotal = productsObj[prod][0];
        report.mostSoldProduct = prod;
      }
    }

    const addedReport = await bmanagmentService.addNewReport(report);

    return res.send({
      msg: "Report added successfully.",
      report: addedReport,
    });
  } catch (err) {
    res.status(500);
    res.send({
      error: `Couldn't add report ${err.message}`,
    });
  }
};

module.exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await ordersService.editOrder(req);
    return res.send({ order });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message,
    });
  }
};

module.exports.sendReminderEmail = async (req, res) => {
  try {
    const order = await ordersService.editOrder(req);
    return res.send({ order });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message,
    });
  }
};
