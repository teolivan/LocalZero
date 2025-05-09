import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './signup_login/page.jsx';
import HomePage from './home/page.jsx';
import InboxPage from './inbox/page.jsx';
import InitiativeView from './initiative/page.jsx';
import MyActions from './my_actions/page.jsx';
import NewAction from './new_action/page.jsx';
import NewInitiative from './new_initiative/page.jsx';
import Profile from './profile/page.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NewAction/>
    
    {/* <HomePage/>
    <LandingPage/>
    <InboxPage/>
    <InitiativeView/>
    <MyActions/>
    <NewAction/>
    <NewInitiative/>
    <Profile/>*/}

  </React.StrictMode>
);

reportWebVitals();
