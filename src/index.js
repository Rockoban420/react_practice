import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// SPAs are single page applications. They are web apps that load a single HTML page and dynamically update that page as the user interacts with the app. 
// SPAs use AJAX and HTML5 to create fluid and responsive web apps, without constant page reloads. 
// However, this means much of the work happens on the client side, in JavaScript.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals