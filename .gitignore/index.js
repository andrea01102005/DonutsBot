const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot allumé ! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '=ping') {
    msg.reply('Pong! Joli coup !');
  }
});

client.login('NTE4ODczMTEzNDc2NDY0NjU4.DuXoQQ.Hz1CB50gvxB0uyDXDQ38TQPFz8k');

client.on('ready', () => {
  client.user.setActivity(`me faire manger |  =aide `)
  console.log('I am ready!');
});


client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith("=" + "say"))  {
    if (message.channel.type === "dm") return; 
         message.delete()
    message.channel.send(args.join(" "))
 
     }


 
});
