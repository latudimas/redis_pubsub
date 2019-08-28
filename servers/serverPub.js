require("dotenv").config();
const express = require("express");
const router = require("../routes/routes");

const app = express();

// Router Middleware
app.use("/", router);

app.listen(process.env.PORT_SERVER_PUB, () => {
  console.log(`Server Pub is running in port ${process.env.PORT_SERVER_PUB}`);
});
