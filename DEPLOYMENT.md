# 🚀 Deployment Guide

## Overview

This project can be deployed in two ways, both giving you the **exact same React website**:

1. **Vercel** - For production hosting with custom domain
2. **Google Colab** - For quick demos without any setup

---

## Option 1: Deploy to Vercel ⚡

### Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### Steps

#### Method A: One-Click Deploy (Fastest)

1. Click the button below:

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/idoo25/cloud_test1)

2. Follow the prompts to:
   - Connect your GitHub account
   - Name your project
   - Click "Deploy"

3. Wait 1-2 minutes for the build

4. Your site is live! 🎉

#### Method B: Manual Import

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New Project"

3. Import your Git repository:
   ```
   https://github.com/idoo25/cloud_test1
   ```

4. Vercel auto-detects the configuration:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Click "Deploy"

6. Done! Your site is live with:
   - Automatic HTTPS
   - Global CDN
   - Preview deployments for PRs
   - Custom domain support

### Environment Variables (Optional)

If you add real sensor APIs or AI services later:

1. Go to Project Settings → Environment Variables
2. Add your variables:
   ```
   API_KEY=your_key_here
   API_ENDPOINT=https://api.example.com
   ```
3. Redeploy

### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain (e.g., `plant-hub.com`)
3. Update DNS records as shown
4. SSL certificate auto-generated

---

## Option 2: Run in Google Colab 📊

### Prerequisites
- Google account
- Web browser

### Steps

#### Quick Start

1. Click the button below:

   [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/idoo25/cloud_test1/blob/main/Run_Website_in_Colab.ipynb)

2. The notebook will open in Google Colab

3. Click **Runtime → Run all**

4. Wait for the cells to execute:
   - Installs Node.js (1-2 minutes)
   - Clones repository (~30 seconds)
   - Installs dependencies (1-2 minutes)
   - Starts dev server (~30 seconds)
   - Creates public URL (~10 seconds)

5. Look for the output with the public URL:
   ```
   🌐 Public URL: https://xxxx.ngrok.io
   ```

6. Click the URL to view your site!

#### Manual Method

1. Download `Run_Website_in_Colab.ipynb` from this repository

2. Go to [colab.research.google.com](https://colab.research.google.com)

3. Click **File → Upload notebook**

4. Select the downloaded file

5. Click **Runtime → Run all**

6. Follow the output for the public URL

### Features in Colab

- ✅ **Hot Reload**: Code changes update automatically
- ✅ **Public URL**: Share with anyone via ngrok link
- ✅ **Free Hosting**: As long as the notebook is running
- ✅ **No Setup**: Everything installed automatically
- ✅ **Same Code**: Exact React app from repository

### Keeping it Running

The server stays active while:
- The Colab tab is open
- The runtime is connected
- The cell is executing

To stop:
- Click **Runtime → Interrupt execution**

To restart:
- Re-run the server cell

---

## Comparison

| Feature | Vercel | Google Colab |
|---------|--------|--------------|
| **Setup Time** | 2 minutes | 5 minutes |
| **Custom Domain** | ✅ Yes | ❌ No |
| **Uptime** | 99.99% | While notebook runs |
| **Build Time** | 1-2 min | 4-5 min first run |
| **SSL/HTTPS** | ✅ Auto | ✅ Via ngrok |
| **Hot Reload** | ❌ No | ✅ Yes |
| **Best For** | Production | Demos, Development |
| **Cost** | Free tier | Free |
| **Performance** | Global CDN | Good |

---

## Troubleshooting

### Vercel Issues

**Build Failed**
```bash
# Check logs in Vercel dashboard
# Common fixes:
# 1. Ensure package.json is valid
# 2. Check Node version (18+ required)
# 3. Clear build cache and retry
```

**Site Not Loading**
- Check DNS propagation (24-48 hours for custom domains)
- Verify deployment status in dashboard
- Check browser console for errors

### Colab Issues

**Node.js Installation Failed**
```python
# Re-run the installation cell
# Or manually install:
!curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
!sudo apt-get install -y nodejs
```

**Server Won't Start**
```python
# Check port availability
!lsof -i :5173

# Kill existing process if needed
!kill -9 $(lsof -t -i:5173)

# Re-run the server cell
```

**ngrok URL Not Working**
```python
# Alternative: Use localtunnel
!npm install -g localtunnel
!lt --port 5173
```

**Module Not Found Errors**
```python
# Re-install dependencies
!rm -rf node_modules package-lock.json
!npm install
```

---

## Local Development

For development on your machine:

```bash
# Clone repository
git clone https://github.com/idoo25/cloud_test1.git
cd cloud_test1

# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Tools

**VS Code Extensions** (recommended):
- ESLint
- Tailwind CSS IntelliSense
- TypeScript and JavaScript
- Vite

**Commands**:
```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Format code (if prettier configured)
npm run format
```

---

## Performance Optimization

### For Vercel

1. **Enable Compression**:
   - Automatic in production

2. **Image Optimization**:
   ```jsx
   // Use Next.js Image component or optimize before upload
   ```

3. **Code Splitting**:
   ```tsx
   // Already handled by Vite
   const Component = lazy(() => import('./Component'))
   ```

4. **Caching**:
   ```json
   // vercel.json
   {
     "headers": [{
       "source": "/assets/(.*)",
       "headers": [{
         "key": "Cache-Control",
         "value": "public, max-age=31536000, immutable"
       }]
     }]
   }
   ```

### For Colab

1. **Use Production Build**:
   ```bash
   npm run build
   npx serve dist
   ```

2. **Minimize Dependencies**:
   - Only install what you need

3. **Monitor Resources**:
   ```python
   # Check memory usage
   !free -h
   ```

---

## CI/CD Setup (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

---

## Support

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)

### Google Colab
- [Colab FAQ](https://research.google.com/colaboratory/faq.html)
- [ngrok Documentation](https://ngrok.com/docs)

### This Project
- [GitHub Issues](https://github.com/idoo25/cloud_test1/issues)
- [README](./README.md)

---

**Happy Deploying! 🚀**
