import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
// import { editPost } from '../../../redux/postsRedux.js';

import styles from './PostEdit.module.scss';

const Component = ({posts, match, className}) => {

  const post = posts[match.params.id];

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.head}>
        <h1>Edit announcement</h1>
      </div>
      <form className={styles.form} noValidate autoComplete="off">
        <div className={styles.row}>
          <label> <span> Current name: </span> {post.name}</label>
          <TextField
            className={styles.input}
            label="New name"
            variant="outlined" />
        </div>
        <div className={styles.row}>
          <label> <span> Current description:</span> {post.description}</label>
          <TextField
            className={styles.input}
            label="New description"
            variant="outlined"
            multiline="true" />
        </div>
        <div className={styles.row}>
          <label> <span> E-mail:</span> {post.mail}</label>
          <TextField
            className={styles.input}
            label="New e-mail"
            variant="outlined"
            multiline="true" />
        </div>
        <div className={styles.row}>
          <label> <span> Current status </span> {post.status}</label>
        </div>
        <Button
          type="submit"
          className={styles.link}
          to={process.env.PUBLIC_URL + '/post/:id'}
        >Submit
        </Button>
      </form>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//   editPost: post => dispatch(editPost(post)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
