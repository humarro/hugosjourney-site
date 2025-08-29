# Overview

This is a full-stack web application built for Pablo Sanro, a personal fitness trainer with over 113k YouTube subscribers. The application serves as a professional landing page and contact platform, featuring sections for services, testimonials, about information, and a contact form. The system is designed to showcase Pablo's fitness expertise and provide a way for potential clients to reach out for personal training services.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript and uses a modern component-based architecture. The application leverages Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, ensuring accessibility and consistent design patterns.

**Key Frontend Decisions:**
- **React with TypeScript**: Provides type safety and better developer experience
- **Vite**: Chosen for fast development builds and modern bundling
- **shadcn/ui + Radix UI**: Ensures accessible, customizable components with consistent design
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Handles animations and smooth transitions
- **React Hook Form + Zod**: Form handling with runtime validation
- **TanStack React Query**: Server state management and API caching
- **Wouter**: Lightweight client-side routing

## Backend Architecture
The backend follows a RESTful API pattern built with Express.js and TypeScript. It uses an in-memory storage implementation during development but is structured to easily migrate to a PostgreSQL database using Drizzle ORM.

**Key Backend Decisions:**
- **Express.js**: Lightweight, flexible web framework for Node.js
- **TypeScript**: Type safety across the entire application
- **Drizzle ORM**: Type-safe database queries with PostgreSQL support
- **In-memory Storage**: Temporary storage solution for development, easily replaceable
- **Zod Validation**: Shared validation schemas between frontend and backend
- **Middleware Pattern**: Request logging, error handling, and JSON parsing

## Data Storage
The application is configured for PostgreSQL using Drizzle ORM but currently uses in-memory storage for development. The database schema includes tables for users and contact submissions.

**Database Design:**
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores client inquiries with fields for name, email, phone, objective, and message
- **UUID Primary Keys**: Generated using PostgreSQL's gen_random_uuid()
- **Timestamps**: Automatic creation timestamps for submissions

## Form Handling and Validation
The contact form uses a sophisticated validation system with Zod schemas shared between client and server. This ensures consistent validation rules and type safety.

**Validation Features:**
- **Email Validation**: Proper email format checking
- **Required Fields**: Name, email, objective, and message are mandatory
- **Objective Selection**: Predefined options (weight-loss, muscle-gain, general-fitness, competition)
- **Message Length**: Minimum 10 characters required
- **Optional Phone**: Phone number is optional but validated when provided

## Development Experience
The application is optimized for development on Replit with specialized plugins and configurations.

**Development Tools:**
- **Hot Module Replacement**: Instant updates during development
- **Runtime Error Overlay**: Visual error reporting in development
- **Cartographer Plugin**: Replit-specific development enhancements
- **TypeScript Checking**: Full type checking with path aliases
- **ESLint Integration**: Code quality and consistency

# External Dependencies

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating component variants
- **Framer Motion**: Animation library for React

## Form Management
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolver integrations
- **Zod**: Runtime type validation and schema definition

## State Management
- **TanStack React Query**: Server state management, caching, and synchronization

## Development and Build Tools
- **Vite**: Next-generation frontend build tool
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing and transformation

## Icons and Assets
- **Lucide React**: Modern icon library
- **React Icons**: Additional icon collections (FontAwesome, etc.)

## Date and Time
- **date-fns**: Modern JavaScript date utility library

## Routing
- **Wouter**: Minimalist client-side routing library

The application architecture prioritizes type safety, developer experience, and modern web development practices while maintaining simplicity and performance.