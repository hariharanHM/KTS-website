# KTS Fabrics Website

A modern, responsive website for KTS Fabrics - Global Textile Solutions, Crafted in India.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern UI**: Built with React and Tailwind CSS for a sleek, professional appearance
- **Multiple Pages**: Home, KTS World, Meet KTS, What We Offer, and Inside KTS sections
- **Interactive Navigation**: Smooth navigation with React Router
- **Color Scheme**: KTS-themed colors (Lime Green #C6D928 and Dark Blue #1a2a6f)

## Tech Stack

- **React 18**: Modern JavaScript library for building user interfaces
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Client-side routing for multi-page navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with mobile menu
│   ├── Hero.jsx        # Hero section with fabric background
│   └── Footer.jsx      # Footer with links and info
├── pages/
│   ├── Home.jsx        # Homepage with features and CTA
│   ├── KTSWorld.jsx    # KTS World page
│   ├── MeetKTS.jsx     # Meet KTS page
│   ├── WhatWeOffer.jsx # Services and offerings
│   └── InsideKTS.jsx   # Manufacturing and facilities
├── assets/             # Images and static files
├── App.jsx             # Main app component with routing
├── main.jsx            # React DOM entry point
└── index.css           # Global styles with Tailwind
```

## Features Implemented

✓ Sticky header with navigation and mobile menu
✓ Hero section with gradient fabric background and call-to-action
✓ Responsive footer with company info and links
✓ Multiple content pages with routing
✓ Mobile-optimized layout
✓ Smooth animations and transitions
✓ KTS brand colors and styling

## Customization

### Colors

KTS brand colors are defined in `tailwind.config.js`:
- Lime Green: `#C6D928` (`kts-lime`)
- Dark Blue: `#1a2a6f` (`kts-blue`)

### Content

Edit the content in individual page files in the `src/pages/` directory.

### Images

Add fabric and product images to `src/assets/` and import them in components as needed.

## Next Steps

- [ ] Add actual fabric product images
- [ ] Integrate contact form for "Get a Quote" functionality
- [ ] Add email service integration
- [ ] Implement testimonials section
- [ ] Add product catalog/gallery
- [ ] SEO optimization
- [ ] Analytics integration

## License

Copyright © 2026 KTS Fabrics. All rights reserved.
