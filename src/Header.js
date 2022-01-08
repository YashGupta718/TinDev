import React from 'react';
import './Header.css';
//import header from './header';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

function Header({backButton}) {
          return (
            <div className="header">
              {backButton ? (                   // if its a backbutton i.e. if a prop is recieved in backButton variable ,then implement first bracket(backbutton) else implement 2nd bracket(person icon)  
                <Link to="/">                                    
                <IconButton >
                  <ArrowBackIcon fontSize='large' className="header_logo" />
                </IconButton>
                </Link>
              ):(
                <IconButton>  
                  <PersonIcon fontSize="large"/>
                </IconButton>
              
              )}
  
              <Link to="/">
                <img 
                  className="header__logo"
                  src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
                  alt="tindev logo"
                />
              </Link>
              
              <Link to="/chat">
                <IconButton>  
                  <ForumIcon fontSize="large"/>
                </IconButton>  
              </Link>  
            </div>
        );
    }

export default Header;
