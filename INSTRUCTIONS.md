# Deployment Instructions for Mdify

This project is now configured to be deployed on **Netlify**. The backend Express server has been replaced with **Netlify Functions** for a serverless, cost-effective, and easier-to-manage architecture.

## 🚀 Deployment Steps

### 1. Manual Deployment via Netlify CLI
If you want to deploy from your terminal:
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Link your project: `netlify link`
3. Deploy: `netlify deploy --build` (for preview) or `netlify deploy --prod` (for production)

### 2. Continuous Deployment (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Go to [Netlify Dashboard](https://app.netlify.com/).
3. Click **"Add new site"** -> **"Import an existing project"**.
4. Select your repository.
5. Netlify should automatically detect the settings from `netlify.toml`:
   - **Build command:** `cd frontend && npm install && npm run build`
   - **Publish directory:** `frontend/dist/frontend/browser`
   - **Functions directory:** `netlify/functions`
6. Click **"Deploy site"**.

## 🔑 Environment Variables
You must configure the following environment variables in the Netlify Dashboard (**Site settings > Build & deploy > Environment variables**):

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | Your Google Gemini API Key |
| `GROQ_API_KEY` | Your Groq API Key |
| `OPENAI_API_KEY` | Your OpenAI API Key (Optional) |
| `DEFAULT_AI_PROVIDER` | Default provider to use (e.g., `gemini`, `groq`, `openai`) |

## 🛠 Local Development
To run the frontend and functions locally:
1.  **Requirement**: Install Netlify CLI: `npm install -g netlify-cli`
2.  **Install dependencies**:
    ```bash
    npm install          # Root dependencies
    cd frontend && npm install  # Frontend dependencies
    ```
3.  **Run locally**:
    ```bash
    netlify dev
    ```
    This will:
    - Start the Angular app on `http://localhost:4200`
    - Start the Netlify Functions on `http://localhost:8888`
    - Automatically proxy `/.netlify/functions` requests to the local server.

### Environment Files
The frontend uses Angular environment files:
- `src/environments/environment.ts`: Used for local development (points to local functions).
- `src/environments/environment.prod.ts`: Used for production (points to `https://mdify.netlify.app/.netlify/functions`).

---
*Note: The old `backend` folder is no longer used and can be safely deleted.*
