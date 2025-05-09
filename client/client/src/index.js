import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Signup_Login/page.jsx';
import InitiativeView from './Initiative_View/page.jsx';
import InboxPage from './inbox/page.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InboxPage/>
  </React.StrictMode>
);

reportWebVitals();
