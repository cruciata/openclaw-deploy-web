<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/93c3c92c-c6f4-4426-813f-f0f6bd000214

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

1. Push code to the `main` branch.
2. In GitHub repository settings, open **Pages** and set **Source** to **GitHub Actions**.
3. (Optional) Add repository secrets if needed:
   - `GEMINI_API_KEY`
   - `GOOGLE_MAPS_PLATFORM_KEY`
4. The workflow in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) will build and deploy automatically.

After deployment, the site URL is:
`https://cruciata.github.io/openclaw-deploy-web/`
