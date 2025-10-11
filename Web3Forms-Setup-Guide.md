# Web3Forms Setup Guide

This guide will help you set up Web3Forms to enable form submissions via email without requiring a backend.

## What is Web3Forms?

Web3Forms is a free service that allows you to receive form submissions directly to your email without setting up a backend server. It's perfect for contact forms, project inquiries, and newsletter subscriptions.

## Setup Steps

### 1. Create a Web3Forms Account

1. Go to [https://web3forms.com](https://web3forms.com)
2. Click "Get Started" or "Create Access Key"
3. Enter your email address (muteebcheema243@gmail.com)
4. You'll receive an Access Key via email

### 2. Get Your Access Key

1. Check your email inbox for the Web3Forms access key
2. Copy the access key (it will look like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 3. Update the Code

Replace `YOUR_WEB3FORMS_ACCESS_KEY` in the following files with your actual access key:

#### File 1: `src/components/sections/project-form-section.tsx`

Find this line (around line 89):
```typescript
formDataToSend.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY")
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key.

#### File 2: `src/components/sections/footer.tsx`

Find this line (around line 33):
```typescript
formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY")
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key.

## Features

### Contact Form (Project Inquiry)
- Sends detailed project information to your email
- Includes: name, email, company, phone, project type, budget, timeline, services, goals, and description

### Newsletter Subscription
- Sends newsletter subscription notifications to your email
- Includes: subscriber email address

## All Submissions Go To

**Email:** muteebcheema243@gmail.com

All form submissions from both the contact form and newsletter will be sent to this email address.

## Free Tier

Web3Forms offers:
- 250 submissions per month for free
- No credit card required
- Spam filtering included
- Email notifications

## Need More Submissions?

If you need more than 250 submissions per month, you can upgrade to a paid plan at [https://web3forms.com/pricing](https://web3forms.com/pricing)

## Security Note

The access key is safe to be public in your frontend code. It only allows sending emails to your registered email address.

## Testing

After setting up your access key:
1. Fill out the contact form or newsletter subscription
2. Submit the form
3. Check your email inbox (muteebcheema243@gmail.com) for the submission

## Support

If you need help, visit [https://web3forms.com/docs](https://web3forms.com/docs)
