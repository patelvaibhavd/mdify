# ✍️ Mdify - AI-Powered Markdown Converter

Mdify is a high-performance web application designed to transform unformatted text into professionally structured Markdown documents using state-of-the-art AI models.

![Markdown Preview](https://img.shields.io/badge/Powered%20by-Groq%20%7C%20Gemini%20%7C%20OpenAI-blueviolet)

## ✨ Features

- 🚀 **Lightning Fast**: Powered by Groq's high-speed inference.
- 🎨 **Glassmorphism Design**: Beautiful, modern UI with dark and light mode support.
- 👁️ **Real-time Preview**: See your formatted document as you convert.
- 📚 **Interactive Guide**: Learn Markdown rules with a built-in interactive guide.
- 💾 **Export Options**: Download as `.md` file or copy to clipboard instantly.

## 🛠️ Technology Stack

- **Frontend**: Angular 18+, Signals for state management, Glassmorphism CSS.
- **Serverless**: Netlify Functions (Node.js).
- **AI Models**: Groq (Llama 3.3), Google Gemini, OpenAI (GPT-4o).

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (for local development)

### 2. Setup & Development
1. **Clone the repository** and install root dependencies:
   ```bash
   npm install
   ```

2. **Install Frontend dependencies**:
   ```bash
   cd frontend && npm install
   cd ..
   ```

3. **Configure your environment**:
   - Create a `.env` file in the root directory.
   - Add your API keys:
     ```env
     GROQ_API_KEY=your_key_here
     GEMINI_API_KEY=your_key_here
     OPENAI_API_KEY=your_key_here
     DEFAULT_AI_PROVIDER=gemini
     ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   This will start the Angular frontend and Netlify Functions concurrently.

## ⚙️ Environment Variables

For local development, create a `.env` file in the root. For production, configure these in the Netlify Dashboard.

| Variable | Description | Source |
|----------|-------------|--------|
| `GROQ_API_KEY` | Key for Groq Cloud | [console.groq.com](https://console.groq.com/keys) |
| `GEMINI_API_KEY` | Key for Google Gemini | [aistudio.google.com](https://aistudio.google.com/app/apikey) |
| `OPENAI_API_KEY` | Key for OpenAI (Optional) | [platform.openai.com](https://platform.openai.com/api-keys) |
| `DEFAULT_AI_PROVIDER` | 'groq', 'gemini', 'openai', or 'mock' | - |

## 📜 License

[MIT](LICENSE)
