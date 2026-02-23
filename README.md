# jhcom

Personal website and portfolio for Jafar Hussein. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
│   └── jh-logo-black.jpeg
├── src/
│   ├── app/             # Next.js App Router routes and layouts
│   │   ├── (public)/    # Public-facing pages ("outside wall")
│   │   ├── (private)/   # Private pages ("inside")
│   │   └── globals.css  # Global styles
│   ├── components/      # Reusable React components
│   ├── config/          # App configuration
│   ├── content/         # Content (optional)
│   └── lib/             # Shared utilities/data
├── .eslintrc.json       # ESLint config
├── next.config.mjs      # Next.js config
├── postcss.config.cjs   # PostCSS config
├── tailwind.config.ts   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies and scripts
```

## 📦 Setup

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Start development server:**

   ```bash
   bun dev
   ```

   The site will be available at `http://localhost:3000`

3. **Build for production:**

   ```bash
   bun run build
   ```

4. **Start production server:**

   ```bash
   bun run start
   ```

## 🧞 Available Scripts

| Command         | Action                               |
| :-------------- | :----------------------------------- |
| `bun dev`       | Starts dev server at `localhost:3000` |
| `bun run build` | Build for production                 |
| `bun run start` | Start production server              |
| `bun run lint`  | Run ESLint                           |

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)** - App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - UI primitives (copied components)
- **[Lucide](https://lucide.dev/)** - Icon set
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Convex](https://convex.dev/)** - Backend (ready to configure)
- **[Clerk](https://clerk.com/)** - Auth (ready to configure)

## 🔐 Optional Environment Variables

These are optional for now; the app runs without them.

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CONVEX_URL`

## 🎨 Styling

Global styles are in `src/app/globals.css`. The project uses Tailwind CSS plus CSS custom properties for theming.
