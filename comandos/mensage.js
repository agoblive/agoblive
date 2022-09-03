const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "md",//Nombre del comando
  alias: ["mensaje directo"],//Alias del comando (Por si quieres activar el comando de 2 maneras) Si no quieres alias simplemente quitale las comillas ""
async execute (client, message, args) {

//code
if(message.author.id !== "744526824524218431") return message.channel.send("Tu no Estas encargado de esta funcion")
const userID = args[0] 
if(!userID) return message.channel.send("Pon un mensaje")
    const user = message.mentions.members.first() || message.guild.members.chanel.cache.get(userID)
    const mensaje = args.slice(1).join(" ")
    if(!mensaje) return message.reply("pon un texteo ")
    if(!user) return message.reply("No se encontro a la persona")
const embed = new Discord.MessageEmbed()
.setTitle('Cairo rp')
.setDescription(mensaje)
user.send({ embeds: [embed]})
    message.channel.send("El mensaje se a enviado")
        message.defined
}

}