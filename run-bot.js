const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Force output flushing
process.stdout.setEncoding('utf8');
process.stderr.setEncoding('utf8');

console.log('Starting WhatsApp TagAll Bot...');
console.log('Initializing client...');
console.log("Admin bana mujhe pahale group ka");

// Create a new client instance with LocalAuth for session persistence
const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "whatsapp-tagall-bot"
    }),
    puppeteer: {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    }
});

// Event: QR Code Generation
client.on('qr', (qr) => {
    console.log('🔄 QR Code ready! Scan the QR code below with your WhatsApp:');
    console.log('📱 Open WhatsApp > Settings > Linked Devices > Link a Device');
    qrcode.generate(qr, { small: true });
    console.log('⏳ Waiting for QR code scan...');
});

// Event: Authentication Success
client.on('authenticated', () => {
    console.log('✅ Authentication successful!');
});

// Event: Authentication Failure
client.on('auth_failure', (message) => {
    console.error('❌ Authentication failed:', message);
});

// Event: Client Ready
client.on('ready', () => {
    console.log('🤖 Bot is ready!');
    console.log('✨ WhatsApp TagAll Bot is now active and listening for commands');
    console.log('📋 Available commands:');
    console.log('   • !tagall - Tag all members in the group');
    console.log('   • !tagtest - Test tagging functionality');
    console.log('   • !help - Show available commands');
});

// Event: Disconnected
client.on('disconnected', (reason) => {
    console.log('🔌 Client was disconnected:', reason);
});

// Simplified message handler for testing
client.on('message_create', async (message) => {
    try {
        if (message.body.toLowerCase() === '!tagall') {
            console.log('📢 TagAll command received from:', message.from);
            
            const chat = await message.getChat();
            
            if (!chat.isGroup) {
                await message.reply('❌ This command only works in group chats!');
                return;
            }
            
            console.log('👥 Processing tagall for group:', chat.name);
            
            const participants = chat.participants;
            if (participants.length === 0) {
                await message.reply('❌ No participants found in this group.');
                return;
            }
            
            // Simple tagging approach
            try {
                const mentions = participants.map(p => p.id._serialized);
                let messageText = '📢 *Attention everyone!*\n\n';
                
                participants.forEach(p => {
                    messageText += `@${p.id.user} `;
                });
                
                messageText += '\n\n_Tagged by Aarav 🤖';
                
                await chat.sendMessage(messageText, { mentions });
                console.log(`✅ Successfully tagged ${mentions.length} members`);
                
            } catch (error) {
                console.error('❌ Tagging failed:', error.message);
                await message.reply('❌ Failed to tag members. Check console for details.');
            }
        }
        else if (message.body.toLowerCase() === '!help') {
            await message.reply('🤖 *WhatsApp Bot Commands:*\n\n• !tagall - Tag all members\n• !help - Show this message');
        }
    } catch (error) {
        console.error('❌ Error processing message:', error);
    }
});

// Global error handling
process.on('uncaughtException', (error) => {
    console.error('💥 Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
    console.error('💥 Unhandled Promise Rejection:', error);
});

// Graceful shutdown handling
process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    try {
        await client.destroy();
    } catch (error) {
        console.error('Error during shutdown:', error);
    }
    process.exit(0);
});

// Initialize the client
client.initialize().catch(error => {
    console.error('💥 Failed to initialize client:', error);
    process.exit(1);
});

console.log('✅ Bot initialization started - waiting for authentication...');
