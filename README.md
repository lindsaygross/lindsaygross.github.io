# Lindsay Gross — Responsible AI Portfolio

Personal website for Lindsay Gross highlighting AI engineering, product work, and writing on responsible technology. Built with semantic HTML, modern CSS, and a sprinkle of vanilla JavaScript so it can be deployed directly to GitHub Pages.

## Getting started locally

1. **Install dependencies:** None. Everything runs in the browser.
2. **Open the project:**
   ```bash
   cd LINDSAYGROSSWEBSITE
   ```
3. **Launch a local server** (recommended for smooth scrolling scripts):
   ```bash
   python3 -m http.server 4000
   ```
4. **Visit** `http://localhost:4000` in your browser. Hot reload is automatic when you refresh after editing files.

## Project structure

```
LINDSAYGROSSWEBSITE
├── index.html       # Main page with all sections
├── styles.css       # Global styles and responsive layout
├── script.js        # Smooth scrolling, nav toggle, scroll-to-top
├── assets/
│   ├── profile.jpg
│   └── project-placeholder.jpg
└── README.md        # This file
```

## Deploying to GitHub Pages

1. Commit all changes and push to the `main` (or `master`) branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, then select the branch (e.g., `main`) and the `/root` folder.
4. Save. GitHub builds and serves `index.html` automatically. Updates appear after each push.

## Customization tips

- Replace `assets/profile.jpg` and `assets/project-placeholder.jpg` with final imagery.
- Update placeholder links (resume, writing, LinkedIn, contact email) before sharing publicly.
- Extend the `Projects`, `Writing`, or `Speaking` sections by cloning the existing card markup.
