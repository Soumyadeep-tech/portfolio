# Google Gemini API Setup Guide

This guide will help you set up Google Gemini API for your portfolio chatbot.

## 🚀 Quick Setup

### Step 1: Get Your Gemini API Key

1. **Go to Google AI Studio**

   - Visit: https://makersuite.google.com/app/apikey
   - Sign in with your Google account

2. **Create a New API Key**
   - Click "Create API Key"
   - Select or create a Google Cloud project
   - Copy the generated API key

### Step 2: Configure Your Environment

1. **Add to your .env file:**

   ```env
   GEMINI_API_KEY=your-actual-api-key-here
   ```

2. **Restart your backend server:**
   ```bash
   cd backend
   node server.js
   ```

### Step 3: Test the Setup

1. **Check health status:**

   ```bash
   curl http://localhost:5000/health
   ```

   You should see `"has_gemini_config": true`

2. **Test the chatbot:**
   ```bash
   curl -X POST http://localhost:5000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello, tell me about yourself!"}'
   ```

## 🔧 Troubleshooting

### Common Issues

1. **"has_gemini_config": false**

   - Check if `GEMINI_API_KEY` is set in your .env file
   - Ensure no extra spaces or quotes around the key
   - Restart the server after adding the key

2. **API access denied (403 error)**

   - Verify your API key is correct
   - Check if the API key has proper permissions
   - Ensure billing is enabled in Google Cloud Console

3. **Rate limiting (429 error)**
   - You're making too many requests
   - Wait a moment before trying again
   - Consider implementing rate limiting in your frontend

## 📊 Gemini vs OpenAI Comparison

| Feature         | Google Gemini                    | OpenAI GPT           |
| --------------- | -------------------------------- | -------------------- |
| **Cost**        | Free tier available              | Paid usage only      |
| **Models**      | gemini-1.5-flash, gemini-1.5-pro | gpt-3.5-turbo, gpt-4 |
| **Speed**       | Very fast                        | Fast                 |
| **Context**     | Large context window             | Good context window  |
| **Integration** | Google ecosystem                 | Broad ecosystem      |

## 🎯 Benefits of Using Gemini

✅ **Free Tier**: Generous free usage limits  
✅ **Fast Responses**: Optimized for speed  
✅ **Large Context**: Can handle longer conversations  
✅ **Google Integration**: Works well with Google services  
✅ **Regular Updates**: Continuously improved by Google

## 🔐 Security Best Practices

1. **Never commit .env files** to version control
2. **Use environment variables** in production
3. **Rotate API keys** regularly
4. **Monitor usage** to detect unusual activity
5. **Implement rate limiting** to prevent abuse

## 📝 Environment Variables

Required for Gemini:

```env
# Google Gemini Configuration
GEMINI_API_KEY=your-gemini-api-key-here

# Optional: Model configuration
GEMINI_MODEL=gemini-1.5-flash  # Default model
```

## 🚀 Production Deployment

When deploying to production platforms:

### Vercel

```bash
vercel env add GEMINI_API_KEY
```

### Render

Add in Environment Variables section:

- Key: `GEMINI_API_KEY`
- Value: `your-api-key`

### Railway

```bash
railway variables set GEMINI_API_KEY=your-api-key
```

## 📚 Additional Resources

- [Google AI Studio](https://makersuite.google.com/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Gemini Pricing](https://ai.google.dev/pricing)

## 💡 Tips for Better Performance

1. **Use appropriate models**:

   - `gemini-1.5-flash` for speed
   - `gemini-1.5-pro` for complex tasks

2. **Configure generation settings**:

   - Adjust `temperature` for creativity vs consistency
   - Set `maxOutputTokens` to control response length

3. **Implement caching**: Cache common responses to reduce API calls

4. **Handle errors gracefully**: Provide fallback responses for users

Your chatbot is now powered by Google Gemini! 🎉
