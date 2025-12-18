# Deployment Guide for Vercel

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `shweta-cedar-park-website`)
5. Choose "Public" or "Private" (Public is recommended for portfolio)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Navigate to your project directory
cd "D:\Arya\Swetha for Cedar Park website\Website"

# Add the remote repository (replace YOUR_USERNAME and REPO_NAME with your actual values)
git remote add origin https://github.com/BB1ALR1/ShwetaForCPCM.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: You'll need to authenticate with GitHub. You can:
- Use a Personal Access Token (recommended)
- Or use GitHub CLI
- Or use GitHub Desktop

## Step 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in (you can use your GitHub account)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
5. Click "Deploy"
6. Wait for deployment to complete (usually takes 1-2 minutes)

## Step 4: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow Vercel's instructions to update your DNS records

## Automatic Deployments

Once connected, Vercel will automatically deploy:
- Every push to the `main` branch
- Pull requests will create preview deployments

## Troubleshooting

### Images not loading?
- Make sure all image paths are relative (they should be)
- Check that image files are committed to Git

### 404 errors on pages?
- Vercel handles static HTML files automatically
- Make sure all HTML files are in the root directory

### Need to update the site?
- Just push changes to GitHub
- Vercel will automatically redeploy

