import React from 'react';
import './App.css';
import './index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HHeader from './Header.js';
//import TinderCard from 'react-tinder-card';
import TinCards from './TinCards';
import SwipeButtons from  './SwipeButtons';
import Chats from './Chats.js' 
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ':' is kindaa wildcard, after it anyvalue can go adead nd it can be a valid url */}
          <Route path="/chat/:person" element={
            <div>
              <HHeader backButton="/chat"/>  
              <ChatScreen />
            </div>
          }/>
          <Route path="/chat" element={
            <div>
                {/* passing a backButton prop */}
              <HHeader backButton="/"/>  
              <Chats />
            </div>
          }/>
          <Route path="/" element={
            <div>
              <HHeader />
              <TinCards />
              <SwipeButtons />
            </div>
          } /> 
        </Routes>
      </Router>  
    </div>
  );
}

export default App;


/* HEADER */
/* TINDER CARDS */
/* BUTTONS BELOW CARDS */
/* chat screen */
/* Individual chat screen */
      