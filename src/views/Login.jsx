import s from '../Styles.module.css';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.view__container}>
     
     
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" className={s.form__container} onSubmit={handleSubmit}>
         <TextField variant="outlined" 
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
         <TextField variant="outlined" 
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />

         <Stack spacing={2} direction="row">
         <Button  size="large" variant="contained" type="submit" className={s.form__btn}>
       
      
           Log in
           </Button>
          
        </Stack>
        
        
      </Box>
      
      
        
     
    </div>
  );
};

export default Login;