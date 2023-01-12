const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
  name: "sug", // Nombre del comando
  alias: ["Reportar", "bug", "Bug", "Bugreport", "BugReport", "bugReport"], // Alias del comando (Por si quieres activar el comando de 2 maneras)
  async execute (client, message, args) {

    let bug = args.slice(0).join(" ")
    if(!bug) return message.reply("Debes poner Tu sugerencia para enviar correctamente!")
  message.delete()
      const embed = new Discord.MessageEmbed()
      .setTitle("Nueva sugerencia echa!")
      .setDescription(`${bug}, fue reportado por ${message.author}`)

            message.channel.send("Tu sugerencia fue enviada Correctamente")
    
      client.channels.cache.get("1022407425816526881").send({embeds: [embed]})

  }
}
