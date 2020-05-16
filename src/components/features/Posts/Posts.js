import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Posts.module.scss';

const Component = ({posts}) => (
  <div className={styles.root}>
    {posts.map(post =>(
      <Announcement
        key={post.id}
        name={post.name}
        description={post.description}
        published={post.published}
        updated={post.updated}
        mail={post.mail}
        status={post.status}
        id={post.id}
      />
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const Container = connect(mapStateToProps)(Component);

export {
  // Component as Posts,
  Container as Posts,
  Component as PostsComponent,
};
