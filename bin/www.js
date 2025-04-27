const http = require("http");
const app = require("../app"); // 導入 app.js
const AppDataSource = require("../db/data-source");
require("dotenv").config();

const port = process.env.PORT || 3000; // 使用 normalizePort 函式處理 port
app.set("port", port);

// 建立 HTTP server
const server = http.createServer(app);

// 啟動伺服器並初始化資料庫
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  AppDataSource.initialize()
    .then(() => {
      console.log("Database connection established successfully.");
    })
    .catch((error) => {
      console.error("Error during database connection:", error);
    });
});
