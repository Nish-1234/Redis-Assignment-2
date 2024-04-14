const redis = require('redis');
const subscriber = redis.createClient();

const subscribeToChannel = async (channel, callback) => {
    await subscriber.connect();
    subscriber.subscribe(channel, (message) => {
        callback(message, channel);
    });
};

subscribeToChannel('Nis Youtube', (message, channel) => {
    console.log(`Received message: ${message} from channel: ${channel}`);
});

module.exports = subscribeToChannel;
