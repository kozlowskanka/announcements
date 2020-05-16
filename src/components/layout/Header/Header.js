import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { PageNav } from '../../layout/PageNav/PageNav';

import styles from './Header.module.scss';
import { Container } from '@material-ui/core';


const Component = ({className, userLogged}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar className = {styles.component}>
      <Toolbar disableGutters>
        <Container>
          <PageNav userLogged = {userLogged} />
        </Container>
      </Toolbar>
    </AppBar>
    <Toolbar/>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  userLogged: state.userLogged,
});

const HeaderContainer = connect(mapStateToProps)(Component);

export {
  HeaderContainer as Header,
  Component as HeaderComponent,
};
