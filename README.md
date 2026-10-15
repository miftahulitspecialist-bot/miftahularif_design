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
│   └── main.js         Renders brand sections, projects, and image viewer
└── assets/
    └── images/         Put project images here
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Add a brand or project

1. Copy images into `assets/images/` (JPG, around 1600 px wide, under 400 KB).
2. In `js/projects.js`, copy a whole brand block inside `BRANDS` to add a new brand,
   or copy a project block inside `projects` to add work to an existing brand.
3. Fill in `title`, `category`, `description`, `tools`, `img`, and the image size `w` / `h`.

## Deploy

Upload the folder to Vercel, Netlify, or GitHub Pages as a static site.
