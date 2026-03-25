# Nambasa Daphine - Professional HR Manager Portfolio

A modern, responsive portfolio website for Nambasa Daphine, a professional Human Resource Manager from Uganda. Built with Flask backend and modern frontend technologies.

## 📋 Project Overview

This website serves as a digital platform for Nambasa Daphine to:
- Display professional experience and qualifications
- Showcase HR expertise and specializations
- Provide contact information for potential opportunities
- Share educational background and certifications

## 🎯 Key Features

- **Professional Design**: Clean, modern interface optimized for HR professionals
- **Responsive Layout**: Perfect display on desktop, tablet, and mobile devices
- **Contact Management**: Direct email notifications for inquiries
- **Dark/Light Mode**: User preference toggle for comfortable viewing
- **Smooth Animations**: Professional transitions and micro-interactions
- **SEO Optimized**: Search engine friendly structure

## 🛠️ Technology Stack

### Backend
- **Flask** (Python Web Framework)
- **SQLite** (Database)
- **Flask-SQLAlchemy** (ORM)
- **SMTP Email** (Contact notifications)

### Frontend
- **HTML5** (Semantic markup)
- **CSS3** (Modern styling with animations)
- **JavaScript** (Interactive features)
- **AOS** (Animate on Scroll library)
- **Font Awesome** (Icons)

## 📁 Project Structure

```
portfolio/
├── app.py                 # Flask application
├── requirements.txt        # Python dependencies
├── templates/
│   └── index.html         # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css      # Stylesheets
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/
│       └── nambasa.jpg    # Professional photo
├── COPYRIGHT_ASSIGNMENT.md # Copyright documentation
└── README.md              # Project documentation
```

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Git
- Modern web browser

### Local Development

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   .\venv\Scripts\activate  # Windows
   # source venv/bin/activate  # macOS/Linux
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure email (optional)**
   - Copy `.env.example` to `.env`
   - Update email credentials in `.env`

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Access the website**
   - Open browser to `http://localhost:5000`

## 🌐 Deployment Options

### Free Hosting Platforms

1. **Render.com** (Recommended)
   - Full Flask functionality
   - Working contact form
   - Free SSL certificate

2. **Netlify.com** (Static)
   - Easy deployment
   - Fast loading
   - No contact form

3. **Vercel.com** (Static)
   - GitHub integration
   - Modern deployment
   - No contact form

### Production Setup

For production deployment:
1. Set environment variables
2. Configure email service
3. Update database URI
4. Set debug mode to False

## 📧 Contact Form Configuration

To enable email notifications:

1. **Gmail Setup**
   - Enable 2-factor authentication
   - Generate app password
   - Update email configuration

2. **Alternative Providers**
   - Outlook: `smtp-mail.outlook.com`
   - Yahoo: `smtp.mail.yahoo.com`

## 🎨 Customization

### Colors & Theme
- Edit CSS variables in `static/css/style.css`
- Update primary/secondary colors
- Adjust dark theme colors

### Content Updates
- Modify `templates/index.html`
- Update personal information
- Add/remove sections as needed

### Images
- Replace `static/images/nambasa.jpg`
- Add favicon.ico
- Update alt tags for accessibility

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized loading for mobile devices
- Mobile-specific navigation menu

## 🔒 Security Features

- CSRF protection on forms
- Input sanitization
- Environment variable protection
- Secure email configuration

## � Performance Optimization

- Minified CSS/JavaScript
- Optimized images
- Lazy loading for content
- Efficient animations

## 🌍 SEO & Accessibility

- Semantic HTML5 structure
- Meta tags for search engines
- Alt tags for images
- ARIA labels for accessibility
- Structured data markup

## � Support & Maintenance

### Regular Updates
- Keep Python dependencies updated
- Monitor security advisories
- Update content regularly
- Test all contact forms
### Database
The SQLite database is automatically created on first run. Tables:
- `ContactMessage`: Stores form submissions

## 🎯 Features Breakdown

### Animations
- **AOS Library**: Scroll-triggered animations
- **Typing Effect**: Dynamic text in hero section
- **Counters**: Animated statistics
- **Skill Bars**: Progressive fill animations
- **Parallax**: Hero section scroll effect

### Interactive Elements
- **Navigation**: Smooth scroll with active state
- **Theme Toggle**: Dark/light mode switcher
- **Testimonial Slider**: Auto-rotating testimonials
- **Mobile Menu**: Responsive hamburger menu
- **Scroll to Top**: Floating button

### Performance
- **Lazy Loading**: Images load on scroll
- **Debounced Events**: Optimized scroll handlers
- **Minified Assets**: Optimized CSS and JS
- **CDN Resources**: External libraries from CDN

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill the process using the port
   # On Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # On macOS/Linux
   lsof -ti:5000 | xargs kill -9
   ```

2. **Virtual environment issues**
   ```bash
   # Delete and recreate venv
   rm -rf venv
   python -m venv venv
   ```

3. **Database issues**
   ```bash
   # Delete database file to recreate
   rm portfolio.db
   ```

## 📞 Support

For support or questions:
- Email: nambasa.daphine@example.com
- Phone: +256 700 123456
- LinkedIn: [Profile Link]

## 🚀 Future Enhancements

- [ ] Blog management system
- [ ] Portfolio projects section
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Email notifications
- [ ] File upload for CV
- [ ] Social media integration
- [ ] Advanced SEO features

---

**Built with ❤️ for Nambasa Daphine**
