# ✅ Vercel Deployment Checklist

## Before Deployment

- [x] Build works locally (`npm run build` succeeds)
- [x] `vercel.json` configured for SPA routing
- [x] Environment variables properly configured
- [x] All dependencies installed

## Vercel Configuration

### Project Settings (CRITICAL)
```
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

### Environment Variables
```
VITE_API_URL = https://portfolio-a7qc.onrender.com
```

## Common Errors & Quick Fixes

### 1. "Build Command Failed"
**Cause**: Wrong root directory
**Fix**: Set Root Directory to `frontend`

### 2. "Module Not Found"
**Cause**: Import paths issue
**Fix**: Check all imports are relative to frontend/src

### 3. "404 on Routes"
**Cause**: Missing SPA configuration
**Fix**: Ensure vercel.json has rewrite rules

### 4. "API Calls Fail in Production"
**Cause**: Environment variable not set
**Fix**: Add VITE_API_URL in Vercel dashboard

## Deployment Steps

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix deployment configuration"
   git push origin main
   ```

2. **Vercel Dashboard**:
   - New Project → Import GitHub repo
   - **Root Directory**: `frontend` ⚠️ IMPORTANT
   - Framework: Vite
   - Deploy

3. **Add Environment Variable**:
   - Settings → Environment Variables
   - Name: `VITE_API_URL`
   - Value: `https://portfolio-a7qc.onrender.com`

4. **Redeploy** after adding environment variable

## Test After Deployment

- [ ] Website loads correctly
- [ ] Contact form works
- [ ] Chatbot responds
- [ ] All pages accessible
- [ ] Mobile responsive

## If Still Failing

Share these with me:
1. Vercel build logs (from Functions tab)
2. Browser console errors
3. Screenshot of Vercel project settings
4. Exact error message