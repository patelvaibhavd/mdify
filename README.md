# Mdify - AI Powered Markdown Converter

Mdify is a premium web application that converts plain text into professionally formatted Markdown using advanced AI models.

## Features
- **AI Conversion**: Choose between Gemini, OpenAI, and Grok.
- **Instant Preview**: Real-time rendering of converted markdown.
- **File Upload**: Upload `.txt` files for bulk conversion.
- **Download**: Export your markdown as a `.md` file.
- **Help Guide**: Interactive markdown syntax rules.
- **Theming**: Sleek Dark and Light modes.

## Tech Stack
- **Frontend**: Angular 21, Lucide Icons, ngx-markdown.
- **Backend**: Node.js, Express, OpenAI SDK, Google Generative AI SDK, Axios.

## Getting Started

### 1. Setup Backend
1. Go to `backend` folder.
2. Create/Update `.env` file with your API keys:
   ```env
   GROK_API_KEY=your_key
   GEMINI_API_KEY=your_key
   OPENAI_API_KEY=your_key
   DEFAULT_AI_PROVIDER=gemini
   ```
3. Run `npm install` (if not already done).
4. Start the server:
   ```bash
   node index.js
   ```

### 2. Setup Frontend
1. Go to `frontend` folder.
2. Run `npm install`.
3. Start the dev server:
   ```bash
   npm start
   ```
4. Open `http://localhost:4200` in your browser.

## Project Structure
- `backend/`: Node.js Express server with AI integrations.
- `frontend/`: Angular application with components for converter, preview, settings, and help.
