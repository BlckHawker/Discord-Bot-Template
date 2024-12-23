require("dotenv").config();

//Sends a message to the debug channel
const sendMessage = (client, content) => {
    client.channels.cache.get(process.env.DEBUG_CHANNEL_ID).send(content);
}

module.exports = { sendMessage };