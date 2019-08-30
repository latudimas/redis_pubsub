require("dotenv").config();
const express = require("express");
// const clientSub1 = require("../config/redisConfig");
const redis = require("redis");
const clientSub1 = redis.createClient();
const lockService = require("../services/lockService");

const app = express();

app.listen(process.env.PORT_SERVER_SUB1, () => {
  console.log("Server Sub 1");

  // clientSub1.subscribe("my channel");
  lockService.requestLock(clientSub1, "server 1");

  /* DEFAULT PUB/SUB Mechanism */
  // clientSub1.subscribe("my channel");
  // clientSub1.on("message", (channel, message) => {
  //   console.log(`Sub channel "${channel}": ${message}`);
  // });
});
