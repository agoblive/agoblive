const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')

module.exports = {
    name: "clear",
    aliases: ["eliminar"],
    
    execute (client, message, args) {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`❌  ${message.author} **Solo los staff pueden ocupar este comando.**`)
        if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`:X: **Necesito el permiso para controlar los mensajes "MANAGER_MESSAGE"**`)

        const cantidad = args[0]

        if(!cantidad) return message.channel.send(`❌ **Debes de especificar una cantidad de mensajes para eliminar.**`)
        if(isNaN(cantidad)) return message.channel.send(`❌ **Debes de especificar un numero valido...**`)
        if(cantidad > 100) return message.channel.send(`❌ **No puedes eliminar más de**\'100\' **mensajes a la vez.**`)
        if(cantidad < 1) return message.channel.send(`❌ **No puedes eliminar** \'1\' **mensaje, debes especificar un numero elevado a** \'0\'`)

        message.reply(`❌  ***Espera unos segundos... estoy borrando***`)

        try{
            setTimeout(() => message.channel.bulkDelete(cantidad), 2000)
        } catch {
            param.reply('no se permiten mensajes de pasado de 14 dias!!')
        }

    setTimeout(() => message.channel.send(`✅ **__Mensajes Borrado Correctamente!__** \`${cantidad}\` **__mensajes.__**`), 2500)
}
}