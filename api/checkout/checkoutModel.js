const db = require("../../api/data/db-config");

const getCustomers = () => {
  return db("customers");
};
const postCheckout = (info) => {
  return db("customers").insert(info);
};

module.exports = {
  postCheckout,
  getCustomers,
};
