# ✍️ Mdify - AI-Powered Markdown Converter

Mdify is a high-performance web application designed to transform unformatted text into professionally structured Markdown documents using state-of-the-art AI models.

![Markdown Preview](https://img.shields.io/badge/Powered%20by-Groq%20%7C%20Gemini%20%7C%20OpenAI-blueviolet)

## ✨ Features

- 🚀 **Lightning Fast**: Powered by Groq's high-speed inference.
- 🎨 **Glassmorphism Design**: Beautiful, modern UI with dark and light mode support.
- 👁️ **Real-time Preview**: See your formatted document as you convert.
- 📚 **Interactive Guide**: Learn Markdown rules with a built-in interactive guide.
- 💾 **Export Options**: Download as `.md` file or copy to clipboard instantly.
- 📁 **File Upload**: Upload `.txt` files directly for conversion.

## 🛠️ Technology Stack

- **Frontend**: Angular 18+, Signals for state management, Glassmorphism CSS.
- **Backend**: Node.js, Express.
- **AI Models**: Groq (Llama 3), Google Gemini, OpenAI (GPT-4o).

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your environment:
   - Copy `.env.sample` to `.env`
   - Add your API keys (Groq is recommended for free/fast usage)
4. Start the server:
   ```bash
   node index.js
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser at `http://localhost:4200`.

## ⚙️ Environment Variables

Located in `backend/.env`:

| Variable | Description | Source |
|----------|-------------|--------|
| `GROQ_API_KEY` | Key for Groq Cloud | [console.groq.com](https://console.groq.com/keys) |
| `GEMINI_API_KEY` | Key for Google Gemini | [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| `OPENAI_API_KEY` | Key for OpenAI | [platform.openai.com](https://platform.openai.com/api-keys) |
| `DEFAULT_AI_PROVIDER` | 'groq', 'gemini', 'openai', or 'mock' | - |

## 📜 License

MIT
