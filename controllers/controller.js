const redisService = require("../services/redisService");

exports.publishMessage = (req, res) => {
  if (!req.query.message) {
    return res.status(404).send({
      Error: "There's no message"
    });
  } else {
    let message = req.query.message;

    redisService.publishMessageService(message);
    console.log(`Publish a Message: ${message}`);

    res.send({
      Publish: message
    });
  }
};
