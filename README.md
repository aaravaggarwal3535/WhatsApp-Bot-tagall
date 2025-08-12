# 🤖 WhatsApp TagAll Bot

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green.svg)](https://nodejs.org/)
[![WhatsApp Web.js](https://img.shields.io/badge/WhatsApp%20Web.js-Latest-25D366.svg)](https://github.com/pedroslopez/whatsapp-web.js)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A simple and effective WhatsApp bot built with Node.js that can tag all members in group chats with a single command. Perfect for group admins who need to get everyone's attention quickly!

## ✨ Features

- 🏷️ **Tag All Members** - Tag everyone in any WhatsApp group instantly
- 🔄 **Session Persistence** - Login once, stay connected (no repeated QR scanning)
- 🖥️ **Terminal QR Display** - Easy setup with QR code in terminal
- 🛡️ **Error Handling** - Robust error handling prevents crashes
- 📱 **Simple Commands** - Easy-to-use commands with help functionality
- 🚀 **Lightweight** - Minimal dependencies and resource usage
- 🔧 **Production Ready** - Includes PM2 configuration for 24/7 operation

## 🎯 Demo

**Successfully tested with groups of all sizes:**
- ✅ Small groups (3-10 members)
- ✅ Medium groups (10-50 members)  
- ✅ Large groups (50+ members, tested up to 74 members)

## 🚀 Quick Start

### Prerequisites

- **Node.js** v14.0.0 or higher ([Download here](https://nodejs.org/))
- A **dedicated WhatsApp account** (don't use your personal number)
- **Terminal access**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/whatsapp-tagall-bot.git
   cd whatsapp-tagall-bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the bot:**
   ```bash
   npm start
   ```
   or
   ```bash
   node run-bot.js
   ```

### First Time Setup

1. **Run the bot** - Execute `npm start`
2. **Scan QR Code** - A QR code will appear in your terminal
3. **Connect WhatsApp:**
   - Open WhatsApp on your phone
   - Go to **Settings** → **Linked Devices** → **Link a Device**
   - Scan the QR code
4. **Wait for confirmation** - Look for "🤖 Bot is ready!" message
5. **Add to groups** - Add the bot's number to WhatsApp groups where you want to use it

## 📱 Usage

### Available Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `!tagall` | Tag all members in the group | Send in any group chat |
| `!help` | Show available commands | Send in any chat |

### Example Usage

1. Add the bot to any WhatsApp group
2. Send `!tagall` in the group chat
3. The bot will tag all group members with a notification message

## 🛠️ Configuration

### Custom Message
You can customize the tag message by editing the `messageText` in `run-bot.js`:

```javascript
let messageText = '📢 *Your custom message here!*\n\n';
```

### Bot Name
Change the bot signature by modifying:
```javascript
messageText += '\n\n_Tagged by YourName 🤖';
```

## 🌐 Production Deployment

### Option 1: PM2 (Recommended for VPS)

```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start run-bot.js --name "whatsapp-tagall-bot"

# Save PM2 config
pm2 save

# Enable auto-start on server reboot
pm2 startup
```

### Option 2: Docker (Coming Soon)
Docker support will be added in future releases.

## 🛠️ Troubleshooting

### Common Issues

#### QR Code Not Showing
```bash
# Ensure terminal is large enough and try again
clear && npm start
```

#### Authentication Failed
```bash
# Clear session data and re-authenticate
rm -rf .wwebjs_auth/
npm start
```

#### Tags Not Working (Names show but no notifications)
This is the most common issue. Try these solutions:

1. **Make the bot an admin** in WhatsApp groups (highly recommended)
2. **Save the bot's number** in your phone contacts  
3. **Clear session and re-authenticate:**
   ```bash
   rm -rf .wwebjs_auth/
   npm start
   ```
4. **Update dependencies:**
   ```bash
   npm update
   ```

#### Bot Stops Responding
```bash
# Check if process is running
ps aux | grep node

# Restart the bot
# Stop with Ctrl+C and run: npm start
```

### Debug Mode

For detailed logging:
```bash
DEBUG=whatsapp-web.js:* node run-bot.js
```

## 🔧 Development

### Project Structure

```
whatsapp-tagall-bot/
├── run-bot.js          # Main bot application
├── package.json        # Dependencies and scripts
├── start.sh           # Quick start script (Linux/Mac)
├── README.md          # Project documentation
├── LICENSE            # MIT License
├── .gitignore         # Git ignore rules
├── .wwebjs_auth/      # Session data (auto-created, ignored by git)
└── node_modules/      # Dependencies (auto-created, ignored by git)
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Important Notes

- **Dedicated Account**: Use a separate WhatsApp account, not your personal one
- **Admin Permissions**: Making the bot an admin in groups significantly improves tagging reliability
- **Rate Limits**: Don't spam the `!tagall` command to avoid WhatsApp restrictions
- **Session Data**: Never delete `.wwebjs_auth/` folder unless you want to re-authenticate
- **WhatsApp ToS**: This bot uses WhatsApp Web's official API, but review WhatsApp's Terms of Service

## 📊 System Requirements

- **RAM**: 512MB minimum (1GB recommended)
- **Storage**: 500MB+ free space
- **Network**: Stable internet connection
- **OS**: Linux, Windows, macOS

## 🤝 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Search through [existing issues](https://github.com/yourusername/whatsapp-tagall-bot/issues)
3. Create a [new issue](https://github.com/yourusername/whatsapp-tagall-bot/issues/new) with details

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) - The amazing WhatsApp Web API
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) - QR code generation for terminal

## ⭐ Star This Project

If this bot helped you, please give it a star! It helps others discover this project.

---

**Made with ❤️ by [Aarav]**

*For more awesome projects, check out my [GitHub profile](https://github.com/aaravaggarwal3535)*
