const Discord = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [], 

execute (client, message, args){

  if(!message.member.permissions.has("BAN_MEMBERS"))return message.reply("No tienes los permisos suficientes! :pensive:\nPermisos faltantes : `BAN_MEMBERS`")
  if(!message.guild.me.permissions.has("BAN_MEMBERS"))return message.reply("No tengo los permisos suficientes! :cry:\nPermisos faltantes : `BAN_MEMBERS`")

    const user = message.mentions.members.first();
  if(!user) return message.reply("Debes mencionar un usuario!")
  if(user.user.id === message.author.id) return message.reply("No puedes banearte a ti mismo!")
    if(user.user.id === client.user.id)return message.reply("No me voy a autobanear WTF") 
    if(user.permissions.has("ADMINISTRATOR"))return message.reply('Hey! No puedes banear a `Administradores` 😡')

    if(message.member.roles.highest.position <= user.roles.highest.position) return message.reply("No puedes banear a alguien con tu mismo rol o superior!");
    if(message.guild.me.roles.highest.position <= user.roles.highest.position) return message.reply("Para que pueda banear al usuario mi rol debe estar por encima de el!");

    const razon = args.slice(1).join(' ')
  if(!razon) return message.reply('Debes ingresar una razón para el baneo!')

    const b = new Discord.MessageEmbed()
    .setTitle('Usuario baneado correctamente!')
    .setDescription(`El usuario <@${user.id}> ha sido baneado/a\nMotivo: ${razon}`)
    .setColor('GREEN')
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL())
    .setFooter({ text: `Usuario baneado por ${message.author.tag}` })

    message.channel.send({embeds: [b]})

    user.ban({ reason: razon})

 }

}