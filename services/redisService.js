const client = require("../config/redisConfig");

exports.publishMessageService = message => {
  let channel = "my channel";
  // Publish message into a channel
  client.publish(channel, message);
  // Push the message into the list
  client.rpush("message_list", message);
};

exports.popMessage = () => {
  client.blpop("message_list", 0, function(err, data) {
    console.log("Retreived Data: " + data);
  });
};
