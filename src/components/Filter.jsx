import s from '../Styles.module.css';
import { useContacts } from './Hooks/hooks';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const { filter, setFilter } = useContacts();
  return (
    <div className={s.cont__container}>
      <h2 className={s.home__title}>FILTER CONTACTS BY NAME</h2>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
        >
        <TextField 
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contact by name"
        onChange={e => setFilter(e.target.value)}
        />
        </Box>
    </div>
  );
};