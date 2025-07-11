# Aetna Medicare Enrollment Website

A responsive replica of the Aetna Medicare enrollment webpage, specifically recreating the medical coverage selection step.

## 🌟 Features

- **Authentic Design**: Faithful recreation of Aetna's Medicare enrollment interface
- **Official Branding**: Uses Aetna's purple color scheme and design elements
- **Official Icons**: Includes downloaded SVG icons from Aetna's website
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Functional Yes/No selection buttons with hover effects
- **Progress Tracking**: Visual progress indicator showing enrollment steps
- **Local Storage**: Saves user progress and selections
- **Modern CSS**: Clean, professional styling with gradients and animations

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── styles.css              # CSS stylesheet with Aetna branding
├── script.js               # JavaScript for interactivity
├── images/                 # Image assets
│   ├── aetna-logo.svg      # Official Aetna logo
│   ├── medicare-members-icon.svg  # Downloaded from Aetna site
│   ├── family-icon.svg     # Downloaded from Aetna site
│   ├── hand-heart.svg      # Custom medical coverage icon
│   └── medical-icon.svg    # Alternative medical icon
└── README.md               # Project documentation
```

## 🎨 Design Elements

### Color Palette
- **Primary Purple**: `#7b2cbf` (Aetna's signature color)
- **Secondary Purple**: `#9d4edd`
- **Background**: `#f8f8f8`
- **Text**: `#333` for primary text, `#666` for secondary

### Typography
- **Font Family**: Source Sans Pro (Google Fonts)
- **Weights**: 300, 400, 600, 700

### Key Components
- **Header**: Multi-level navigation with contact info and location
- **Progress Bar**: Step-by-step enrollment tracking
- **Question Panel**: Central focus with medical coverage question
- **Interactive Buttons**: Large, accessible Yes/No selection buttons
- **Footer**: Comprehensive links and legal information

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sandeepdas0407/Aetna.git
   cd Aetna
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Development**:
   - Use VS Code with Live Server extension for hot reload
   - All images are optimized SVG format for crisp display

## 💻 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with flexbox, grid, and gradients
- **JavaScript**: Interactive functionality and local storage
- **SVG**: Scalable vector graphics for all icons
- **Google Fonts**: Source Sans Pro typography

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (condensed navigation)
- **Mobile**: <768px (stacked layout)

## ✨ Interactive Features

- **Answer Selection**: Click Yes/No to proceed with medical coverage choice
- **Progress Saving**: Automatically saves progress to browser storage
- **Location Editing**: Update ZIP code for personalized plans
- **Visual Feedback**: Hover effects and selection states
- **Accessibility**: Keyboard navigation and screen reader support

## 🔧 Customization

### Changing Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #7b2cbf;
  --secondary-color: #9d4edd;
  --background-color: #f8f8f8;
}
```

### Adding New Steps
Extend the progress bar in the HTML and update JavaScript logic for additional enrollment steps.

## 📄 License

This project is for educational and demonstration purposes. Aetna branding and design elements are property of Aetna Inc.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For questions or suggestions, please open an issue on this repository.

---

**Note**: This is a replica website created for educational purposes. It is not affiliated with or endorsed by Aetna Inc.
