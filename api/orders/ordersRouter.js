const express = require("express");
const Model = require("./ordersModel");
const router = express.Router();

//Get all orders
router.get("/", async (req, res, next) => {
  try {
    const rows = await Model.getOrders();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get order by ID
router.get("/", async (req, res, next) => {
  try {
    const rows = await Model.getOrderID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post a new order
router.get("/", async (req, res, next) => {
  try {
    const rows = await Model.postOrder(req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
