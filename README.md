# LinC STEM Homepage

The LinC STEM Homepage is the public website for LinC STEM, a program that empowers students in grades 8–12 to explore science, technology, engineering, and mathematics through hands-on labs, collaborative projects, and real-world problem solving. The site highlights the program’s mission, showcases student work by grade level, introduces the team, and provides a way for families and partners to get in touch.

Built with React, TypeScript, and Vite, with Tailwind CSS and shadcn/ui for styling.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (included with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd linc-stem_webpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser to view the site. The dev server supports hot reload, so changes appear as you edit files.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

- `src/pages/` — Page components (Home, Our Work, Team, Contact, grade-level pages)
- `src/components/` — Reusable UI and layout components
- `src/data/content.ts` — Site content (edit this file to update text, links, and media without changing components)
- `public/` — Static assets served as-is

## Editing Content

Most site copy, grade-level materials, team info, and partner/sponsor data live in `src/data/content.ts`. Update that file to change what appears on the site without modifying React components.
