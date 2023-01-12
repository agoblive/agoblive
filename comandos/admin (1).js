const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')
const day = require('dayjs')

module.exports = {
  name: "admin",
  alias: [],
  async execute(client, message, args) {

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`❌  ${message.author} **Solo los staff pueden ocupar este comando.**`)
        if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`:X: **Necesito el permiso para controlar los mensajes "MANAGER_MESSAGE"**`)

    const owner = message.guild.fetchOwner()
    const createsv = day(message.guild.createdAt).format('DD/MM/YY')

    const info = new Discord.MessageEmbed()
      .setTitle("Menu De Ayuda para admins comando base c!admin prefix c!")
      .setThumbnail(message.guild.iconURL())
      .setColor("RANDOM")
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setFields(
        { name: "Warn:", value: ` Este comando sirve para advertir algun usuario`, inline: true },
        { name: "Say:", value: `Este comando sirve para copiar el mensaje que le pongas no incluyen imagenes`, inline: true },
        { name: "Clear:", value: `Este comando sirve para borrar mensajes con un limite de 100 mensajes`, inline: true },
        { name: "Info:", value: `Este comando sirve para pedir unformacion sobre este discord`, inline: true },
  { name: "Ban:", value: ` Este comando sirve para Banear a un miembro del servidor Uso unico para admins`, inline: true },

        
  { name: "General:", value: ` Este comando sirve para cuando un usuario pase la wl General`, inline: true },
        
      )
    

    message.reply({ embeds: [info] })

  }

}