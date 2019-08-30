require("dotenv").config();
const redis = require("redis");

let client = redis.createClient();

let client1 = redis.createClient();
let client2 = redis.createClient();
let client3 = redis.createClient();

client1.rpush("testMyKey1", "c1Value", redis.print);
client2.rpush("testMyKey1", "c2Value", redis.print);
client3.rpush("testMyKey1", "c3Value", redis.print);

client1.lrange("testMyKey1", 0, -1, redis.print);
client2.lrange("testMyKey1", 0, -1, redis.print);
client3.lrange("testMyKey1", 0, -1, redis.print);
client.lrange("testMyKey1", 0, -1, redis.print);

// function setData(redisClient, data) {
//   redisClient.set("myKeys", data);
//   redisClient.get("myKeys", string => {
//     console.log(string);
//   });
// }

// function main() {
//   setData(client1, "fromClient1");
//   setData(client2, "fromClient2");
//   setData(client3, "fromClient3");
// }

// main();
