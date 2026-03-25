# Nambasa Daphine - Professional HR Manager Portfolio

A modern, responsive portfolio website for Nambasa Daphine, a professional Human Resource Manager from Uganda. Built with Flask backend and modern frontend technologies.

## 🌟 Features

- **Modern Design**: Clean, professional UI with 2026 design standards
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: AOS (Animate On Scroll) and custom animations
- **Dark/Light Mode**: Theme toggle for user preference
- **Interactive Elements**: Typing animation, counters, skill bars, testimonial slider
- **Contact Form**: Functional form with SQLite database storage
- **SEO Optimized**: Meta tags, semantic HTML, structured content
- **Performance Optimized**: Lazy loading, optimized assets
- **Accessibility**: ARIA labels, keyboard navigation

## 🛠️ Tech Stack

### Backend
- **Flask**: Python web framework
- **SQLite**: Database for contact messages
- **Flask-SQLAlchemy**: ORM for database operations

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla JS for interactions
- **AOS**: Scroll animations library
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
portfolio/
│
├── app.py                 # Flask application main file
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── portfolio.db          # SQLite database (auto-created)
│
├── templates/
│   └── index.html        # Main HTML template
│
└── static/
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── script.js     # JavaScript functionality
    └── images/           # Image assets
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project folder, navigate to it
   cd portfolio
   ```

2. **Create and activate virtual environment**
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate on Windows
   .\venv\Scripts\activate
   
   # Activate on macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open in browser**
   Navigate to `http://localhost:5000`

## 📱 Sections Included

1. **Hero Section**: Professional introduction with CTA buttons
2. **About Section**: Professional biography and core competencies
3. **Experience Section**: Timeline format of work history
4. **Services Section**: HR services offered with animated cards
5. **Skills Section**: Professional skills with animated progress bars
6. **Education Section**: Academic qualifications and certifications
7. **Testimonials Section**: Client testimonials with slider
8. **Blog Section**: Sample HR articles
9. **Contact Section**: Contact form and social links

## 🎨 Customization

### Colors
Edit the CSS variables in `static/css/style.css`:
```css
:root {
    --primary-color: #4A90E2;    /* Main brand color */
    --primary-dark: #357ABD;     /* Darker shade */
    --primary-light: #6BA3E5;    /* Lighter shade */
    /* ... other variables */
}
```

### Content
Update the following files:
- `templates/index.html`: Main content and structure
- `static/js/script.js`: JavaScript configurations
- `static/css/style.css`: Styling modifications

### Personal Information
Update in `templates/index.html`:
- Name and title in hero section
- Contact information
- Experience details
- Education information
- Skills and percentages

## 🌐 Deployment

### Netlify (Static Version)
1. Build the static files
2. Create a `netlify.toml` file
3. Deploy to Netlify

### Render (Flask Backend)
1. Create a `render.yaml` file
2. Connect your GitHub repository
3. Deploy automatically

### Vercel
1. Install Vercel CLI
2. Run `vercel` command
3. Follow deployment steps

## 📧 Contact Form

The contact form:
- Validates user input
- Stores messages in SQLite database
- Shows success/error messages
- Sends confirmation to user

Messages are stored in the `ContactMessage` table and can be accessed via the `/api/messages` endpoint.

## 🔧 Configuration

### Environment Variables
Create a `.env` file for production:
```
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///portfolio.db
FLASK_ENV=production
```

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
