import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import shortid from 'shortid';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export default function Filter() {
  const nameInputId = shortid.generate();
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        className={styles.inputInput}
        color="secondary"
        placeholder="Search contacts..."
        id={nameInputId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
