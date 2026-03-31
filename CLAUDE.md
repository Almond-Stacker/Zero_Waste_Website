# CLAUDE.md — County of Hawai'i DEM Website

This file documents the project structure, conventions, and rules for the County of Hawai'i Department of Environmental Management website. Read this before making any changes.
Feel free to change this MD file as needed.

---

## 1. Project Overview
A multi-page website built for the County of Hawai'i Department of Environmental Management.

- **Core Principle:** No build tools, no frameworks, no bundlers, and no npm.
- **Tech Stack:** Plain HTML5, CSS3 (using custom properties), and Vanilla JavaScript (ES6+).
- **Deployment:** Files are served directly from disk or a simple web server.

---

## 2. Folder Structure

```plaintext
/
├── CLAUDE.md
├── header.html
├── footer.html
├── pages/
│   ├── homepage.html
│   ├── recycle.html
│   └── services.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── homepage/
│   │   │   ├── calendar.css
│   │   │   ├── hero.css
│   │   │   ├── news.css
│   │   │   └── quick-links.css
│   │   ├── recycle.css
│   │   └── services.css
│   ├── js/
│   │   ├── layout-loader.js
│   │   ├── homepage/
│   │   └── recycle.js
│   ├── fonts/
│   └── images/
└── test/
```

---

## 3. Brand & Design Tokens

All styling must use the CSS custom properties defined in `assets/css/global.css`.

### Color Palette

| Variable | Value | Usage |
|----------|------|------|
| --color-primary | #2F591A | Headers, buttons, badges |
| --color-primary-mid | #2E7214 | Hover states |
| --color-accent | #a8c84b | Indicators and highlights |
| --color-text | #1a2e10 | Body text |
| --color-bg | #f6faf4 | Page background |
| --color-white | #ffffff | White |

### Typography

- Sans-serif: `'Open Sans', sans-serif`
- Serif: `'Libre Baskerville', serif`

Fonts are stored locally in `assets/fonts/`.

---

## 4. Development Rules

### CSS Rules
- `global.css` must load first
- Use modular CSS structure
- No inline styles
- Use `var(--transition)` for hover states

### Layout Rules
- Header/footer stored as fragments
- Injected via `layout-loader.js`
- Use `#header-slug` and `#footer-slug`

### JavaScript Rules
- No frameworks
- Keep logic modular

### Asset Rules
- Store in ../assets
- Choose appropriate image considering Hawaii
- Compress images
- Always include `alt` text

---

## 5. Standard Operating Procedures

### Adding a New Page
1. Create file in `/pages`
2. Link `global.css` first
3. Add header/footer placeholders
4. Include `layout-loader.js`

---

## 6. What NOT To Do

- No npm or build tools
- No extra `:root` definitions
- No absolute internal links
- No inline styles
