import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactsList from '../components/ContactsList';
import Form from '../components/Form';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <div>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
}
