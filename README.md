# Anant Chaturvedi — Portfolio

Personal portfolio site built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack
- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **lucide-react** — icons
- **Kanit** — font (Google Fonts)

## Install & Run

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── data/
│   └── portfolio.json      ← ALL content lives here
├── types/
│   └── portfolio.ts        ← TypeScript interfaces
├── hooks/
│   └── usePortfolio.ts     ← typed data hook
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ServicesSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── TestimonialsSection.tsx
│   ├── SocialLinks.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css               ← global styles, marquee keyframes
```

## Editing Content

**All content is in `src/data/portfolio.json`** — no hardcoded strings in components.

| Field | Where |
|---|---|
| Name, bio, tagline, location | `profile` |
| Social links | `profile.social` (leave blank `""` to hide) |
| Skills | `skills.categories[]` |
| Work history | `experience[]` |
| Projects | `projects[]` — set `highlight: true` to feature |
| Services | `services[]` |
| Testimonials | `testimonials[]` |
| Education | `education[]` |

### Adding a project
```json
{
  "title": "Project Name",
  "description": "What it is and what it achieved.",
  "tags": ["Tag1", "Tag2"],
  "link": "https://...",   // leave "" to hide the live button
  "highlight": true         // true = featured, sorted first
}
```

### Hiding a social link
Set the value to `""` or remove the key entirely — `SocialLinks` automatically hides empty entries.

## Design Tokens (index.css)
- **Background**: `#0C0C0C`
- **Headline gradient**: `.hero-heading` — silver/chrome `#646973 → #BBCCD7`
- **Accent gradient**: `.gradient-btn` — purple → magenta → orange
- **Card**: `#111111` with `#1e1e1e` border
- **Font**: Kanit (Google Fonts)

## Reduced Motion
Testimonial marquee respects `prefers-reduced-motion` — falls back to horizontal scroll with `scroll-snap`.
