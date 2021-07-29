import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactsList.module.css';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);

  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <Paper className={styles.contacts_list_wrapper}>
      <List className={styles.contacts_list}>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroid />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDeleteContact(id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
