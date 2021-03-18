const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const yeezyRoutes = require("./yeezy/yeezyRouter");
const CheckoutRoutes = require("./checkout/checkoutRouter");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//Checkout routes
server.use("/api/checkout", CheckoutRoutes);

//Yeezy shoe routes
server.use("/api/yeezys", yeezyRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ API: "Online" });
});

module.exports = server;
