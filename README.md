# LoopSync - AI-Powered HR Trust Infrastructure

A sophisticated dual-portal web application for building trust and transparency in organizations, powered by Claude AI.

## 🌟 Features

### Employee Portal
- 💬 **Conversational AI Chat** - Talk to Coro, your empathetic AI assistant
- 🛡️ **Anonymous Feedback** - Share thoughts safely and securely
- 🎯 **Quick Actions** - Starter prompts for common scenarios
- 📊 **Personal Dashboard** - Track your feedback history

### Owner Portal
- 📈 **Culture Health Score** - Real-time organizational health metrics
- 🤖 **AI-Powered Insights** - 5-point daily digest by Coro AI
- 📉 **Sentiment Analysis** - Timeline charts across departments
- 🔍 **Feedback Stream** - Live feed with filtering and search
- ⚠️ **Risk Radar** - Early warning system for culture issues
- 🎨 **Beautiful Visualizations** - Glass morphism design with 3D elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Claude API key from [console.anthropic.com](https://console.anthropic.com)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

### API Key Setup

1. Click the **Settings** gear icon in the top-right
2. Enter your Claude API key
3. Click **Test Connection** to verify
4. Click **Save**

## 🎨 Design System

### Glass Morphism
Every major card uses frosted glass effects:
- `background: rgba(255, 255, 255, 0.7)`
- `backdrop-filter: blur(10px)`
- `border: 1px solid rgba(255, 255, 255, 0.3)`

### Color Palette
- **Primary**: Light gradient blues (trust, calm)
- **Secondary**: Warm creams (approachable)
- **Accents**: 🟢🟡🔴 for urgency indicators

### 3D Background
Floating geometric shapes with subtle animations create depth and visual interest.

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/          # Reusable components (GlassCard, Button, Input, etc.)
│   ├── layout/          # Layout components (Header, PortalToggle, Background3D)
│   ├── employee/        # Employee Portal components
│   └── owner/           # Owner Portal components
├── services/            # API services (Claude integration)
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and mock data
└── styles/              # Global styles and Tailwind config
```

## 🔧 Tech Stack

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling with glass morphism
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Zustand** - State management
- **Anthropic SDK** - Claude AI integration
- **Lucide React** - Icons

## 🎯 Key Interactions

### Portal Toggle
Click the **Employee/Owner** toggle in the top-right to switch between portals. Smooth 700ms transition with staggered card animations.

### Chat Interface
- Type and press Enter to send
- Coro responds with streaming text
- Messages persist during session
- Typing indicator while Coro thinks

### Feedback Filtering
- Filter by urgency (🟢🟡🔴)
- Search by keywords
- Click to expand/collapse details

## 📊 Mock Data

The demo includes 35+ realistic feedback entries covering:
- Work-life balance
- Communication breakdowns
- Process improvements
- Team wins and celebrations
- Tool/resource requests
- Career development concerns

Sentiment data spans 90 days across 5 departments.

## ⚠️ Important Notes

### API Key Security
This demo uses `dangerouslyAllowBrowser: true` for the Claude SDK. **Never do this in production!**

In production:
1. Store API keys server-side
2. Create a backend proxy endpoint
3. Make API calls from your server
4. Return results to the frontend

### Data Persistence
Currently using:
- `localStorage` for settings and portal state
- In-memory state for chat and filters

For production, integrate with a real database.

## 🤝 Contributing

This is a demo project. Feel free to fork and customize for your needs!

## 📄 License

ISC

## 🙏 Acknowledgments

Built with Claude Code using Claude Sonnet 4.5
Design inspired by modern glass morphism trends
Mock data generated for realistic demo experience

---

**Made with ❤️ for building trust and transparency in organizations**
