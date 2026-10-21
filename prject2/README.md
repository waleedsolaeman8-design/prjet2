# Exercise 1: Interactive Profile Card

## Goal
Build a profile card that responds to follow/unfollow actions and displays a live follower count.

## Requirements
- Display an avatar, name, role, short bio and two external profile links.
- Implement Follow / Following toggle without reloading the page.
- Update a follower count accurately and expose pressed state with aria-pressed.
- Use Flexbox and adapt gracefully to a 320px-wide viewport.

## Acceptance criteria
- Toggling twice returns to original count and state.
- All external links have descriptive labels.
- Card works by keyboard and on small screens.

## Bonus
Add an editable bio with Save/Cancel.

## Running
Use a local web server (such as `python3 -m http.server 8000` in this folder) and open http://localhost:8000. Exercise 10 needs a server for JSON fetching. No frameworks or build tools required.

## Files
- `index.html`: provided semantic structure and hooks
- `styles.css`: layout foundation to extend
- `script.js`: implementation TODOs
