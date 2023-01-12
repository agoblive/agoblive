const { EmbedBuilder, MessageEmbed } = require('discord.js');

module.exports = {
  name: `ping`,
  alias: [`alias`],
  
    execute (client, message, args) {
    let embed = new MessageEmbed()
    .setTitle(`**ESTE ES MI PING**`)
    .setDescription(`✅ Ping \`${client.ws.ping}ms\`!`)
    .setColor(client.color)

    message.channel.send({embeds: [embed]})
 }
}