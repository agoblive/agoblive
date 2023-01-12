const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')
const day = require('dayjs')

module.exports = {
  name: "help",
  alias: [],
  async execute(client, message, args) {

    const owner = message.guild.fetchOwner()
    const createsv = day(message.guild.createdAt).format('DD/MM/YY')

    const info = new Discord.MessageEmbed()
      .setTitle("Menu De Ayuda comando base c!help prefix c!")
      .setThumbnail(message.guild.iconURL())
      .setColor("RANDOM")
      .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setFields(
        { name: "Help:", value: `Este comando sirve para resivir ayuda\n\n`, inline: true },
        { name: "Info:", value: `Este comando sirve para pedir informacion sobre este discord\n\n`, inline: true },
        { name: "Sug:", value: `Este comando sirve para enviar una sugerencia que tengas sobre nuestro servidor\n\n `, inline: true },
        { name: "Invite:", value: `Este comando sirve para sacar el linkde invitacion de Odisea Rp\n\n  `, inline: true },
        )
    

    message.reply({ embeds: [info] })

  }


}