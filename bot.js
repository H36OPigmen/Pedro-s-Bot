const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
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
