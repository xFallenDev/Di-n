const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (message.mentions.members.size == 0) {
        message.channel.send("You have to mention the user you want to kiss!");	
    }

    var images = [
        "https://78.media.tumblr.com/582d44fc3e01e6c4b5d43360097cefca/tumblr_mvt3bpKsUQ1r02cm5o1_500.gif",
        "https://78.media.tumblr.com/582d44fc3e01e6c4b5d43360097cefca/tumblr_mvt3bpKsUQ1r02cm5o1_500.gif",
        "https://i.pinimg.com/originals/e8/3a/fa/e83afa35d71203bf60764cbbc17516db.gif",
        "https://media.giphy.com/media/cPGr0rmMotcxW/giphy.gif",
        "https://78.media.tumblr.com/2c0afb2bce3dea809f5e9dd283dc459b/tumblr_oh2v64hpfy1tlmyzco1_500.gif",
        "http://pa1.narvii.com/6489/30e1c9cb773b1dba3b6dde55f2310dfcd952d386_00.gif",
        "https://pa1.narvii.com/5971/59017b02a30fbd83c051aa5218926e49ac45e4bc_hq.gif",
        "https://78.media.tumblr.com/3f923b744494786b5d00116c812534b3/tumblr_p4v8v8PVe41w7cvmoo1_500.gif",
        "https://78.media.tumblr.com/301ae2d7f59f33f9272846916fa2e16d/tumblr_oxibrsJa1l1t87n9ho1_500.gif",
        "https://78.media.tumblr.com/59a9740c35e8d938d0d5714c8fbd7549/tumblr_nhza7bifQf1tjv4fjo1_500.gif",
        "https://tenor.com/view/anime-kiss-gif-10531072",
        "https://tenor.com/view/anime-kiss-gif-5095865",
        "https://tenor.com/view/anime-kiss-gif-4797281",
        "https://tenor.com/view/anime-kiss-gif-7922599",
        "https://tenor.com/view/kiss-peck-anime-gif-9690642"
    ];

    message.mentions.members.forEach((member, memberId) => {
        message.channel.send(new Discord.RichEmbed({
            description: `**${message.member.displayName}** kisses **${member.displayName}**...`,
            image: {
                url: images[Math.floor(Math.random() * images.length)]
            }
        }));
    });

};

module.exports.help = {
    name: "kiss"
}