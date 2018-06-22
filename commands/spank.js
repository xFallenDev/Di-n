const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (message.mentions.members.size == 0) {
        message.channel.send("You have to mention the user you want to spank!");
    }

    var images = [
        "https://78.media.tumblr.com/8d9457527e4d925186510708bf752a4b/tumblr_mzgeclJJ9Y1rbnx7io1_500.gif",
        "http://img1.ak.crunchyroll.com/i/spire1/fd23a596b5b6155c89420717dbf9c4e81464631514_full.gif",
        "http://i.giphy.com/l41lNLGDSAZo1lcd2.gif",
        "https://ci.memecdn.com/6928944.gif",
        "https://media.giphy.com/media/zkn7frya243hm/giphy.gif",
        "http://i.imgur.com/PBZVXVW.gif",
        "http://animediet.net/wp-content/uploads/2012/10/tumblr_mau3m763Y71qzd219o9_500.gif",
        "http://ww4.sinaimg.cn/mw690/a801236bjw1f3qduj81g1g20dc07i4qv.gif",
        "https://ncache.ilbe.com/files/attach/new/20170917/72258130/8628727813/10029333479/611445cdede65d2e30ea2eaf174adba6.gif",
        "https://memestatic.fjcdn.com/gifs/Spankings_a76d6e_6374436.gif",
        "https://pokenirvash2.files.wordpress.com/2016/03/08-spanking.gif"
        
    ];

    message.mentions.members.forEach((member, memberId) => {
        message.channel.send(new Discord.RichEmbed({
            description: `**${message.member.displayName}** spanked **${member.displayName}**!`,
            image: {
                url: images[Math.floor(Math.random() * images.length)]
            }
        }));
    });


}

module.exports.help = {
    name: "spank"
}