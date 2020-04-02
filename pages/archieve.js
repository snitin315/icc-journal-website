import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';

// Sections for this page
import ArchiveSection from '../pages-sections/Archive-Sections/ArchiveSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function EditorialBoard(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand="ICC-Journal"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div style={{ marginTop: '30px' }} className={classNames(classes.main)}>
        <div className={classes.container}>
          <ArchiveSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
