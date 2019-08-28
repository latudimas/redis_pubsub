const client = require("../config/redisConfig");
const Leader = require("redis-leader");

var leader = new Leader(redis);
