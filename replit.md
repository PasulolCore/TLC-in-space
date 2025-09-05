# Thailand Liquid Crystal in Space (TLC) Research Platform

## Overview
This is an Angular 17 application for the Thailand Liquid Crystal in Space (TLC) research project. It's a collaborative platform showcasing research between Thai universities, NASA, GISTDA, and international partners focused on liquid crystal experiments in space.

## Recent Changes
- January 6, 2025: Successfully imported and configured for Replit environment
- Set up Angular development server on port 5000 with proper host configuration
- Configured deployment settings for autoscale deployment
- All dependencies installed and TypeScript compilation working

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