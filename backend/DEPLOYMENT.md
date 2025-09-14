# 🚀 Backend Deployment Guide

Your backend is production-ready! Here are the step-by-step instructions for deploying to various platforms.

## 📋 Pre-Deployment Checklist

✅ **Environment Variables Ready**

- EMAIL_USER: spaulisback@gmail.com
- EMAIL_PASS: csuxsoxvobgvuijo
- TO_EMAIL: soumyadeepp93@gmail.com
- GEMINI_API_KEY: AIzaSyASFWsbQbSvVK8nI6z0GTfqjCcFLdFsF_A
- FRONTEND_URL: [Your deployed frontend URL]

✅ **Code Repository**

- Push your backend code to GitHub
- Ensure package.json has "start" script

## 🟢 Option 1: Render (Recommended)

### Why Render?

- ✅ Free tier available
- ✅ Easy deployment from GitHub
- ✅ Automatic SSL certificates
- ✅ Built-in monitoring

### Steps:

1. **Prepare Repository**

   ```bash
   git add .
   git commit -m "Prepare backend for deployment"
   git push origin main
   ```

2. **Deploy on Render**

   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder as root directory

3. **Configuration**

   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Environment Variables**
   Add these in Render dashboard:

   ```
   EMAIL_USER=spaulisback@gmail.com
   EMAIL_PASS=csuxsoxvobgvuijo
   TO_EMAIL=soumyadeepp93@gmail.com
   GEMINI_API_KEY=AIzaSyASFWsbQbSvVK8nI6z0GTfqjCcFLdFsF_A
   FRONTEND_URL=https://your-frontend-domain.com
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Test your endpoints

## 🟣 Option 2: Railway

### Why Railway?

- ✅ Simple deployment process
- ✅ Great free tier
- ✅ PostgreSQL integration available
- ✅ Excellent logs and metrics

### Steps:

1. **Deploy with Railway**

   ```bash
   npm install -g @railway/cli
   railway login
   railway init
   railway up
   ```

2. **Set Environment Variables**
   ```bash
   railway variables set EMAIL_USER=spaulisback@gmail.com
   railway variables set EMAIL_PASS=csuxsoxvobgvuijo
   railway variables set TO_EMAIL=soumyadeepp93@gmail.com
   railway variables set GEMINI_API_KEY=AIzaSyASFWsbQbSvVK8nI6z0GTfqjCcFLdFsF_A
   railway variables set FRONTEND_URL=https://your-frontend-domain.com
   ```

## ⚡ Option 3: Vercel (Serverless)

### Why Vercel?

- ✅ Serverless functions
- ✅ Global edge network
- ✅ Automatic scaling
- ✅ Great integration with frontend

### Steps:

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Create Vercel Configuration**
   Create `vercel.json` in backend folder:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/server.js"
       }
     ]
   }
   ```

3. **Deploy**

   ```bash
   cd backend
   vercel
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   vercel env add TO_EMAIL
   vercel env add GEMINI_API_KEY
   vercel env add FRONTEND_URL
   ```

## 🔧 Post-Deployment Steps

### 1. Update Frontend URLs

Update your frontend to use the deployed backend URL:

**In your React components (Chatbot.jsx, Contact.jsx):**

```javascript
// Replace this:
const res = await fetch("https://portfolio-a7qc.onrender.com/chat", {

// With your new backend URL:
const res = await fetch("https://your-backend-domain.com/chat", {
```

### 2. Test All Endpoints

Test your deployed backend:

```bash
# Health check
curl https://your-backend-domain.com/health

# Contact form
curl -X POST https://your-backend-domain.com/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello"}'

# Chatbot
curl -X POST https://your-backend-domain.com/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello"}'
```

### 3. Update CORS Configuration

Make sure your `FRONTEND_URL` environment variable matches your deployed frontend domain.

## 🛠️ Troubleshooting

### Common Issues:

1. **Environment Variables Not Working**

   - Double-check all variables are set correctly
   - Restart the service after adding variables

2. **CORS Errors**

   - Ensure `FRONTEND_URL` matches your frontend domain exactly
   - Include protocol (https://) in the URL

3. **Health Check Fails**

   - Check if all environment variables are loaded
   - Use `/health` endpoint to debug configuration

4. **Email Not Sending**

   - Verify Gmail app password is correct
   - Check Gmail account 2FA settings

5. **Chatbot Not Working**
   - Verify Gemini API key is valid
   - Check Google AI Studio for usage limits

## 📊 Monitoring Your Deployment

### Health Monitoring

Your backend includes a health endpoint at `/health`:

```json
{
  "status": "OK",
  "timestamp": "2025-09-14T18:54:05.013Z",
  "uptime": 11.17,
  "environment": {
    "node_version": "v22.15.0",
    "port": 5000,
    "has_email_config": true,
    "has_gemini_config": true
  }
}
```

### Log Monitoring

- **Render**: Built-in log viewer
- **Railway**: Real-time logs in dashboard
- **Vercel**: Function logs in dashboard

## 🎯 Recommended Approach

For your portfolio project, I recommend **Render** because:

- Free tier is generous
- Easy GitHub integration
- Great for Node.js applications
- Reliable uptime
- Simple environment variable management

## 🔒 Security Notes

- Never commit `.env` files to GitHub
- Use environment variables for all sensitive data
- Regularly rotate API keys
- Monitor usage for unusual activity

## 📞 Support

If you encounter issues:

1. Check the platform's documentation
2. Use the health endpoint to debug
3. Check environment variable configuration
4. Verify all dependencies are installed

Your backend is production-ready! Choose your preferred platform and deploy! 🚀
