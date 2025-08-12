# 🤖 WhatsApp TagAll Bot

A simple and effective WhatsApp bot built with Node.js that tags all members in group chats with the `!tagall` command.

## ✨ Features

- 🏷️ **Tag All Members** - Tag everyone in any WhatsApp group
- 🔄 **Session Persistence** - No need to scan QR code repeatedly  
- 🖥️ **Terminal QR Display** - Easy authentication with QR code in terminal
- 🛡️ **Error Handling** - Robust error handling prevents crashes
- 📱 **Simple Commands** - Easy to use with help command

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- A dedicated WhatsApp phone number (don't use personal account)
- Terminal access

### Installation & Setup

1. **Navigate to project directory:**
   ```bash
   cd "/home/aarav-aggarwal/coding/Whatsapp bot"
   ```

2. **Install dependencies** (if needed):
   ```bash
   npm install whatsapp-web.js qrcode-terminal
   ```

3. **Start the bot:**
   ```bash
   node run-bot.js
   ```
   or
   ```bash
   ./start.sh
   ```

### First Time Authentication

1. Run the bot with `node run-bot.js`
2. A QR code will appear in your terminal
3. Open WhatsApp on your phone
4. Go to **Settings** → **Linked Devices** → **Link a Device**
5. Scan the QR code displayed in terminal
6. Wait for "🤖 Bot is ready!" confirmation message

## 📱 How to Use

1. **Add the bot to WhatsApp groups** using the bot's phone number
2. **Send commands** in any group chat:

| Command | Description |
|---------|-------------|
| `!tagall` | Tag all members in the group |
| `!help` | Show available commands |

## 🔧 How It Works

1. **Listens for commands** in all WhatsApp messages
2. **Detects group chats** (ignores private messages)  
3. **Fetches all group participants**
4. **Creates proper WhatsApp mentions** that trigger notifications
5. **Sends tagged message** to notify all members

## 🛠️ Troubleshooting

### QR Code Issues
```bash
# Clear terminal and try again
clear && node run-bot.js

# Make sure terminal window is large enough
```

### Authentication Problems
```bash
# Clear session and re-authenticate
rm -rf .wwebjs_auth/
node run-bot.js
```

### Tags Not Working (Names show but no notifications)
This is the most common issue:

1. **Make the bot an admin in WhatsApp groups** (highly recommended)
2. **Save the bot's number in your contacts**
3. **Re-authenticate the session:**
   ```bash
   rm -rf .wwebjs_auth/
   node run-bot.js
   ```

### Bot Not Responding
- Check if the process is running: `ps aux | grep node`
- Restart the bot: Stop with `Ctrl+C` and run `node run-bot.js` again
- Check for error messages in the terminal

## 🔍 Debugging

To see detailed logs while the bot is running:
```bash
node run-bot.js
```

All bot activity and errors will be displayed in the terminal.

## 🌐 Production Deployment (Optional)

For 24/7 operation on a VPS, you can use PM2:

```bash
# Install PM2
npm install -g pm2

# Start bot with PM2
pm2 start run-bot.js --name "whatsapp-bot"

# Save PM2 config
pm2 save

# Enable auto-start on reboot
pm2 startup

# Monitor
pm2 status
pm2 logs whatsapp-bot
```

## ❓ FAQ

**Q: Why aren't people getting notifications when tagged?**  
A: Make sure the bot is an admin in groups and that group members have the bot's number saved in their contacts.

**Q: Can I use my personal WhatsApp account?**  
A: Not recommended. Use a dedicated WhatsApp account to avoid potential issues.

**Q: How many people can it tag at once?**  
A: It can tag any number of group members. Successfully tested with groups up to 74 members.

**Q: How do I add more commands?**  
A: Edit `run-bot.js` and add new command conditions in the message handler.

## 📁 Project Structure

```
WhatsApp bot/
├── run-bot.js          # Main bot application
├── start.sh            # Quick start script  
├── package.json        # Dependencies
├── README.md           # This file
├── .wwebjs_auth/       # Session data (auto-created)
└── node_modules/       # Dependencies (auto-created)
```

## 🚨 Important Notes

- **Never delete** the `.wwebjs_auth/` folder unless you want to re-authenticate
- **Bot admin status** in groups significantly improves tagging reliability
- **Don't spam** the `!tagall` command to avoid WhatsApp rate limits
- **Keep dependencies updated** for best compatibility

## 🎯 Success Rate

Tested and working with:
- ✅ Small groups (3-10 members)
- ✅ Medium groups (10-50 members)  
- ✅ Large groups (50+ members, tested up to 74 members)

---

## 🚀 Ready to Go!

Your bot is ready to use. Simply run:

```bash
node run-bot.js
```

Scan the QR code, wait for "Bot is ready!", and start using `!tagall` in your WhatsApp groups! 

**Need help?** Check the troubleshooting section or send `!help` to the bot.
