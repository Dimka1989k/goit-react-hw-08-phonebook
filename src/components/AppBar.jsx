import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import s from '../Styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';





export default function AppBarchick() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
           <Toolbar>
            
          
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
            
          </Toolbar>
        </AppBar>
      </Box>
      
        
    
  );
}