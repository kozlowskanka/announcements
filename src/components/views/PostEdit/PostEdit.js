import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { editPost } from '../../../redux/postsRedux.js';

import styles from './PostEdit.module.scss';

const Component = ({posts, match, className, editPost}) => {

  const editedPost = posts.data[match.params.id];

  console.log('posts data', posts.data);
  console.log('editedPost', editedPost);

  const [post, updatePost] = React.useState({
    name: '',
    description: '',
    mail: '',
  });

  const handleChange = (e, name) => {
    updatePost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({...editedPost, ...post});
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.head}>
        <h1>Edit announcement</h1>
      </div>
      <form
        className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={e => handleSubmit(e)}>
        <div className={styles.row}>
          <label> <span> Current name: </span> {editedPost.name}</label>
          <TextField
            className={styles.input}
            label="New name"
            variant="outlined"
            onChange={e => handleChange(e, 'name')}
          />
        </div>
        <div className={styles.row}>
          <label> <span> Current description:</span> {editedPost.description}</label>
          <TextField
            className={styles.input}
            label="New description"
            variant="outlined"
            multiline="true"
            onChange={e => handleChange(e, 'description')} />
        </div>
        <div className={styles.row}>
          <label> <span> E-mail:</span> {editedPost.mail}</label>
          <TextField
            className={styles.input}
            label="New e-mail"
            variant="outlined"
            multiline="true"
            onChange={e => handleChange(e, 'mail')} />
        </div>
        <div className={styles.row}>
          <label> <span> Current status </span> {editedPost.status}</label>
        </div>
        <Button
          type="submit"
          className={styles.link}
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
  editPost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
