
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "on", // Nombre del comando
  alias: [], // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args) {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`❌  ${message.author} **Solo los staff pueden ocupar este comando.**`) 
    message.defined
    message.delete() // que elimine el mensaje que el mando
    const embed = new Discord.MessageEmbed( )
    .setTitle(' Odisea RP ON  ')
    .setDescription(' BIENVENIDO YA PUEDES ENTRAR A NUESTRO SERVIDOR  ')
    .setURL('https://discord.gg/NJDfZTT7ty')
    //////////////////77
     const embed2 = new Discord.MessageEmbed( )
    .setTitle(' VEN A DISFRUTAR ODISEA RP ')
    .setDescription(' Como entrar a odisea\n\n 1. Entrar en Fivem\n\n ')
.setImage('https://cdn.discordapp.com/attachments/1022407425577467995/1051229066478502039/panel_bienvenidos.gif')
    
    message.channel.send({ embeds: [embed,embed2 ], content: "@everyone"}) // enviamos el mensaje
    
  }
}