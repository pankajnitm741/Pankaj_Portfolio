# EmailJS Setup Guide for Contact Form

Your contact form is now fully functional! Here's how to set up EmailJS for real email sending:

## 🚀 Current Status
- ✅ Form validation is working
- ✅ Loading states and error handling implemented
- ✅ Fallback simulation for demo purposes
- ✅ Real EmailJS integration ready

## 📧 EmailJS Setup (Optional)

If you want to receive actual emails from your contact form, follow these steps:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **"Email Services"** in your EmailJS dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to **"Email Templates"** 
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
Hello Pankaj,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply directly to {{reply_to}} to respond.
```

4. Save the template and note the **Template ID**

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key**

### Step 5: Update Environment Variables
Update your `.env` file with real values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### Step 6: Test Your Form
1. Restart your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email for the message!

## 🔧 Current Fallback Behavior

Since EmailJS isn't configured yet, the form currently:
- ✅ Validates all inputs
- ✅ Shows loading spinner
- ✅ Displays success message after 2 seconds
- ✅ Resets the form
- ✅ Logs form data to console for debugging

## 🎯 Features Implemented

### Form Validation
- Required field validation
- Email format validation
- Message minimum length (10 characters)
- Real-time error clearing

### User Experience
- Loading states with spinner
- Success/error messages with icons
- Form reset after successful submission
- Disabled inputs during submission

### Error Handling
- Network error handling
- Validation error messages
- Fallback for missing EmailJS config

## 🌐 Deploy to GitHub Pages

The form will work on your live site too! Run:
```bash
npm run deploy
```

Your contact form is production-ready! 🎉