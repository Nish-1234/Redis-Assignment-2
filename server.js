const express = require('express');
const publishMessage = require('./publisher');
const subscribeToChannel = require('./subscriber');

const app = express();
app.use(express.json());



app.post('/publish', async (req, res) => {
    const { channel, message } = req.body;
    try {
        await publishMessage(channel, message);
        res.send("Message published");
    } catch (error) {
        console.error("Error publishing message:", error);
        res.status(500).send("Failed to publish message");
    }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
