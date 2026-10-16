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
│   └── main.js         Renders brand cards, the brand dialog, image viewer, and video player
└── assets/
    ├── images/         Project images
    └── videos/         Local video files (.mp4)
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## How the Work section behaves

Each brand in `js/projects.js` becomes one card. Clicking it opens a dialog with all of that
brand's project photos and videos. The card cover is the first project image; set
`cover: "assets/images/file.jpg"` on a brand to use a different one.

## Add a brand or project

1. Copy images into `assets/images/` (JPG, around 1600 px wide, under 400 KB).
2. In `js/projects.js`, copy a whole brand block inside `BRANDS` to add a new brand,
   or copy a project block inside `projects` to add work to an existing brand.
3. Fill in `title`, `category`, `description`, `tools`, `img`, and the image size `w` / `h`.

## Add videos

- **Per brand:** add `videos: [ {...} ]` to the brand in `js/projects.js`. They appear under that brand's images.
- **Per project:** add `video: {...}` to a project. A "Watch video" button opens it in a player.
- Local file: `src: "assets/videos/name.mp4"` (H.264 MP4, ideally under 20 MB) plus an optional `poster` image.
- YouTube: `youtube: "VIDEO_ID"` (the part after `v=`). YouTube embeds do not play when `index.html` is opened
  directly from disk; use `python3 -m http.server` or deploy the site.
- `ratio` can be `"16:9"` (default), `"9:16"`, `"1:1"`, or `"4:5"`.

## Deploy

Upload the folder to Vercel, Netlify, or GitHub Pages as a static site.
