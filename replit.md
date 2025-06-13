# 12 App Testers - Service Website

## Overview

This is a single-page React application built with Vite for a mobile app testing service called "12 App Testers". The application provides a professional, SEO-optimized landing page to sell closed app testing services using 12 real human testers for 14 days to help apps get approved on the Google Play Store.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Migration Management**: Drizzle Kit for schema migrations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Frontend Components
- **UI Components**: Complete shadcn/ui component library implementation
- **SEO Component**: Custom SEO head component for meta tags and structured data
- **Home Page**: Main landing page with hero section, pricing, FAQ, and contact forms
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **Express Server**: RESTful API setup with middleware for logging and error handling
- **Storage Layer**: Abstract storage interface with CRUD operations for users
- **Vite Integration**: Development server integration for hot module replacement

### Shared Components
- **Database Schema**: Centralized schema definitions with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Development**: Vite dev server proxies API requests to Express backend
2. **Client-Side**: React Query manages API state and caching
3. **Server-Side**: Express routes handle API requests and interact with storage layer
4. **Database**: Drizzle ORM provides type-safe database operations
5. **Build Process**: Vite builds frontend assets, esbuild bundles backend code

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, ReactDOM, React Query)
- Express.js for server framework
- Drizzle ORM with Neon Database serverless driver
- Tailwind CSS and Radix UI primitives

### Development Tools
- TypeScript for type safety
- Vite with React plugin for development
- ESBuild for production bundling
- TSX for TypeScript execution

### UI Libraries
- shadcn/ui component system
- Radix UI primitives for accessibility
- Lucide React for icons
- Class Variance Authority for component variants

## Deployment Strategy

### Replit Configuration
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: `npm run build` creates optimized builds
- **Production Start**: `npm run start` serves the built application
- **Port Configuration**: Internal port 5000, external port 80

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Assets: Static files served from built frontend directory

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for production)
- `NODE_ENV`: Environment setting (development/production)

## Changelog

Changelog:
- June 13, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.