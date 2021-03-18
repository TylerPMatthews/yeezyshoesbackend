const db = require('../data/db-config');
//Get all orders
const getOrders = () => {
    return db("orders")
}

//Get a order by ID
const getOrderID = (id) => {
    return db("orders").where("order_id", id)
}

//Post a new order
const postOrder = (order) => {
    return db("orders").insert(order)
}
module.exports = {
getOrders,
getOrderID,
postOrder,

}