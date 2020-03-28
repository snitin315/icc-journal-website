import React from 'react';
// nodejs library that concatenates classes

import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import { cardTitle } from 'assets/jss/nextjs-material-kit.js';
import Album from '@material-ui/icons/Album';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js';

const CardStyles = {
  cardTitle,
  textCenter: {
    textAlign: 'center',
  },
  textMuted: {
    color: '#6c757d',
  },
};

const useStyles = makeStyles(styles);

export default function Instruction() {
  const classes = useStyles();
  const justify = {
    textAlign: 'justify',
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Plagiarism Policy</h2>
          <h5 className={classes.description} style={justify}>
            The paper prior to submission should be checked for plagiarism from licensed plagiarism
            softwares like Turnitin/iAuthenticate etc. The similarity content should not exceed 20%
            (in any case either self contents or others). Further, you have to strictly implement
            the following ethical guidelines for publication:
          </h5>

          <List>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Any form of self-plagiarism or plagiarism from others' work(s) should not be there in an article. "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="If any model / concept / figure / table / data / conclusive comment by any previously published work is used in your article, you should properly cite a reference to the original work."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="If you are using any copyrighted material, you should acquire prior permission from the copyright holder."
              />
            </ListItem>
          </List>
        </GridItem>
      </GridContainer>
      <br />
    </div>
  );
}
