import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import shortid from 'shortid';
import styles from './Form.module.css';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default function Form() {
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      contacts.find(contact => contact.name === name)
        ? alert(`${name} is already in contacts`)
        : contacts.find(contact => contact.number === number)
        ? alert(`${number} is already in contacts`)
        : dispatch(contactsOperations.addContact({ name, number }));

      reset();
    },
    [contacts, dispatch, name, number],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Paper className={styles.form}>
      <TextField
        className={styles.form_item}
        onChange={handleChange}
        value={name}
        id={nameInputId}
        name="name"
        type="text"
        label="Full Name"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        variant="outlined"
      />
      <TextField
        className={styles.form_item}
        onChange={handleChange}
        value={number}
        id={numberInputId}
        name="number"
        type="tel"
        label="Phone Number"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        variant="outlined"
      />
      <Button
        className={styles.form_item}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Add contact
      </Button>
    </Paper>
  );
}
