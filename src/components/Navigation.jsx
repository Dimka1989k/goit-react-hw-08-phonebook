import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>   

      {isLoggedIn ? (
        
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.nav__link)}
          to="/contacts"
        >
         
    
            </NavLink>
      
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.nav__link)}
          to="/"
          >
      <Stack spacing={2} direction="row">
         <Button variant="contained" >Home</Button>
    </Stack>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;