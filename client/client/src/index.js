import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './app/Signup_Login/page.jsx';
import InitiativeView from './app/Initiative_View/page.jsx';
import InboxPage from './app/inbox/page.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InitiativeView/>
  </React.StrictMode>
);

reportWebVitals();
