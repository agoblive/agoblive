const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "general",
    alias: ["general"],

   async execute (client, message, args) {

let member = await message.guild.members.fetch(message.mentions.users.first())
   member.roles.add('1022407424772145197');
    message.channel.send("EL USUARIO <@" + member.id + "> :white_check_mark:**APROBO LA WLS GENERAL**:white_check_mark:")
    message.delete();
    }
}