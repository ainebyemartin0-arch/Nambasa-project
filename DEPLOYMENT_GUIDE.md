# 🚀 Complete Deployment Guide

## 📋 Table of Contents
1. [Running Locally](#running-locally)
2. [GitHub Setup](#github-setup)
3. [Netlify Deployment](#netlify-deployment)
4. [Vercel Deployment](#vercel-deployment)
5. [Render Deployment](#render-deployment)

---

## 🏠 Running Locally

### Step 1: Prerequisites
- Python 3.8+ installed
- Git installed
- Code editor (VS Code recommended)

### Step 2: Clone/Download Project
```bash
# If you have the project folder, navigate to it:
cd portfolio

# Or clone from GitHub (after pushing to GitHub):
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Step 3: Create Virtual Environment
```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Configure Email (Optional)
- Open `app.py`
- Update email configuration (see EMAIL_SETUP.md)
- Replace with your actual email credentials

### Step 6: Run Application
```bash
python app.py
```

### Step 7: Access Website
- Open browser and go to: `http://localhost:5000`
- The Flask server will be running on port 5000

---

## 🐙 GitHub Setup

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `portfolio` (or your preferred name)
4. Description: "Professional HR Manager Portfolio"
5. Make it Public
6. Don't initialize with README (you already have one)
7. Click "Create repository"

### Step 2: Push to GitHub
```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Complete portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload
- Go to your GitHub repository
- All files should be visible
- The website is now ready for deployment

---

## 🌐 Netlify Deployment (Static Version)

### Option A: Drag & Drop (Easiest)
1. **Create static files**:
   - Open `index.html` in browser
   - Save as complete HTML (Ctrl+S in browser)
   - Or use `wget`/`curl` to download the rendered page

2. **Deploy to Netlify**:
   - Go to [Netlify.com](https://netlify.com)
   - Sign up/login
   - Drag and drop your HTML file
   - Get your live URL instantly

### Option B: Git Integration
1. **Connect GitHub**:
   - In Netlify dashboard → "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your portfolio repository
   - Build settings: Leave as default (or set to "None" for static)

2. **Deploy Settings**:
   - Build command: Leave blank
   - Publish directory: `.` (root)
   - Click "Deploy site"

### Your Website URL
- Format: `https://your-random-name.netlify.app`
- You can customize the domain name

---

## ⚡ Vercel Deployment (Static Version)

### Step 1: Sign Up
- Go to [Vercel.com](https://vercel.com)
- Sign up with GitHub

### Step 2: Import Project
1. Click "New Project"
2. Select your GitHub repository
3. Choose "Static Files" preset
4. Set output directory to `.`
5. Click "Deploy"

### Step 3: Customize Domain
- Get URL: `https://your-project-name.vercel.app`
- Can add custom domain in settings

---

## 🎨 Render Deployment (Full Flask App)

### Step 1: Prepare for Production
1. **Create `render.yaml`**:
```yaml
services:
  - type: web
    name: portfolio
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: python app.py
    envVars:
      - key: PYTHON_VERSION
        value: 3.9.0
```

2. **Update app.py for production**:
```python
# Add this at the bottom of app.py
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    with app.app_context():
        db.create_all()
    app.run(debug=False, host='0.0.0.0', port=port)
```

### Step 2: Deploy to Render
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Select your portfolio repo
6. Configure:
   - Name: `portfolio`
   - Region: Choose nearest
   - Branch: `main`
   - Runtime: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python app.py`
7. Click "Create Web Service"

### Step 3: Environment Variables
- In Render dashboard → your service → Environment
- Add your email credentials (if using email)
- Never add sensitive data to public code

### Your Website URL
- Format: `https://your-service-name.onrender.com`
- Automatic SSL certificate included

---

## 🔧 Environment Variables (Security)

### For Production (Recommended)
Create `.env` file:
```env
SECRET_KEY=your-secret-key-here
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_DEFAULT_SENDER=your-email@gmail.com
```

Add to `app.py`:
```python
import os
from dotenv import load_dotenv

load_dotenv()

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
```

Add to `requirements.txt`:
```
python-dotenv==0.19.0
```

---

## 📱 Testing Your Live Website

### Checklist:
- [ ] All pages load correctly
- [ ] Contact form works (check email)
- [ ] Mobile responsive design
- [ ] Dark/light mode toggle
- [ ] All navigation links work
- [ ] Social media links work
- [ ] Download CV button works

### Performance:
- [ ] Fast loading (<3 seconds)
- [ ] All images load
- [ ] No console errors
- [ ] Mobile-friendly

---

## 🛠️ Troubleshooting

### Common Issues:

**Port 5000 already in use:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

**Email not working:**
- Check Gmail app password
- Verify email configuration
- Check console for error messages

**Deployment issues:**
- Verify all files are pushed to GitHub
- Check build logs in deployment platform
- Ensure requirements.txt is correct

**CSS/JS not loading:**
- Check file paths in HTML
- Verify static folder structure
- Clear browser cache

---

## 🎉 Success!

Your portfolio website is now:
- ✅ Running locally on your computer
- ✅ Hosted on GitHub
- ✅ Deployed to free hosting platform
- ✅ Accessible via public URL
- ✅ Professional and production-ready

**Share your website URL with the world!** 🌍
