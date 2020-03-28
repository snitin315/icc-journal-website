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
          <h2 className={classes.title}> Copyright </h2>
          <h5 className={classes.description} style={justify}>
            Copyright of all accepted papers will belong to IJICC and the author(s) must affirm that
            accepted papers for publication in IJICC must not be re-published elsewhere without the
            written consent of the editor-in-chief of IJICC. To comply with this policy, authors
            will be required to submit a signed copy of Copyright Transfer Form, after acceptance of
            their paper, before the same is published. Copyright form available at{' '}
            <a
              href="https://drive.google.com/file/d/125_4BiJHzm0xHOEUzCjJert5uLJFV7VT/view?usp=sharing"
              target="_blank"
            >
              {' '}
              Copyright Form{' '}
            </a>
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Copyright Policy </h2>
          <h5 className={classes.description} style={justify}>
            Authors note that paper can not be withdrawn at any condition once it is accepted. The
            Author may not publish his/her contribution anywhere else without the prior written
            permission of the publisher unless it has been changed substantially. The Author
            warrants that his/her contribution is original, except for such excerpts from
            copyrighted works as may be included with the permission of the copyright holder and
            author thereof, that it contains no libelous statements, and does not infringe on any
            copyright, trademark, patent, statutory right, or propriety right of others. The Author
            signs for and accepts responsibility for releasing this material on behalf of any and
            all co-authors. In return for these rights:
          </h5>
          <List>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="All proprietary rights other than copyrights, such as patent rights."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="The right to use all or part of this article, including tables and figures in future works of their own, provided that the proper acknowledgment is made to the Publisher as copyright holder. "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="The right to make copies of this article for his/her own use, but not for sale. "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="It is the responsibility of each author to ensure that papers submitted to the journal are written with ethical standards in mind, concerning plagiarism.Please note that all submissions are thoroughly checked for plagiarism. If an attempt at plagiarism is found in a published paper, the authors will be asked to issue a written apology to the authors of the original material. Any paper which shows obvious signs of plagiarism will be automatically rejected and its authors may be banned for duration of 01 years from publishing in Journal. The authors will receive proper notification if such a situation arises. "
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="This paper has not been published in the same form elsewhere."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="It will not be submitted anywhere else for publication prior to acceptance/rejection by this Journal."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Album />
              </ListItemIcon>
              <ListItemText
                className={classes.description}
                primary="For any dispute or related violence, it will be discussed and considered only in front of ‘Judiciary of Delhi’ at New Delhi, India."
              />
            </ListItem>
          </List>
        </GridItem>
        <iframe
          src="https://drive.google.com/file/d/125_4BiJHzm0xHOEUzCjJert5uLJFV7VT/preview"
          width="640"
          height="480"
        ></iframe>
      </GridContainer>
    </div>
  );
}
