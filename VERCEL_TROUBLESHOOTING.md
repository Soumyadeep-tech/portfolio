# 🚨 Vercel Deployment Troubleshooting

## Quick Fix Steps

### 1. **Correct Vercel Project Settings**

When creating/configuring your Vercel project:

**❌ Common Mistake:**
- Root Directory: `.` (workspace root)

**✅ Correct Settings:**
- **Root Directory**: `frontend`
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2. **Simplified vercel.json**

Replace the current vercel.json with this minimal version:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. **Environment Variables Setup**

In Vercel Dashboard → Settings → Environment Variables:

**Name**: `VITE_API_URL`
**Value**: `https://portfolio-a7qc.onrender.com`
**Environment**: Production

### 4. **Package.json Check**

Ensure your frontend/package.json has correct scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Common Deployment Errors & Solutions

### Error: "Build failed"
**Solution**: Check if you're setting the correct root directory to `frontend`

### Error: "404 on page routes"
**Solution**: Ensure vercel.json has the rewrite rule

### Error: "Environment variables not working"
**Solution**: Add `VITE_API_URL` in Vercel dashboard

### Error: "Module not found"
**Solution**: All imports should use relative paths from the frontend directory

## Step-by-Step Deployment

1. **Go to Vercel Dashboard**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure settings:**
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: **npm run build**
   - Output Directory: **dist**
5. **Add Environment Variable:**
   - Name: `VITE_API_URL`
   - Value: `https://portfolio-a7qc.onrender.com`
6. **Deploy**

## If Still Failing

Please share:
1. The exact error message from Vercel
2. Build logs from Vercel dashboard
3. Screenshot of your Vercel project settings

Then I can provide a specific solution!