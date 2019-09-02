require("dotenv").config();
const redisLock = require("redislock");

exports.requestLock = function(client, server) {
  let lock = redisLock.createLock(client, {
    timeout: 20000
  });

  lock
    .acquire("messageSubscription")
    .then(err => {
      if (err) throw err;

      console.log(`Acquiring lock for ${server}`);
      // return true;
    })
    .then(() => {
      client.subscribe("my channel");
      client.on("message", (channel, message) => {
        console.log(`Sub channel "${channel}": ${message}`);
      });
    })
    .catch(redisLock.LockAcquisitionError, function(err) {
      console.log("The lock could not be acquired: " + err.message);
    })
    .catch(redisLock.LockReleaseError, function(err) {
      console.log("The lock could not be released: " + err.message);
    });
};
