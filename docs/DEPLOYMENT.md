# 🚀 Vercel Deployment Guide for Abdul Hameed Portfolio

## Prerequisites
- GitHub account
- Vercel account (free at https://vercel.com)

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to https://github.com/new
2. Fill in:
   - **Repository name**: `abdul-hameed-portfolio`
   - **Description**: `Professional portfolio website for Abdul Hameed - Backend Developer`
   - **Visibility**: Public (or Private)
   - **DO NOT** check "Initialize with README"
3. Click **Create repository**
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/abdul-hameed-portfolio.git`)

### Option B: Using GitHub CLI (if installed)
```bash
gh repo create abdul-hameed-portfolio --public --source=. --remote=origin
```

---

## Step 2: Push Code to GitHub

Open your terminal in the project folder and run:

```bash
# Add the remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/abdul-hameed-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Method 1: Import from GitHub (Recommended)

1. Go to https://vercel.com/new
2. Click **"Add GitHub Account"** or select your account
3. Find and select **abdul-hameed-portfolio** repository
4. Click **Import**

### Configure Project Settings:
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `.` (leave as is)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

### Add Environment Variables:
**IMPORTANT**: Before clicking Deploy, add your email credentials:

| Variable Name | Value |
|---------------|-------|
| `EMAIL_USER` | `adhameed2k3@gmail.com` |
| `EMAIL_APP_PASSWORD` | `irlj fual gjkq tucy` |

5. Click **Deploy**

---

## Step 4: Verify Deployment

After deployment completes:
1. Click the generated URL (e.g., `abdul-hameed-portfolio.vercel.app`)
2. Browse to the Contact section
3. Submit a test message
4. Check your email for the notification

---

## Step 5: Custom Domain (Optional)

### Add Your Own Domain:
1. Go to your project on Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed by Vercel

---

## Troubleshooting

### Contact Form Not Working?
1. Check Environment Variables in Vercel Dashboard
2. Verify EMAIL_APP_PASSWORD has no extra spaces
3. Check Vercel Function Logs for errors

### Build Failing?
1. Check Build Logs in Vercel Dashboard
2. Make sure all dependencies are in package.json
3. Test locally with `npm run build`

---

## Quick Reference Commands

```bash
# View current remotes
git remote -v

# Push updates
git add .
git commit -m "Your message"
git push

# Force rebuild on Vercel
git commit --allow-empty -m "Trigger deployment"
git push
```

---

## Security Note

⚠️ **IMPORTANT**: You shared your Gmail App Password in the chat earlier. For security:
1. The password is stored safely in `.env.local` (gitignored)
2. Add it to Vercel as an environment variable
3. Consider regenerating the App Password after deployment
4. Never commit secrets to git

---

## Next Steps After Deployment

1. ✅ Test the contact form
2. ✅ Share your portfolio URL
3. ✅ Add to your resume/LinkedIn
4. 🔄 Update content as needed (just push to GitHub)
