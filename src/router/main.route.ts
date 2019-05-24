import express from "express";

const router = express.Router();

router.get("/main", (req, res, next) => {
  res.send("main route!");
});

const name = "Mike";

export = {router, name};
