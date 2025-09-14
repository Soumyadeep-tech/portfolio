# Portfolio Backend

This is the backend server for the portfolio website, providing API endpoints for contact form submissions and AI chatbot functionality.

## 🚀 Features

- **Contact Form API**: Handles contact form submissions and sends emails
- **AI Chatbot API**: Provides AI-powered chat responses using Google Gemini
- **Health Check**: Monitor server status and configuration
- **CORS Configuration**: Proper cross-origin resource sharing setup

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Gmail account (for email sending)
- Google Gemini API key (for chatbot functionality)

## 🛠️ Installation

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:

   ```env
   PORT=5000
   FRONTEND_URL=http://localhost:5173

   # Email Configuration
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   TO_EMAIL=your-email@gmail.com

   # Google Gemini Configuration
   GEMINI_API_KEY=your-gemini-api-key
   ```

## 🔑 Environment Variables

| Variable         | Description                       | Required                    |
| ---------------- | --------------------------------- | --------------------------- |
| `PORT`           | Server port number                | No (default: 5000)          |
| `FRONTEND_URL`   | Frontend URL for CORS             | Yes                         |
| `EMAIL_USER`     | Gmail address for sending emails  | Yes (for contact form)      |
| `EMAIL_PASS`     | Gmail app password                | Yes (for contact form)      |
| `TO_EMAIL`       | Email address to receive messages | No (defaults to EMAIL_USER) |
| `GEMINI_API_KEY` | Google Gemini API key for chatbot | Yes (for AI features)       |

## 🚀 Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### GET `/`

Returns a simple status message confirming the server is running.

**Response:**

```
✅ Backend is live and working!
```

### GET `/health`

Returns detailed health information about the server.

**Response:**

```json
{
  "status": "OK",
  "timestamp": "2025-09-14T18:46:38.789Z",
  "uptime": 10.98,
  "environment": {
    "node_version": "v22.15.0",
    "port": 5000,
    "has_email_config": true,
    "has_gemini_config": true
  }
}
```

### POST `/contact`

Handles contact form submissions and sends emails.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**

```json
{
  "ok": true,
  "message": "Email sent"
}
```

### POST `/chat`

Processes AI chatbot messages using Google Gemini.

**Request Body:**

```json
{
  "message": "Hello, tell me about the portfolio owner"
}
```

**Response:**

```json
{
  "reply": "Hello! I'd be happy to tell you about the portfolio owner..."
}
```

## 🔧 Configuration Notes

### Gmail Setup

To use the contact form:

1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" for this application
3. Use the app password (not your regular password) in `EMAIL_PASS`

### Google Gemini Setup

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file as `GEMINI_API_KEY`

## 🛡️ Security Features

- CORS configuration with allowed origins
- Environment variable validation
- Error handling without exposing sensitive information
- Input validation for all endpoints

## 📚 Dependencies

- **express**: Web framework
- **nodemailer**: Email sending
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **@google/generative-ai**: Google Gemini API integration

## 🚀 Deployment

The backend is configured for deployment on platforms like:

- Render
- Heroku
- Railway
- Vercel (serverless functions)

Make sure to set all environment variables in your deployment platform.

## 🐛 Troubleshooting

### Common Issues

1. **Email not sending**: Check Gmail app password and 2FA settings
2. **Chatbot not working**: Verify Gemini API key and Google AI Studio setup
3. **CORS errors**: Ensure FRONTEND_URL matches your frontend domain
4. **Port conflicts**: Change PORT environment variable if 5000 is in use

### Health Check

Use the `/health` endpoint to verify:

- Server is running
- Environment variables are configured
- Dependencies are working

## 📄 License

This project is part of the personal portfolio website.
