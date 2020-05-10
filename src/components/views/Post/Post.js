import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../../features/Announcement/Announcement';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({id, name, description, phone}) => (
  <div className={styles.root}>
    <div className={styles.head}>
      <h1 className={styles.title}>Details</h1>
    </div>
    <Announcement
      id={id}
      name={name}
      description={description}
      phone={phone}
    />
  </div>
);

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  phone: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
