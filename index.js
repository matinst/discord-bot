const { ActivityType,Events,Client,GatewayIntentBits} = require('discord.js')
require('dotenv').config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers
    ]
})

client.once(Events.ClientReady, () => {
    console.log('Bot Has connected to discord \nDont Close This APP');
    client.user.setPresence({
        activities: [{ name: `My developer is Matin`, type: ActivityType.Streaming }],
        status: 'online',
    })
});
client.login(process.env.DISCORD_TOKEN)