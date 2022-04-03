# forum-front-end-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 在本機執行時 需要啟動後端 API 伺服器的五個步驟  
### 步驟一：下載後端專案並進行初始化(請在終端機輸入以下指令)
```
git clone https://github.com/ALPHACamp/forum-express.git
cd forum-express
npm install
```

### 步驟二：安裝 MySQL 與圖形化介面 Workbench

### 步驟三：使用 MySQL 和 MySQL Workbench 建立本地伺服器連線

### 步驟四：使用 MySQL Workbench 建立 forum 資料庫
### 打開 MySQL Workbench 輸入以下指令，再按下閃電執行
```
CREATE DATABASE forum
```

### 步驟五：執行伺服器(回到專端機輸入以下指令)
```
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

### 執行成功，可看到伺服器在 localhost:3000 跑起來了