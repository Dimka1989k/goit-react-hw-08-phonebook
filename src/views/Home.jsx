import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Styles.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const HomeView = () => (
  <div className={s.view__container}>
    <h1 className={s.home__title}>WELCOME TO THE PHONEBOOK! </h1>
    <p className={s.please}>Please make your choice</p>
    <div className={s.please__container}>
    
      <NavLink  className={({ active }) => (active ? s.active : s.home__link)}
        to="/login">
        <Stack spacing={2} direction="row">
         <Button  size="large" variant="contained" type="submit">
       
      
          Log in
           </Button>
          
        </Stack>
        
        </NavLink>
       
      
      

      <NavLink className={({ isActive }) => (isActive ? s.active : s.home__linc)}
        to="/register" >
         <Stack spacing={2} direction="row">
         <Button size="large" variant="contained" type="submit">
          Register
           </Button>
          
        </Stack>
      </NavLink>
        
      
    </div>
  </div>
);

export default HomeView;