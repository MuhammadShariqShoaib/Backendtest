import express from "express";
import Item from "../model/item.js";

const router = express.Router();

router.get("/", async (req, res) => {
    console.log("hahahahah");

  const items = await Item.find();
  res.json(items);
});

router.post("/", async (req, res) => {
    console.log("hahahahah");
    
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

export default router;
