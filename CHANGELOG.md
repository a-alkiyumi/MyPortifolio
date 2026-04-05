# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versions follow `MAJOR.MINOR.PATCH` — see the bottom of this file for a quick guide.

---

## [Unreleased]

> Changes that are in progress or planned but not yet in a released version.

- [ ] Dark/light mode toggle
- [ ] Contact form with email integration
- [ ] Scroll progress indicator

---

## [0.2.0] — 2025-04-01

### Added
- Experience section with vertical timeline layout
- Filter buttons to toggle between Work, Education, and Freelance entries
- `experienceData.js` data file — all experience content is now separate from component logic
- Color-coded badges and tags per experience type (purple = work, teal = edu, amber = freelance)
- Hover effect on experience cards

### Changed
- Moved all static data out of components and into dedicated `src/data/` files
- Updated `App.js` to include the new `<Experience />` section
- Added `#experience` anchor link to the navbar

### Fixed
- _Nothing fixed in this release_

---

## [0.1.0] — 2025-03-01

### Added
- Initial project setup with Create React App
- Hero section with name, title, and CTA buttons
- About section with bio text
- Skills section using react-multi-carousel
- Projects section with project cards and GitHub links
- Navbar with smooth scroll to sections
- Animations using animate.css and react-on-screen
- Bootstrap 5 layout and responsive grid

---

## Versioning Guide

This project uses **Semantic Versioning**: `MAJOR.MINOR.PATCH`

| Part | When to increment | Example |
|---|---|---|
| `PATCH` | Small fix — typo, style tweak, bug fix | `0.1.0` → `0.1.1` |
| `MINOR` | New feature added, backward compatible | `0.1.0` → `0.2.0` |
| `MAJOR` | Big redesign or breaking structural change | `0.2.0` → `1.0.0` |

