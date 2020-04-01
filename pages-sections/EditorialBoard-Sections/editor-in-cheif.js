import React from 'react';
// nodejs library that concatenates classes

import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Album from '@material-ui/icons/Album';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import editor from '../../assets/img/editorcheif.png';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js';

const useStyles = makeStyles(styles);

export default function EditorInCheif() {
  const classes = useStyles();
  const justify = {
    textAlign: 'justify',
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}> Editor-in-Chief</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <img src={editor} style={{ maxWidth: '300px', height: '300px' }} />
        </GridItem>
        <GridItem xs={12} sm={12} md={8} style={{ textAlign: 'left', marginTop: '-30px' }}>
          <h2 className={classes.title}> Joel J. P. C. Rodrigues </h2>
          <h3 className={classes.description}>Professor</h3>
          <h4 className={classes.description}>
            {' '}
            <b>
              {' '}
              National Institute of Telecommunications (Inatel), Santa Rita do Sapucaı́, MG, Brazil{' '}
            </b>{' '}
          </h4>
          <h4 className={classes.description}>
            {' '}
            <b> Instituto de Telecomunicações, Lisbon, Portugal </b>{' '}
          </h4>
          <h4 className={classes.description}>
            {' '}
            <b> Federal University of Piauí (UFPI), Teresina, PI, Brazil </b>{' '}
          </h4>
          <h4 className={classes.description}>
            {' '}
            <a> Email: joeljr@inatel.br, joeljr@ieee.org. </a>{' '}
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
