import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import styles from './Posts.module.scss';

const Component = ({posts}) => (
  <div className={styles.root}>
    {posts.data.map(post =>(
      // eslint-disable-next-line react/jsx-key
      <Link to={`/post/${post.id}`} className={styles.link}>
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
      </Link>
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
