const client = require("../config/redisConfig");

exports.publishMessageService = message => {
  let channel = "my channel";
  client.publish(channel, message);
};
