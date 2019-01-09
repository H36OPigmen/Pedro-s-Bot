// Load up the discord.js library
const Discord = require('discord.js');

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();
const prefix = "tt";

client.on('ready', () => {
    console.log('I am ready!');
    });

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
    
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "big")) {
    message.channel.send("BIG NIBBA");
  }
});
    
   /* client.on('message', message => {
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


    client.on('message', message => {
        if (message.content === 'yee') {
          message.reply('Haw');
        }
});
*/

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
