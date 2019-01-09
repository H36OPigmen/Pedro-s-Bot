// Load up the discord.js library
const Discord = require('discord.js');

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
    
    client.on('message', message => {
        if (message.content === 'ping') {
          message.reply('pong');
        }
});

    client.on('message', message => {
        if (message.content === 'big') {
          message.reply('BIG NIBBA');
        }
});

    client.on('message', message => {
        if (message.content === 'good doggy') {
          message.reply('Gracias Papi :D');
        }
});

    client.on('message', message => {
        if (message.content === 'ya') {
          message.reply('Yeet');
        }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
