# Pankaj's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, interactive components, and professional styling to showcase development skills and experience.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## 🚀 Features

### Core Components
- **Hero Section**: Eye-catching introduction with animated background
- **About**: Personal introduction and professional overview
- **Experience**: Interactive timeline with company logos (Microsoft, AlphaGrep, Doubtnut)
- **Projects**: Filterable project showcase with high-quality images
- **Skills**: Technical expertise display with modern icons
- **Contact**: Professional contact form and information
- **Testimonials**: Client feedback and recommendations
- **Goals & Process**: Professional workflow and objectives

### Technical Features
- ⚡ **Fast Development**: Vite for lightning-fast builds and HMR
- 🎨 **Modern UI**: Tailwind CSS with custom CSS modules
- 📱 **Responsive Design**: Mobile-first approach with breakpoint optimization
- 🎭 **Smooth Animations**: Custom scroll animations and transitions
- 🖼️ **High-Quality Images**: Unsplash integration for professional imagery
- 🎯 **TypeScript**: Full type safety throughout the application
- 📦 **Component Architecture**: Modular, reusable React components
- 🎨 **Custom Styling**: CSS Modules with Tailwind integration

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.0** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.4** - Next generation frontend build tool

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Flowbite React 0.11.9** - Modern component library
- **CSS Modules** - Scoped styling for components
- **React Icons 5.5.0** - Professional icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Image assets
│   │   ├── Pankaj_image.jpeg
│   │   └── react.svg
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Button.tsx
│   │   ├── CollaborationProcess.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx          # Updated with company logos
│   │   ├── Experience.module.css   # Experience component styles
│   │   ├── Footer.tsx
│   │   ├── Goals.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── navbar.css
│   │   ├── Navbar.module.css
│   │   ├── navbarStyles.ts
│   │   ├── Projects.tsx            # Enhanced with image cards
│   │   ├── Projects.module.css     # Project showcase styles
│   │   ├── ScrollAnimationWrapper.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Skills_new.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialSidebar.tsx
│   │   ├── Testimonials.tsx
│   │   └── TimelineCard.tsx        # Updated for React Icons
│   ├── hooks/             # Custom React hooks
│   │   └── useIntersectionObserver.ts
│   ├── App.css           # Global styles
│   ├── App.tsx           # Main App component
│   ├── index.css         # Base styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.app.json     # TypeScript config for app
├── tsconfig.json         # Main TypeScript config
├── tsconfig.node.json    # TypeScript config for Node.js
└── vite.config.ts        # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

### Development
```bash
npm run dev        # Start development server with HMR
```

### Production
```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Code Quality
```bash
npm run lint       # Run ESLint for code quality checks
```

### Post-Install
```bash
npm run postinstall # Apply Flowbite React patches (runs automatically)
```

## 🎨 Customization

### Adding New Projects
Edit `src/components/Projects.tsx` to add new projects:

```typescript
{
  id: 4,
  title: "Your New Project",
  description: "Project description...",
  image: "https://images.unsplash.com/photo-example",
  technologies: ["React", "TypeScript"],
  category: "Web Development",
  github: "https://github.com/username/repo",
  demo: "https://your-demo.com"
}
```

### Updating Experience
Modify `src/components/Experience.tsx` to update work experience:

```typescript
{
  title: "Your Position",
  company: "Company Name",
  period: "Start - End Date",
  description: "Role description...",
  achievements: ["Achievement 1", "Achievement 2"],
  current: false,
  icon: <YourIcon className="text-xl text-blue-500" />
}
```

### Styling Modifications
- **Global styles**: Edit `src/App.css` and `src/index.css`
- **Component styles**: Modify respective `.module.css` files
- **Tailwind config**: Update `tailwind.config.js` for theme customization

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain optimized production files.

### Deployment Platforms
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Drag & drop `dist` folder or connect repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI for deployment

## 🎯 Key Features Breakdown

### Experience Section
- Professional timeline with company logos
- Microsoft, Python, and Android icons using React Icons
- Animated scroll effects and responsive design
- Detailed achievements and descriptions

### Projects Section
- High-quality Unsplash images for visual appeal
- Filterable project categories
- Hover effects and smooth transitions
- Direct links to GitHub and live demos

### Performance Optimizations
- Vite for fast bundling and development
- CSS Modules for scoped styling
- Optimized images and lazy loading
- TypeScript for better code quality

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Pankaj Goyal**
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
{
  files: ['**/*.{ts,tsx}'],
  extends: [
    // Other configs...
    // Enable lint rules for React
    reactX.configs['recommended-typescript'],
    // Enable lint rules for React DOM
    reactDom.configs.recommended,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
    // other options...
  },
}
