import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import Album from '@material-ui/icons/Album';

// Card Components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

const useStyles = makeStyles(styles);
const justify = {
  textAlign: 'justify',
};
const flex = { display: 'flex', alignItems: 'center', textalign: 'justify' };

function ListStyle(props) {
  const classes = useStyles();
  return (
    <h6 className={classes.description} style={flex}>
      <Album />{' '}
      <li style={{ listStyle: 'none', marginLeft: '5px', textAlign: 'left' }}> {props.text}</li>{' '}
    </h6>
  );
}

export default function Special() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}> Call For Special Issues</h2>
          <h5 className={classes.description} style={justify}>
            Special Issues are an important component of ICC journal. They deal with more focused
            topics with high current interest falling within the scope of the journal in which they
            are published. They should be organized by recognized experts in the area and attract
            articles of the highest quality. Special Issue proposals are welcome at any time during
            the year.
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <GridItem>
        <Card className={classes.textCenter}>
          <CardHeader color="primary"> SPECIAL ISSUES</CardHeader>
          <CardBody>
            <h4 className={classes.title}>
              Proposals for Special Issues should be submitted by the Lead Guest Editor of the
              Special Issue and should include the following:
            </h4>
            <ListStyle text="Special Issue Title" />
            <ListStyle text="Lead Guest Editor (Including full name, email address, affiliation information)" />
            <ListStyle text="Guest Editor (Including full name, email address, affiliation information)" />
            <ListStyle text="Note: Affiliation information should include your department, university, city and country or institution, city and country." />
            <ListStyle text="Submission Deadline" />
            <ListStyle text="Publication Date" />
            <ListStyle text="Description: A 150-400 words summary about your Special Issue" />
          </CardBody>
          <CardFooter className={classes.textMuted}>
            <h6 className={classes.description}>
              If you would like to propose a Special Issue and be the Lead Guest Editor, please
              prepare a Proposal and send to <a> ijicc.editor@gmail.com </a>
            </h6>
          </CardFooter>
        </Card>
      </GridItem>
    </div>
  );
}
