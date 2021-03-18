const express = require("express");
const Checkout = require("./checkoutModel");
const router = express.Router();

//post a new checkout form
router.post("/", async (req, res, next) => {
  try {
    const rows = await Checkout.postCheckout(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const rows = await Checkout.getCustomers();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
