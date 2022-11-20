import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/register"
      >
    <Stack spacing={2} direction="row">
         <Button
          variant="contained">Registration</Button>
    </Stack>
        
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.nav__link)}
        to="/login"
      >
      <Stack spacing={2} direction="row">
         <Button
          variant="contained">Log in</Button>
    </Stack>
      </NavLink>
    </div>
  );
}