# Miftahul Arif — Portfolio

Static portfolio website (HTML, CSS, vanilla JavaScript). No build step or dependencies.

## Structure

```
miftahul-arif-portfolio/
├── index.html          Page markup (hero, skills, work, experience, contact)
├── css/
│   └── style.css       All styles, with light/dark theme tokens
├── js/
│   ├── projects.js     Project data (edit this to add work)
│   └── main.js         Renders the project board and category filter
└── assets/
    └── images/         Put project images here
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Add your real work

1. Copy images into `assets/images/`.
2. In `js/projects.js`, add `img: "assets/images/your-file.jpg"` to a project.
3. Update its `title`, `description`, and `tools`.

## Deploy

Upload the folder to Vercel, Netlify, or GitHub Pages as a static site.
