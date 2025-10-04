# Ahmed's Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, featuring a dark glassy aesthetic with glassmorphism design elements and smooth animations.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and blue glowing accents
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid user interactions
- **Performance Optimized**: Built with Next.js 14 and TypeScript for optimal performance
- **Accessible**: Following web accessibility best practices

## 🏗️ Sections

- **Hero Section**: Eye-catching introduction with animated particles
- **About**: Personal biography with statistics and profile information
- **Experience**: Interactive timeline showcasing career milestones
- **Projects**: Grid of featured projects with hover effects and links
- **Contact**: Contact form and social media links
- **Footer**: Clean footer with additional links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ahmed-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information
Update the following files to customize with your information:
- `src/app/layout.tsx` - Update metadata
- `src/components/Hero.tsx` - Update name, tagline, and bio
- `src/components/About.tsx` - Update biography and statistics
- `src/components/Experience.tsx` - Update work experience
- `src/components/Projects.tsx` - Update project portfolio
- `src/components/Contact.tsx` - Update contact information and social links

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Glass effects and animations are defined using Tailwind classes

### Content
- Replace placeholder content with your actual information
- Add your profile image to the public directory
- Update project images and links
- Customize the resume download link

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Deploy to Vercel by connecting your GitHub repository.

### Other Platforms
```bash
npm run build
npm start
```

## 📁 Project Structure

```
ahmed-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── .github/
│   └── copilot-instructions.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Performance Features

- Server-side rendering with Next.js
- Optimized images with Next.js Image component
- Lazy loading for smooth scrolling
- Minimal bundle size with tree shaking
- CSS-in-JS with Tailwind for optimal styling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Ahmed Hassan