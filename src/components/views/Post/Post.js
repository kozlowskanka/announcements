import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import {Announcement} from '../../features/Announcement/Announcement';

import { connect } from 'react-redux';

import styles from './Post.module.scss';

const Component = ({posts, match, userLogged}) => {

  const post = posts[match.params.id];

  return (

    <div className={styles.root}>
      <div className={styles.head}>
        <h1 className={styles.title}>Details</h1>
      </div>

      <Announcement
        key={post.id}
        name={post.name}
        description={post.description}
        published={post.published}
        updated={post.updated}
        mail={post.mail}
        status={post.status}
      />

      {userLogged === true
        ?
        <div>
          <Button
            className={styles.link}
            component={NavLink}
            to={process.env.PUBLIC_URL + `/post/${post.id}/edit`}
            activeClassName='active'>Edit announcement
          </Button>
        </div>
        :
        ''
      }
    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.array,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  userLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: state.posts,
  userLogged: state.userLogged,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};
