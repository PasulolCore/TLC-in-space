# Thailand Liquid Crystal in Space (TLC) Research Platform

## Overview
This is an Angular 17 application for the Thailand Liquid Crystal in Space (TLC) research project. It's a collaborative platform showcasing research between Thai universities, NASA, GISTDA, and international partners focused on liquid crystal experiments in space.

## Recent Changes
- January 6, 2025: Successfully imported and configured for Replit environment
- Set up Angular development server on port 5000 with proper host configuration
- Configured deployment settings for autoscale deployment
- All dependencies installed and TypeScript compilation working
- September 5, 2025: Enhanced News & Events section with Facebook Graph API preparation
  - Added comprehensive Facebook API integration structure
  - Improved image error handling and responsive design
  - Enhanced navigation buttons with better UX and accessibility
  - Added Facebook post indicator for future social media integration
  - Fixed image containment issues and improved card layouts
- September 5, 2025: Completely overhauled Contact Section with professional UX design
  - Redesigned with clean, professional layout using readable color scheme
  - Enhanced typography with proper contrast (var(--space-gray-900), var(--space-gray-700))
  - Added structured contact information cards with hover effects
  - Implemented comprehensive contact form with validation and loading states
  - Added institution field and proper form validation messages
  - Improved accessibility with proper labels and error handling
  - Added responsive design for mobile and tablet devices
  - Included smooth animations and professional button interactions
  - Made form production-ready with form submission simulation
- September 5, 2025: Enhanced Footer section with improved design and social media integration
  - Removed "Publications" link from Quick Links as requested
  - Added comprehensive social media links section with X (Twitter), Instagram, and Facebook
  - Implemented platform-specific hover effects for social media links
  - Enhanced footer typography with underline accents and better visual hierarchy
  - Improved responsive design for mobile devices with centered alignment
  - Added proper external link attributes (target="_blank", rel="noopener noreferrer")
  - Maintained existing content structure while upgrading UX/UI design

## Project Architecture
- **Frontend**: Angular 17 with Server-Side Rendering (SSR)
- **Build System**: Angular CLI with Vite
- **Deployment**: Configured for autoscale deployment with production build
- **Port Configuration**: Development server runs on 0.0.0.0:5000
- **Host Configuration**: Properly configured for Replit proxy environment

## Key Features
- Research project showcase
- Team member profiles
- News and updates system
- Partner organization display
- Contact forms and social media integration
- Thai language support
- Responsive design with mobile navigation

## Development Setup
- Start development server: `npm start`
- Build for production: `npm run build`
- Run SSR server: `npm run serve:ssr:my-angular-project`

## Configuration Notes
- Angular.json configured with `allowedHosts: "all"` for Replit environment
- Package.json start script includes `--disable-host-check` and `--allowed-hosts=all`
- Development server properly bound to 0.0.0.0:5000
- Deployment configured to use SSR for production

## Project Status
✅ Fully functional and ready for development
✅ Configured for Replit environment
✅ Deployment settings configured
✅ All dependencies resolved