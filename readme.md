## WTWR (What to Wear?)
Author: Patricia Tirado Triple Ten Sprint 10 Project

## About the project
The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## File Structure
├── index.html ├── package-lock.json ├── package.json ├── public └── vite.svg ├── README.md ├── src ├── App.css ├── App.jsx ├── assets └── react.svg ├── components ├── index.css ├── main.jsx ├── utils ├── vendor └── vite.config.js

To add to file structure later:
blocks/ ├── card.css ├── footer.css └── page.css

components/ ├── App.jsx ├── Footer.jsx └── ItemCard.jsx


## React + Vite
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
