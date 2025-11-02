# Aaron Bergmann – Professional Portfolio Website

This repository contains the source code for my personal website and technical portfolio, hosted via GitHub Pages. The site is a static, standards-compliant HTML/CSS/JS project designed to showcase my background, and skillset.

---

## Project Summary

The objective of this project is to establish a professional, minimal, and performant personal website without relying on frameworks or third-party libraries. It is fully custom-built to maintain control over structure, semantics, accessibility, and performance.

The site includes the following sections:

- **Home**: Landing page with professional summary
- **About**: Technical background, tools, skills, and resume download
- **Portfolio**: Highlights of projects in infrastructure, automation, and networking
- **Contact**: Methods of communication for professional inquiries

---

## Technologies & Standards

- **HTML5** – Semantic markup with accessibility and SEO considerations  
- **CSS3** – Modular stylesheet structure (global + page-specific)  
- **Vanilla JavaScript** – Lightweight enhancements (DOM manipulation, UI feedback)  
- **GitHub Pages** – Static site hosting and CI/CD via Git  
- **Responsive Design** – Viewport scaling for mobile, tablet, and desktop  

---

## Deployment / Local Development
The site is automatically deployed via **GitHub Pages** from the `main` branch. No build process or tooling required — changes to tracked HTML/CSS/JS files in `main` are deployed automatically.

To run the site locally for testing or development:

```bash
git clone https://github.com/abergmn/abergmn.github.io.git
cd abergmn.github.io
open index.html
```

Or run a local server (optional, but preferred):

```bash
# Python 3
python -m http.server 8000

# Or using VS Code Live Server extension (preferred)
```

---

## Security Considerations
- No user input is processed on the frontend.
- Contact interactions are handled via `mailto:` and external links.
- Static-only hosting minimizes attack surface and dependency risk.

---

## Contact

- Email: [a_bergmann@salemstate.edu](mailto:a_bergmann@salemstate.edu)
- GitHub: [@abergmn](https://github.com/abergmn)
<!-- - LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile) -->

---

## License
This project is proprietary and all rights are reserved.

Use, distribution, or modification of any part of this codebase without **explicit prior written permission** from the copyright holder is strictly prohibited.

See the [LICENSE.txt](./LICENSE.txt) file for full terms.
