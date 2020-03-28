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
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js';

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
          <h2 className={classes.title}> Peer Review Policy</h2>
          <h5 className={classes.description} style={justify}>
            Reviewers play a central role in scholarly publishing. IJICC uses double-blind peer
            review process, which means that both the reviewer(s) and author(s) identities are
            concealed from the reviewer(s), and vice versa, throughout the review process. This
            means that the reviewer(s) of the paper won’t get to know the identity of the author(s),
            and the author(s) won’t get to know the identity of the reviewer(s). Peer review helps
            validate research, establish a method by which it can be evaluated, and increase
            networking possibilities within research communities. Despite criticisms, peer review is
            still the only widely accepted method for research validation.
            <br />
            <br />
            All submitted papers will be reviewed by double blind peer review process which may take
            minimum 03 to 04 weeks from the date of submission. We are advising to all the
            author(s), do not submit same paper to the multiple journals. You should wait for review
            status of paper.
            <br />
            <br />
            <b>IJICC</b> is committed to prompt evaluation and publication of fully accepted papers.
            To maintain a high-quality publication, all submissions undergo a rigorous review
            process. Characteristics of the peer review process are as follows:
          </h5>

          <List>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Simultaneous submissions of the same manuscript to different journals will not be tolerated."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Manuscripts with contents outside the scope will not be considered for review."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Papers will be refereed by at least 2  experts (reviewers) as suggested by the editorial board in which 01 from India and rest 01 or 02 from overseas."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="In addition, Editors will have the option of seeking additional reviews when needed."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Authors will be informed when Editors decide further review is required. All publication decisions are made by the journal’s Editors-in-Chief on the basis of the referees’ reports (reviewers report)."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="Authors of papers that are not accepted are notified promptly."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="All submitted manuscripts are treated as confidential documents. All submitted papers will be reviewed by double blind review process."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="
                  All manuscripts submitted for publication in IJICC cross-checked for plagiarism software. Manuscripts found to be plagiarized during initial stages of review are out-rightly rejected and not considered for publication in the journal."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="In case if a manuscript is found to be plagiarized after publication, the Editor-in-Chief will conduct preliminary investigation, may be with the help of a suitable committee constituted for the purpose. If the manuscript is found to be plagiarized beyond the acceptable limits, the journal will contact the author’s Institute / College / University and Funding Agency, if any."
              />
            </ListItem>
          </List>
        </GridItem>
      </GridContainer>
      <br />
    </div>
  );
}
