# Swayam Patel – Portfolio

Personal portfolio website for Swayam Patel, Full Stack Developer & AI Enthusiast.

## Tech Stack

- **React 18** + Vite
- **Tailwind CSS** for utility styling
- **CSS Variables** for dark/light theming
- **React Icons** for icons
- **Framer Motion** (optional, imported but can extend)
- **Intersection Observer API** for scroll animations

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # Fixed nav with theme toggle
    Hero.jsx            # Full-screen hero with particles
    About.jsx           # Bio + counters
    Skills.jsx          # Skill categories with progress bars
    Experience.jsx      # Timeline of internships
    Projects.jsx        # Project cards with mockups
    TechMarquee.jsx     # Auto-scrolling tech stack strip
    Certifications.jsx  # Cert cards
    WhyHireMe.jsx       # Value proposition cards
    Journey.jsx         # Career timeline
    Testimonials.jsx    # Testimonial cards
    Contact.jsx         # Contact form + info
    Footer.jsx          # Social links + copyright
  hooks/
    useReveal.js        # Intersection Observer scroll reveal hook
  App.jsx               # Root with theme state
  main.jsx              # React entry point
  index.css             # Global styles + CSS variables
```

## Deployment on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

## Customization

- **Colors**: Edit CSS variables in `src/index.css` under `:root`
- **Content**: All data is in the component files as JS arrays/objects
- **Contact form**: Connect to [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) for real email sending
- **Resume**: Place your PDF at `public/resume.pdf`

## SEO

Edit `index.html` to update:
- `<title>` tag
- `<meta name="description">`
- Open Graph tags (`og:url`, `og:image`)

## Performance

- Lazy scroll reveals via `IntersectionObserver`
- Fonts loaded via Google Fonts with `display=swap`
- No heavy runtime dependencies
- Vite code splitting out of the box

---

© 2026 Swayam Patel
