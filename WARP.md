# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

This is a personal website built with Next.js 15.5.3 using the App Router architecture. The project uses TypeScript, Tailwind CSS v4, and modern React 19 features. It's a bootstrapped Next.js project with Turbopack enabled for faster development builds.

## Development Commands

### Core Development
```bash
# Start development server with Turbopack (recommended)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Alternative Package Manager Commands
The project supports multiple package managers:
```bash
# Using yarn
yarn dev

# Using pnpm  
pnpm dev

# Using bun
bun dev
```

## Architecture & Structure

### Project Structure
- **`src/app/`** - Next.js App Router directory containing:
  - `layout.tsx` - Root layout with Geist font configuration and global styles
  - `page.tsx` - Homepage component with default Next.js welcome content
  - `globals.css` - Global styles with Tailwind imports and CSS custom properties
- **`public/`** - Static assets (SVG icons: file.svg, globe.svg, next.svg, vercel.svg, window.svg)

### Technology Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Build Tool**: Turbopack (enabled by default in dev and build scripts)
- **Styling**: Tailwind CSS v4 with PostCSS integration
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)

### Key Configuration
- **ESLint**: Uses Next.js recommended configs with TypeScript support
- **Tailwind**: v4 with inline theme configuration in globals.css
- **TypeScript**: Strict configuration with ES2017 target
- **Path Aliases**: `@/*` maps to `src/*` for cleaner imports

### Styling Approach
The project uses Tailwind CSS v4 with:
- CSS custom properties for theming (dark/light mode support)
- Inline theme configuration in `globals.css`
- Font variables for Geist Sans and Geist Mono
- Responsive design patterns in components

### Development Notes
- Hot reload is enabled and works automatically
- The main entry point for editing is `src/app/page.tsx`
- Dark mode is supported via CSS media queries
- All images are optimized using Next.js Image component
