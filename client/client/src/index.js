import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Signup_Login/page.jsx';
import HomePage from './home/page.jsx';
import InboxPage from './inbox/page.jsx';
import InitiativeView from './initiative/page.jsx';
import MyActions from './My_Actions/page.jsx';
import NewAction from './New_Action/page.jsx';
import NewInitiative from './New_Initiative/page.jsx';
import Profile from './profile/page.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NewInitiative/>

    
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
