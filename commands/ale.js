exports.run = (client, message, params) => {
  message.channel.send('srale');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ale",
  description: "Odpowiada \"srale\"",
  usage: "ale"
};