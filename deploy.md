# Deployment Instructions

## GitHub Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `mounika-portfolio`
   - Description: `Modern portfolio website for Mounika K - Full Stack Developer`
   - Make it public
   - Don't initialize with README (we already have one)

2. **Initialize Git and push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Modern portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mounika-portfolio.git
git push -u origin main
```

## Vercel Deployment

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live at: `https://mounika-portfolio.vercel.app`

## Manual Commands

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Environment Setup

Make sure you have:
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to Settings > Domains
3. Add your custom domain
4. Update DNS records as instructed

## Automatic Deployments

- Every push to `main` branch will automatically deploy
- Pull requests create preview deployments
- No manual deployment needed after initial setup
