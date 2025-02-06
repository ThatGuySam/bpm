# BPM Visualizer

[![Deploy Status](https://github.com/thatguysam/bpm/actions/workflows/deploy.yml/badge.svg)](https://github.com/thatguysam/bpm/actions) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/<your-badge-id>/deploy-status)](https://app.netlify.com/sites/<your-site-name>/deploys)

A reactive visualizer that syncs color transitions to adjustable BPM using p5.js. 
Perfect for music practice, metronome visualization, or ambient displays.

## Features

- Real-time BPM adjustment (30-240 BPM range)
- Left/Right arrow keyboard controls for halving/doubling BPM
- Responsive fullscreen canvas
- Smooth HSV color transitions on beat
- Dual deployment to GitHub Pages and Netlify

## Installation

```bash
ni  # Installs dependencies using antfu/ni
```

## Usage

```bash
nr start  # Starts live-reload dev server on port 8080
```

- Drag slider to adjust BPM
- ← → arrow keys to halve/double BPM
- Browser refresh to reset visualization

## Deployment

**GitHub Pages:**
```bash
nr deploy  # Deploys to gh-pages branch
```

**Netlify:**
- Automatic deploys via linked GitHub repo
- Production build command: `npm run build`

## Development

```bash
nr build  # Creates production build in /build
```

## Code Structure

Key implementation details from sketch.js:
```javascript:sketch.js
startLine: 18
endLine: 96
```

## Technologies

- [p5.js](https://p5js.org/) - Creative coding framework
- [gh-pages](https://github.com/tschaub/gh-pages) - GitHub Pages deployment
- [live-server](https://github.com/tapio/live-server) - Development server
- [Netlify](https://www.netlify.com/) - Static site hosting

## License

ISC © Sam Carlton