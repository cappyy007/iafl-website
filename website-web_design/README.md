# Website Web Design

A modern web design project built with Next.js, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v3** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (run `npm install -g pnpm` if you don't have it)

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Adding shadcn/ui Components

To add shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Components will be added to the `components/ui` directory.

## Project Structure

```
website-web_design/
├── app/              # Next.js app directory
│   ├── globals.css   # Global styles with Tailwind directives
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable components (shadcn/ui components go here)
├── lib/              # Utility functions
├── public/           # Static assets
├── components.json   # shadcn/ui configuration
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
