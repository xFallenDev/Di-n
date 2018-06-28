const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const bot = new Discord.Client();
bot.commands = new Discord.Collection;

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready`);
    bot.user.setActivity("Nightcore Music", {type:"LISTENING"});
});

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
  
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.lenght <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded`)
      bot.commands.set(props.help.name, props);
    })
  
  });

bot.on("message", message => {
    if(message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.BOT_TOKEN);

//Events.

bot.on("guildMemberAdd", member => {

  let welcomechannel = member.guild.channels.find(`name`,`welcome-logs`);
  if(!welcomechannel) return member.guild.createChannel(`welcome-logs`,"text");


  let username = member.user.username;
  let server = member.guild.name;
  let players = member.guild.memberCount;

  let wcEmbed = new Discord.RichEmbed()
  .setTitle(`Welcome to ${username} to ${server}`)
  .setColor(`#00FF00`)
  .setThumbnail(`${member.user.displayAvatarURL}`)
  .setDescription(`You are our ${players} of the server`);

  welcomechannel.send(wcEmbed);
  member.send(wcEmbed);

});

bot.on("guildMemberRemove", msg => {

  let welcomechannel = member.guild.channels.find(`name`,`goodbye-logs`);
  if(!welcomechannel) return member.guild.createChannel(`goodbye-logs`,"text");

  let username = member.user.username;
  let server = member.guild.name;
  let players = member.guild.memberCount;

  let gbEmbed = new Discord.RichEmbed()
  .setTitle(`${username} We are sorry to see you leave our server "${server}"`)
  .setDescription("We hope that you come back to our server soon")

  msg.channel.send(gbEmbed);
});
