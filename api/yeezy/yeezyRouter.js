const express = require("express");
const Model = require("./yeezyModel");
const router = express.Router();

//Get all Yeezys
router.get("/", async (req, res, next) => {
  try {
    const rows = await Model.getAllYeezys();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});
//Get Yeezy Men
router.get("/men", async (req, res, next) => {
  try {
    const rows = await Model.getYeezyMen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Yeezy Women
router.get("/women", async (req, res, next) => {
  try {
    const rows = await Model.getYeezyWomen();
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Get Yeezy by ID
router.get("/:id", async (req, res, next) => {
  try {
    const rows = await Model.getYeezyID(req.params.id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Post new Yeezy shoe
router.post("/", async (req, res, next) => {
  try {
    const rows = await Model.PostYeezy(req.body);
    res.status(201).json(rows);
  } catch (e) {
    next(e);
  }
});

//Delete a Yeezy shoe
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const rows = await Model.DeleteYeezy(id);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

//Edit a Yeezy shoe
router.put("/:id", async (req, res, next) => {
  try {
    const rows = await Model.EditYeezy(req.params.id, req.body);
    res.status(200).json(rows);
  } catch (e) {
    next(e);
  }
});

router.use((err, req, res) => {
  res.status(500).json({
    message: " Read server error!!!",
    error: err.message,
  });
});

module.exports = router;
