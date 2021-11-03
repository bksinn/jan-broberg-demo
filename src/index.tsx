import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/styles/styles.scss'
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import JoinMovement from './components/JoinMovement';
import Footer from './components/Footer';
import TrailerVideo from './components/TrailerVideo';
import TedXVideo from './components/TedXVideo';
import UpcomingEvents from './components/UpcomingEvents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <Nav />
    <div className="main">
      <HeroSection />
    </div>
    <TedXVideo />
    <JoinMovement />
    <TrailerVideo />
    <UpcomingEvents />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
