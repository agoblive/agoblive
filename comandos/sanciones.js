const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "x", // Nombre del comando
  alias: [], // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args) {
if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`❌  ${message.author} **Solo los staff pueden ocupar este comando.**`)

    const mensaje = args.slice(0).join(" ") // definir msg
    if(!mensaje) return message.channel.send("LLena el formulario y mandalo con el comando c!x \n\nUsuario:\n\nMotivo:\n\nSanción:\n\n Autorizado por:") // si no escribe msg q retorn
    message.defined
    message.delete() // que elimine el mensaje que el mando
    
    const embed = new Discord.MessageEmbed( )
    .setTitle(' SANCIONES ODISEA RP  ')
    .setDescription(mensaje)
    .setImage("https://cdn.discordapp.com/attachments/1022407425577467995/1050838897309011968/PERFIL.jpg")
    message.channel.send({ embeds: [embed]}) // enviamos el mensaje
    
  }
}