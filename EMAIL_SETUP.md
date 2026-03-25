# Email Setup Guide

## 📧 Configure Email for Contact Form

### Step 1: Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate new app password for "Mail"
   - Copy the 16-character password

### Step 2: Update app.py Configuration

Replace these lines in `app.py`:

```python
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # Replace with your Gmail
app.config['MAIL_PASSWORD'] = 'your-app-password'  # Replace with app password
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'  # Replace with your Gmail
```

### Step 3: Alternative Email Providers

**For Outlook/Hotmail:**
```python
app.config['MAIL_SERVER'] = 'smtp-mail.outlook.com'
app.config['MAIL_PORT'] = 587
```

**For Yahoo:**
```python
app.config['MAIL_SERVER'] = 'smtp.mail.yahoo.com'
app.config['MAIL_PORT'] = 587
```

### Step 4: Test Email

1. Run the application
2. Fill out the contact form
3. Check your email for the notification
4. Check the console for any error messages

## 🔒 Security Notes

- Never commit your real email/password to Git
- Use environment variables for production
- App passwords are more secure than regular passwords
