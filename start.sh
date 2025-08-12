echo "🤖 WhatsApp TagAll Bot - Quick Start"
echo "===================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies are already installed"
fi

echo ""
echo "🚀 Starting WhatsApp TagAll Bot..."
echo "📱 Get ready to scan the QR code!"
echo ""
echo "Instructions:"
echo "1. A QR code will appear below"
echo "2. Open WhatsApp on your phone"
echo "3. Go to Settings > Linked Devices > Link a Device"
echo "4. Scan the QR code"
echo "5. Wait for 'Bot is ready!' message"
echo ""
echo "Commands after setup:"
echo "• !tagall - Tag all members in group"
echo "• !help - Show help message"
echo ""
echo "Press Ctrl+C to stop the bot"
echo "===================================="
echo ""

# Start the bot
npm start