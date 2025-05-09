import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Signup_Login/page.jsx';
import Initiative_view from './Initiative_View/page.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<LandingPage /> */}
    <Initiative_view/>
    
  </React.StrictMode>

);

reportWebVitals();
