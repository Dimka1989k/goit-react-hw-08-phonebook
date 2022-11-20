import s from '../Styles.module.css';

import { useState } from 'react';
import { useContacts } from './Hooks/hooks';
import { infoToast, successToast } from './Toasts';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ContacstForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? infoToast(`${name} or ${number} is already in contacts`)
      : addContact({ name, number });
    !enterContacts && successToast('the contact is in the list');
    setName('');
    setNumber('');
  };

  return (
    <div className={s.cont__container}>
      
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
         className={s.form__container} onSubmit={handleSubmit}>
        <TextField 
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
         <TextField 
          type="tel"
          name="number"
          value={number}
          placeholder="phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <Stack spacing={2} direction="row">
        <Button
          variant="contained" type="submit " className={s.form__btn}>
          Add contact
         </Button>
    </Stack>
      </Box>
    
    </div>
  );
};