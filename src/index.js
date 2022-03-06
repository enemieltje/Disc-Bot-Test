// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
require("dotenv").config();

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log(`Running version: ${process.env.VERSION}`);
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.content === "test") {
    message.reply(`v${process.env.VERSION}`);
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
