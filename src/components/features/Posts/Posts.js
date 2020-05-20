import React from 'react';
import PropTypes from 'prop-types';

import {Announcement} from '../Announcement/Announcement';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllPublished, fetchPublished } from '../../../redux/postsRedux.js';

import styles from './Posts.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { fetchPublishedPosts } = this.props;

    fetchPublishedPosts();
  }

  render() {
    // const { posts } = this.props;
    const { loading: { active, error }, posts } = this.props;

    return (
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

  }
}

Component.propTypes = {
  posts: PropTypes.array,
  fetchPublishedPosts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
};

const mapStateToProps = state => ({
  posts: getAllPublished(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
