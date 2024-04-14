const redis = require('redis');
const publisher = redis.createClient();

const publishMessage = async (channel, message) => {
    await publisher.connect();
    publisher.publish(channel, message);
    await publisher.quit();  // Optionally disconnect after publishing
};

module.exports = publishMessage;
