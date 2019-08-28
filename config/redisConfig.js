const redis = require("redis");
const bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);

const client = redis.createClient();

client.on("connect", () => {
  console.log("Redis is up and running");
});

module.exports = client;
