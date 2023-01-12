const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "say", // Nombre del comando
  alias: [], // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args) {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`❌  ${message.author} **Solo los staff pueden ocupar este comando.**`)
    const mensaje = args.slice(0).join(" ") // definir msg
    if(!mensaje) return message.channel.send("especifica el msg") // si no escribe msg q retorn
    message.defined
    message.delete() // que elimine el mensaje que el mando
    const embed = new Discord.MessageEmbed( )
    .setTitle(' Odisea RP  ')
    .setDescription(mensaje)
    .setImage()
    message.channel.send({ embeds: [embed], content: "@everyone"}) // enviamos el mensaje
    
  }
}