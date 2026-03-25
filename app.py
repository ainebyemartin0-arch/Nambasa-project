"""
Professional Portfolio Website for Nambasa Daphine
Human Resource Manager - Uganda

This website was custom developed by Ainebye Martin for Nambasa Daphine.
All rights reserved by Nambasa Daphine.

Developer: Ainebye Martin
Client: Nambasa Daphine
Project: Professional Portfolio Website
"""

from flask import Flask, render_template, request, flash, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'nambasa_daphine_portfolio_2026')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///portfolio.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME', 'your-email@gmail.com')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD', 'your-app-password')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER', 'your-email@gmail.com')

db = SQLAlchemy(app)

class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<ContactMessage {self.name}>'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        
        if not all([name, email, subject, message]):
            flash('Please fill in all fields', 'error')
            return redirect(url_for('index') + '#contact')
        
        # Save to database
        contact_message = ContactMessage(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        
        try:
            # Save to database
            db.session.add(contact_message)
            db.session.commit()
            
            # Send email notification
            send_email_notification(name, email, subject, message)
            
            flash('Thank you for your message! I will get back to you soon.', 'success')
        except Exception as e:
            db.session.rollback()
            flash('An error occurred. Please try again.', 'error')
        
        return redirect(url_for('index') + '#contact')

@app.route('/api/messages')
def get_messages():
    messages = ContactMessage.query.order_by(ContactMessage.created_at.desc()).all()
    return jsonify([{
        'name': msg.name,
        'email': msg.email,
        'subject': msg.subject,
        'message': msg.message,
        'created_at': msg.created_at.strftime('%Y-%m-%d %H:%M')
    } for msg in messages])

def send_email_notification(name, sender_email, subject, message):
    """Send email notification when someone contacts through the form"""
    try:
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = app.config['MAIL_DEFAULT_SENDER']
        msg['To'] = app.config['MAIL_DEFAULT_SENDER']  # Send to your email
        msg['Subject'] = f'New Contact Form Message: {subject}'
        
        # Email body
        body = f"""
        You have received a new message from your portfolio website!
        
        Name: {name}
        Email: {sender_email}
        Subject: {subject}
        
        Message:
        {message}
        
        ---
        Sent from Nambasa Daphine Portfolio Website
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP(app.config['MAIL_SERVER'], app.config['MAIL_PORT']) as server:
            server.starttls()
            server.login(app.config['MAIL_USERNAME'], app.config['MAIL_PASSWORD'])
            server.send_message(msg)
            
        print(f"Email notification sent to {app.config['MAIL_DEFAULT_SENDER']}")
        
    except Exception as e:
        print(f"Failed to send email: {e}")
        # Don't raise exception to avoid breaking the form submission

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    with app.app_context():
        db.create_all()
    app.run(debug=os.getenv('FLASK_DEBUG', 'True').lower() == 'true', host='0.0.0.0', port=port)
