const redis = require("redis");
const client = redis.createClient();

client.on("connect", () => {
    console.log("Connection Successful!!");
});

client.on("error", (err) => {
    console.log("Redis Error:", err);
});

client.connect();