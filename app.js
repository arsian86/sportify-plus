const express = require("express");
const cors = require("cors");
const app = express();

// 中介層設定
app.use(cors());
app.use(express.json());

// 測試用路由
app.get("/", (req, res) => {
  res.send("後端伺服器成功運作！");
});
module.exports = app;
