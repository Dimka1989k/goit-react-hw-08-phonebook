import s from '../Styles.module.css';
import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';

const Contacts = () => {
  return (
    <div className={s.view__container}>
      <h2 className={s.home__title}>
        ENTER YOR NAME AND PHONE NUMBER
      </h2>
      <ContacstForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;