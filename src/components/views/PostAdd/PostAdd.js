import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost, getAllPublished, savePost } from '../../../redux/postsRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, addPost, savePost}) => {

  const [post, newPost] = React.useState({
    name: '',
    description: '',
    published: '',
    updated: '',
    mail: '',
    status: '',
  });

  const handleChange = (e, name) => {
    newPost({
      ...post,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addPost(post);
    console.log('about to saveee');
    savePost(post);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.head}>
        <h1>Add new announcement</h1>
      </div>
      <form className={styles.form}
        noValidate
        autoComplete="off"
        onSubmit={e => handleSubmit(e)}>
        <TextField
          className={styles.input}
          label="Name"
          variant="outlined"
          onChange={e => handleChange(e, 'name')}/>
        <TextField
          className={styles.input}
          label="Description"
          variant="outlined"
          multiline="true"
          onChange={e => handleChange(e, 'description')}/>
        <TextField
          className={styles.input}
          label="Pubslih date"
          variant="outlined"
          onChange={e => handleChange(e, 'published')}/>
        <TextField
          className={styles.input}
          label="Update date"
          variant="outlined"
          onChange={e => handleChange(e, 'updated')}/>
        <TextField
          className={styles.input}
          label="Mail"
          variant="outlined"
          onChange={e => handleChange(e, 'mail')}/>
        <TextField
          className={styles.input}
          label="Status"
          variant="outlined"
          onChange={e => handleChange(e, 'status')}/>
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
  addPost: PropTypes.func,
  savePost: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAllPublished(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  savePost: post => dispatch(savePost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
