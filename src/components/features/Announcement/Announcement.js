import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './Announcement.module.scss';

const Component = ({name, description, published, updated, mail, status}) => (
  <div className={styles.root}>

    <Card  className={styles.item}>
      <CardContent>
        <Typography
          variant="h4"
          color="primary"
          paragraph ="true"
        >
          {name}
        </Typography>
        <Typography
          paragraph ="true">
          {description}
        </Typography>
        <Typography className={styles.info}>publish date: {published}</Typography>
        <Typography className={styles.info}>update date: {updated}</Typography>
        <Typography className={styles.info}>e-mail: {mail}</Typography>
        <Typography className={styles.info}>status: {status}</Typography>
        <div className={styles.footer}>
        </div>
      </CardContent>
    </Card>

  </div>
);

Component.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  published: PropTypes.number,
  updated: PropTypes.string,
  mail: PropTypes.string,
  status: PropTypes.string,
  userLogged: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Announcement,
  // Container as Announcement,
  Component as AnnouncementComponent,
};
