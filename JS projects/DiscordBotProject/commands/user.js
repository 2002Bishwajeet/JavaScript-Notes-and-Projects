const { SlashCommandBuilder } = require("@discordjs/builders");
const { execute } = require("./ping");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    );
  },
};
