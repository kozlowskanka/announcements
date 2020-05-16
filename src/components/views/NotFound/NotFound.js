import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

import styles from './NotFound.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.head}>
      <h1 className={styles.title}>Page Not Find</h1>
      <Button
        className={styles.link}
        component={NavLink}
        to={process.env.PUBLIC_URL + '/'}
      > Go Home
      </Button>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
