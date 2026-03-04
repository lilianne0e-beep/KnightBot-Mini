/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2349030679705',''], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Azure', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUTZOiSBD9L3XVGBAVhIiOGERAQRBB8WNjDgWUgCDQVYWgE/73Ddru6Tnszvbeiqzi5cv3MvMnKMqUIBPdgPQTVDi9Qoq6I71VCEhgWp9OCIM+iCCFQAKyc2Zm1d7WkoqRvWa22zX6KdBxu7dJS+0epyfBK52VxkB+AY8+qOogT8M/ABrIhNuB185W1UY7sWdngulhINRGoq12gbFnil1Vium81yxewKNDhClOi1itEnRBGOYmujkwxV+jz9rrm7DmVW1UCspl4uqe4GCSs9OBrTLMJNuexzYcbIbVNvsa/Y2Zjo+H1nmFyWSMEsvixlU+01zq8pu5XQZBYe5MTXTmjfqkT9K4QNEiQgVN6e3Luu9UX0nUtqqZaMsgrz67w3W8qkVNw0F7txHx7h4dwt01+yLxlo8b09aMUqBHv0Xt9CSOA7oci+7Y4UOvWtqqMA3gMs2b34k7+KNXsv+ju6VFNZ+umn0VCidLqA5cG/K1y3randkpHFf2xkHmqqGdNV+jPw+M1/1tq9wZ+ygm9p4dlU2oeZYcH/Xw7jLQuTlH3RIDlv2kD2mN/8QyYvWqmipJ+OrrSU6MXjOkvIU5zySZpgSbOTWms2LsTRo/u4ilYdBYUFZEZf321dF74vT1VnHsdb7LLlnkWFF2KAtZfnmrKEO3RQSkwaMPMIpTQjGkaVl0MW7A9QGMrh4KMaJv8gKKSwGP9bpnBKKlC2fHXnrZdJMwr2Gcw8a1rbIZ7UeLuCEvoA8qXIaIEBTNU0JLfLMQITBGBEh//eiDArX0aVyXbjjog1OKCd0WdZWXMPpw9eMShmFZF9S7FaHSHRAGEvsZRpSmRUw6HesC4jBJr0hJICVAOsGcoF8VIowiIFFco19Tq5RRJ7xumvOhv5uBPri8GZJGQALccCSyQ5YXRIEdS/x38q3pYGFVfSsQBX1QwO41kO+djX2QP/8ajUR+NBgJ/HAyHE0k/nsXf/zi28FHiMI0J0ACyqoW6no7UxfOvrRYXZfXsazEMvis76NRnkYs/Y06tsr1IGbnh0gfxcxQiWfNMKq2/mIlV6l4yc5ZsJnsJy//AAIk4Idbu1bYk9euDNVT8N2zuIyLi8K8HTeKkZO7EK68EA4b07dX+mrvt2yGZbfeXqZnNF2ydkNdI28uI3G6sbz16lyYs/ilyxahaxqi35Md+ST03UQIk1K/YG/K17utAFVZvlWu3viDsq0J12NqNJddy94vfc2ar+7uaW0IM35NeHdEeYiO3Oykq+M6F5jFzpKbZwu/jVD+vrrSt+bqnOs+Tyl62wTvDv2nk0/iXcOxj/5vGO+75V/mc+oNtu1qY6r2wZ5yc7deOGJTyhN7CH3Nm8Xm4XqsFmOdZTQGPB4/+qDKIT2V+AIkQC4BBH2Ay7pr30VxKv+QSZHZhRrHSld2DgmVP0dik14QofBSAWkgCBzPTSbC4PnKwWU1hyTpFNBH8qUGj78BF+m6oWAHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
