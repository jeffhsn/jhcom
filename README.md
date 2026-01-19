# jhcom

Personal website and portfolio for Jafar Hussein. Built with Astro, TypeScript, and Tailwind CSS.

## 🚀 Project Structure

```
/
├── config/              # Code quality configuration files (backups)
│   ├── .prettierrc
│   ├── .eslintrc.cjs
│   ├── .editorconfig
│   └── .prettierignore
├── public/              # Static assets (images, fonts, etc.)
│   └── jh-logo-black.jpeg
├── src/
│   ├── components/      # Reusable Astro components (organized by feature)
│   │   ├── ui/          # UI elements
│   │   │   ├── Avatar.astro
│   │   │   ├── LinkButton.astro
│   │   │   └── LinkItem.astro
│   │   ├── layout/      # Layout components
│   │   │   ├── Container.astro
│   │   │   ├── Footer.astro
│   │   │   └── Section.astro
│   │   └── content/     # Content-specific components
│   │       └── Newsletter.astro
│   ├── config/          # Application configuration
│   │   └── links.ts     # Navigation links configuration
│   ├── content/         # Content collections (MDX/Markdown)
│   │   ├── config.ts    # Content collection schemas
│   │   ├── notes/       # Blog posts/notes
│   │   └── projects/    # Project showcase
│   ├── layouts/         # Page layout templates
│   │   └── BaseLayout.astro
│   ├── pages/           # Routes (file-based routing)
│   │   ├── index.astro  # Home page
│   │   ├── blog.astro   # Blog listing page
│   │   └── projects.astro # Projects listing page
│   └── styles/          # Global styles
│       └── globals.css
├── .prettierrc          # Prettier config (must be at root)
├── .eslintrc.cjs        # ESLint config (must be at root)
├── .editorconfig        # Editor config (must be at root)
├── .prettierignore      # Prettier ignore patterns
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 📦 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🧞 Available Scripts

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Build your production site to `./dist/`          |
| `npm run preview` | Preview your build locally, before deploying     |
| `npm run lint`    | Run ESLint to check code quality                 |
| `npm run format`  | Format code with Prettier                        |
| `npm run type-check` | Run TypeScript type checking                   |
| `npm run astro`   | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Web framework for content-driven websites
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX components
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📝 Content Management

Content is managed through Astro's content collections:

- **Notes/Blog Posts**: Add markdown files to `src/content/notes/`
- **Projects**: Add markdown files to `src/content/projects/`

Each content file should include frontmatter matching the schema defined in `src/content/config.ts`.

## 🎨 Styling

Global styles are in `src/styles/globals.css`. The project uses Tailwind CSS for utility classes and CSS custom properties for theming.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
