const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to acess this command");
    if(!args[0]) return message.channel.send(`Please enter any number from 1 to 100.\n**Useage: ?clear {number from 1 to 99}**`);
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(5000));
    });

}

module.exports.help = {
    name: "clear"
}