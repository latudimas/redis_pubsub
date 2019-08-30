require("dotenv").config();
const express = require("express");
const clientSub3 = require("../config/redisConfig");
const lockService = require("../services/lockService");

const app = express();

app.listen(process.env.PORT_SERVER_SUB3, () => {
  console.log("Server Sub 3");

  // clientSub3.subscribe("my channel");
  lockService.requestLock(clientSub3, "server 1");
});
