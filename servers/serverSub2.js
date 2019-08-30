require("dotenv").config();
const express = require("express");
const clientSub2 = require("../config/redisConfig");
const lockService = require("../services/lockService");

const app = express();

app.listen(process.env.PORT_SERVER_SUB2, () => {
  console.log("Server Sub 2");

  // clientSub2.subscribe("my channel");
  lockService.requestLock(clientSub2, "Server 2");

  /* DEFAULT PUB/SUB Mechanism */
  // client.subscribe("my channel");
  // client.on("message", (channel, message) => {
  //   console.log(`Sub channel "${channel}": ${message}`);
  // });
});
