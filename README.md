# Sportify+ 初始化測試說明

這是一個後端練習專案，目前專注在資料庫架構與初始資料建立。

## ✅ 成功項目

- 使用 PostgreSQL 資料庫，搭配 TypeORM 成功建立資料表。
- 撰寫 `seed.js` 並成功插入初始資料。
- 本地端啟動伺服器成功，使用 `localhost:3000` 可確認後端服務運作正常。
- 可透過 DBeaver 等工具檢視資料表與資料內容。

## 🚀 如何啟動專案

### 安裝套件

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

### 執行資料表與初始資料建立（seed）

```bash
npm run seed
```

## 🧰 開發環境

- Node.js
- PostgreSQL（本機資料庫）
- TypeORM
- DBeaver（視覺化管理工具）

## 📂 專案結構說明（部分）

```
bin/              # 啟動伺服器腳本
db/               # 資料庫連線與 seed 檔案
entities/         # TypeORM 資料表定義
app.js            # 主程式
```

---

本專案為個人後端學習使用，如有建議歡迎提出 🙌
