let Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (message.mentions.members.size == 0) {
        message.channel.send("You have to mention the user you want to hug!");		
    }

    var images = [
        "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
        "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
        "https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif",
        "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
        "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
        "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
        "https://i.imgur.com/KWCgD5x.gif",
        "https://lh3.googleusercontent.com/-oWQTWYfhlEI/VWRQDOAIYCI/AAAAAAAABWc/Qr-Xc6G8Nuo/w800-h800/tumblr_m68m3wjllW1qewqw2.gif",
        "https://i.imgur.com/6koVXbP.gif",
        "https://pa1.narvii.com/6717/9c8654d42e2d13eca2ec5ce8f9052e8350c997fa_00.gif",
        "https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif",
        "https://vignette.wikia.nocookie.net/r2d/images/4/40/9cd13826.gif/revision/latest?cb=20141229175738", 
        "https://thumbs.gfycat.com/WellgroomedVapidKitten-max-1mb.gif",
        "https://cdn.discordapp.com/attachments/396609929504489473/432552500361691156/tenor.png",
        "https://tenor.com/view/hug-anime-love-dragon-loli-gif-9920978",
        "https://tenor.com/view/mika-mikaela-hyakuya-owari-no-gif-7419864"
    ];

    message.mentions.members.forEach((member, memberId) => {
        message.channel.send(new Discord.RichEmbed({
            description: `**${message.member.displayName}** hugs **${member.displayName}**!`,
            image: {
                url: images[Math.floor(Math.random() * images.length)]
            }
        }));
    });

}

module.exports.help = {
    name: "hug"
}