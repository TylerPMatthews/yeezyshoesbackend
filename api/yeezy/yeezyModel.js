const db = require("../../api/data/db-config");

//Get all Yeezy Shoes
const getAllYeezys = () => {
  return db("yeezys");
};

//Get Yeezy by ID
const getYeezyID = (id) => {
  return db("yeezys").where("yeezy_id", id);
};

//Get Yeezy Men
const getYeezyMen = () => {
  return db("yeezys").where("yeezy_gender", "m");
};

//Get Yeezy Women
const getYeezyWomen = () => {
  return db("yeezys").where("yeezy_gender", "w");
};

//Post a new Yeezy Shoe
const PostYeezy = (yeezy) => {
  return db("yeezys").insert(yeezy);
};

//Delete a Yeezy Shoe
const DeleteYeezy = (id) => {
  return db("yeezys").where("yeezy_id", id).del();
};

//Edit a Yeezy Shoe
const EditYeezy = (id, changes) => {
  return db("yeezys").where("yeezy_id", id).update(changes);
};

module.exports = {
  getAllYeezys,
  getYeezyID,
  getYeezyMen,
  getYeezyWomen,
  PostYeezy,
  DeleteYeezy,
  EditYeezy,
};
