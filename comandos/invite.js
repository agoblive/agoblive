const Discord = require('discord.js');

module.exports = {
    name: "invite",
    alias: ["link"],

   async execute (client, message, args) {
        message.channel.createInvite({ maxAge: 0, MaxUses: 5 }).then(link => {

                const invite = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}`)
                .setColor("#FFFFFF")
                .addField(`Invitación`, `${link}`)
                .setFooter({ text: `${message.author.tag}`, iconURL: message.guild.iconURL ({ dynamic: true }) })
                .setTimestamp()

       message.channel.send({ embeds: [invite] });

        });

    }
}