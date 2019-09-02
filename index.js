const redis = require("redis");
const client = redis.createClient();

client.rpush("testPush", "mymessage", () => {
  console.log("Push message to testPush");
});

setTimeout(function() {
  client.blpop("testPush", 0, function(err, data) {
    console.log("Data: " + data);
  });
}, 3000);
