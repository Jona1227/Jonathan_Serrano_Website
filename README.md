# Jonathan Serrano — Portfolio

**Live site:** https://jonathan-serrano-website.vercel.app/

My personal portfolio website, designed in a pixel-art style inspired by *The Binding of Isaac*. You start as my character in a main room with three doors, and each door leads to a section of the site:

- **About Me** (top door): bio, education, and experience
- **Projects** (right door): project files you can open to see screenshots, my role, the tech stack, and a GitHub link
- **Get In Touch** (left door): email, LinkedIn, and GitHub

All the pixel art, sprites, and interface graphics were drawn by me.

## How to move

| Action | Controls |
| --- | --- |
| Move | `W` `A` `S` `D` or the arrow keys |
| Enter a room | Walk into a door, or click the room's name on the floor |
| Leave a room | `Esc`, or click the ESC note |


## Built with

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- Plain CSS, with Google Fonts (Permanent Marker, Patrick Hand)
- [Aseprite](https://www.aseprite.org) for the pixel art and sprites

## Running it locally

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
cd portfolio
npm install
npm run dev
```


## Project structure

```
portfolio/
├── public/                 # Images, served as-is
│   ├── room.png            # Hub room background
│   ├── sprites/            # Player animation frames and HUD hearts
│   ├── aboutPageSprites/   # About Me page art
│   ├── projectsSprite/     # Project cards, screenshots, tech stack icons
│   └── contactSprites/     # Contact page art
└── src/
    ├── main.jsx            # App entry point
    ├── App.jsx
    ├── index.css           # All styles
    └── components/
        ├── HubRoom.jsx     # Main room: movement, door collisions, clickable labels
        ├── About.jsx       # About Me page with a typewriter-style bio
        ├── Projects.jsx    # Project picker and detail view (project data lives here)
        ├── Contact.jsx     # Contact links
        └── ScaleToFit.jsx  # Scales each screen to fit the window
```


## Contact

- GitHub: [@Jona1227](https://github.com/Jona1227)
- LinkedIn: [Jonathan Serrano](https://www.linkedin.com/in/jonathan-serrano-33373a280/)
