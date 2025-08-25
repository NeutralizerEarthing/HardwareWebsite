# TechHardware Pro - Industrial Solutions Website

A modern, responsive website for a hardware company built with React, Tailwind CSS, and Framer Motion. Features a clean, professional design with smooth animations and a dark/light theme switcher.

## 🚀 Features

### Navigation
- **Responsive Navbar**: Clean navigation with smooth transitions
- **Hamburger Menu**: Mobile-friendly navigation with smooth animations
- **Sticky Header**: Background changes on scroll with backdrop blur
- **Theme Toggle**: Dark/light mode switcher with persistent state

### Pages
1. **Home Page**
   - Hero section with background image and animated text
   - Smooth scroll indicator
   - Company introduction
   - Core services with icons and animations

2. **About Us Page**
   - Company story and values
   - Interactive timeline with animations
   - Statistics and achievements
   - 3D-themed design elements

3. **Products Page**
   - Product cards with hover effects
   - Product details modal
   - Star ratings and reviews
   - Smooth entrance animations

4. **Gallery Page**
   - Masonry-style layout
   - 3D flip card effects
   - Image modal with zoom functionality
   - Category filtering

5. **Career Page**
   - Job opportunities with detailed descriptions
   - Company benefits overview
   - Interactive job application modal
   - Professional growth information

6. **Clients Page**
   - Client testimonials carousel
   - Star ratings and reviews
   - Client statistics
   - Industry leader showcase

7. **Contact Page**
   - Contact form with validation
   - Google Maps integration
   - Contact information cards
   - FAQ section

### Technical Features
- **Fully Responsive**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations throughout
- **Form Validation**: React Hook Form with validation
- **Theme System**: Dark/light mode with CSS variables
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Performance Optimized**: Lazy loading and optimized animations

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **React Hook Form**: Form handling and validation
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll-based animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hardware-company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient
- Secondary colors: Gray scale
- Accent colors: Orange gradient

### Content
- Update company information in each page component
- Replace placeholder images with your own
- Modify contact information in the Contact page
- Update product data in the Products page

### Styling
- Custom CSS classes are defined in `src/index.css`
- Component-specific styles use Tailwind utilities
- Animations are configured in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website includes a dark/light theme switcher that:
- Persists user preference in localStorage
- Automatically applies theme classes
- Smooth transitions between themes
- Consistent styling across all components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.js          # Navigation component
├── context/
│   └── ThemeContext.js    # Theme management
├── pages/
│   ├── Home.js           # Home page
│   ├── About.js          # About page
│   ├── Products.js       # Products page
│   ├── Gallery.js        # Gallery page
│   ├── Career.js         # Career page
│   ├── Clients.js        # Clients page
│   └── Contact.js        # Contact page
├── App.js                # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎯 Key Features Implementation

### Animations
- **Scroll-triggered animations**: Using `react-intersection-observer`
- **Hover effects**: CSS transitions and Framer Motion
- **Page transitions**: Smooth route changes
- **Loading animations**: Spinner and fade-in effects

### Form Handling
- **Validation**: Required fields, email format, minimum length
- **Error messages**: Real-time validation feedback
- **Success states**: Form submission confirmation
- **Loading states**: Submit button with spinner

### Performance
- **Lazy loading**: Images and components
- **Optimized animations**: Hardware acceleration
- **Minimal re-renders**: React optimization
- **Bundle splitting**: Code splitting for routes

## 🔧 Development

### Available Scripts
- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

### Code Style
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (if configured)
- **Component structure**: Functional components with hooks
- **File naming**: PascalCase for components, camelCase for utilities

## 📞 Support

For questions or support:
- Check the documentation
- Review the code comments
- Open an issue on GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**TechHardware Pro** - Building tomorrow's infrastructure today.
