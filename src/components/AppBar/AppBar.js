import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import AppBarCss from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <AppBarCss position="static" className={styles.AppBar}>
      <Toolbar>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarCss>
  );
}
