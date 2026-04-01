# My Portfolio

A personal developer portfolio built with React, showcasing my projects, skills, and experience.

---

## Live Demo

> _Add your deployed URL here — e.g. https://your-name.netlify.app_

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| React Bootstrap | Component library & layout |
| Bootstrap Icons | Icon set |
| Animate.css | Scroll & entrance animations |
| react-multi-carousel | Projects carousel |
| react-on-screen | Trigger animations on scroll |

---

## Sections

- **Hero** — Introduction and call-to-action
- **About** — Brief bio and background
- **Skills** — Technologies and tools
- **Projects** — Featured work with links
- **Experience** — Work history, education, and freelance
- **Contact** — Get in touch form or links

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/a-alkiyumi/MyPortifolio.git

# 2. Navigate into the project
cd MyPortifolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/        # One file per section (Hero, About, Skills, etc.)
├── data/              # Static data files (projects, experience, skills)
├── assets/            # Images and icons
├── App.js             # Root component, section order
└── index.js           # Entry point
```

---

## Customization

All content lives in `src/data/`. To update your portfolio:

- Edit `experienceData.js` to add or change experience entries
- Edit `projectsData.js` to add or change projects
- Edit `skillsData.js` to update your tech stack

No need to touch the components themselves — they read from the data files automatically.

---

## Deployment

This project can be deployed on any static hosting platform:

- **Netlify** — drag and drop the `build/` folder, or connect your GitHub repo
- **Vercel** — import the repo and it auto-detects Create React App
- **GitHub Pages** — install `gh-pages` and add a `homepage` field in `package.json`

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a full history of changes.

---

## License

This project is open source and available under the [MIT License](LICENSE).
