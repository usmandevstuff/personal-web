# Firebase Studio - Next.js Portfolio

## Overview
This is a Next.js 15 portfolio application built with Firebase Studio integration. It features a personal portfolio page for Muhammad Usman with modern UI components, theme toggling, and AI capabilities via Google Genkit.

## Project Status
- **Current State**: Imported from GitHub and configured for Replit environment
- **Last Updated**: November 21, 2025

## Tech Stack
- **Framework**: Next.js 15.3.3 with Turbopack
- **Language**: TypeScript
- **UI Library**: Radix UI components with Tailwind CSS
- **AI Integration**: Google Genkit with Gemini 2.5 Flash
- **Firebase**: Firebase Studio integration
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts

## Project Architecture

### Directory Structure
```
src/
├── ai/              # Genkit AI configuration and development
│   ├── dev.ts       # AI development entry point
│   └── genkit.ts    # Genkit configuration with Google AI
├── app/             # Next.js app directory
│   ├── actions.ts   # Server actions
│   ├── globals.css  # Global styles
│   ├── layout.tsx   # Root layout
│   └── page.tsx     # Home page (portfolio)
├── components/      # React components
│   └── ui/          # Reusable UI components (Radix UI)
├── hooks/           # Custom React hooks
└── lib/             # Utility functions and helpers
```

### Key Features
1. **Portfolio Page**: Personal landing page with social links
2. **Theme Support**: Dark/light mode toggle
3. **AI Integration**: Google Genkit for AI capabilities
4. **Modern UI**: Complete set of Radix UI components
5. **Responsive Design**: Mobile-first approach with Tailwind CSS

## Development Setup

### Port Configuration
- **Frontend**: Port 5000 (configured for Replit proxy)
- **Host**: 0.0.0.0 (allows Replit iframe access)

### Environment Variables
The project uses Firebase and Google AI services. Required environment variables would be:
- Google AI API key (for Genkit integration)
- Firebase configuration (if using Firebase features)

### Available Scripts
- `npm run dev`: Start development server on port 5000
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run genkit:dev`: Start Genkit AI development server
- `npm run genkit:watch`: Start Genkit with watch mode
- `npm run lint`: Run ESLint
- `npm run typecheck`: TypeScript type checking

## Replit Configuration

### Next.js Configuration
- Development server bound to `0.0.0.0:5000` for Replit proxy compatibility
- Production server configured for port 5000 with host binding
- Turbopack enabled for faster development builds
- TypeScript and ESLint errors ignored during builds for development
- Remote image patterns configured for external image sources

### Workflow
- **Name**: Next.js Dev Server
- **Command**: `npm run dev`
- **Port**: 5000
- **Type**: Web preview (webview)
- **Status**: Running successfully

### Deployment Configuration
- **Target**: Autoscale (stateless web application)
- **Build**: `npm run build`
- **Run**: `npm run start`
- **Port**: 5000 with 0.0.0.0 host binding

## Recent Changes
- November 21, 2025: Initial import and Replit environment setup
  - Changed dev server port from 9002 to 5000
  - Changed production server to use port 5000 with 0.0.0.0 binding
  - Configured dev server to bind to 0.0.0.0
  - Set up workflow for development server
  - Installed dependencies with npm
  - Configured deployment for autoscale target
  - Verified application runs successfully in Replit environment

## User Preferences
None specified yet.

## Notes
- The project includes comprehensive UI component library from Radix UI
- AI features via Genkit are available but may require API key configuration
- Firebase integration is set up but may need credentials for full functionality
