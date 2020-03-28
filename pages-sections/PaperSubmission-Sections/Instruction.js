import React from "react";
// nodejs library that concatenates classes

import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";
import  Album from '@material-ui/icons/Album';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import PaperSubmissionTemplate from './PaperSubmissionTemplate';

const CardStyles = {
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    textMuted: {
      color: "#6c757d"
    },
  };

const useCardStyles = makeStyles(CardStyles);
const useStyles = makeStyles(styles);

export default function Instruction() {
  const classes = useStyles();
  const justify = {
    textAlign : "justify"
  }
  
  return (

    <div className={classes.section}>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Instructions To Authors</h2>
          <h5 className={classes.description} style={justify}>
          Papers for the regular issues of the journal can be submitted, round the year, electronically at <a> editor@icc-journal.com</a> . After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to an specific Volume / Issue of the Journal will be taken up by the Editorial Board later; and the author will be intimated accordingly. For Theme Based Special Issues, time bound Special Call for Papers will be announced and the same will be applicable for that specific issue only.<br/>
          Submission of a paper implies that the work described has not been published previously (except in the form of an abstract or academic thesis) and is not under consideration for publication elsewhere. The submission should be approved by all the authors of the paper. If a paper is finally accepted, the authorities, where the work had been carried out, shall be responsible for not publishing the work elsewhere in the same form. Paper, once submitted for consideration in IJICC, cannot be withdrawn unless the same is finally rejected.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Manuscript Submission</h2>
          <h5 className={classes.description} style={justify}>
          Submission of a manuscript implies: that the work described has not been published before; that it is not under consideration for publication anywhere else; that its publication has been approved by all co-authors, if any, as well as by the responsible authorities – tacitly or explicitly – at the institute where the work has been carried out. The publisher will not be held legally responsible should there be any claims for compensation.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Permissions</h2>
          <h5 className={classes.description} style={justify}>
          Authors wishing to include figures, tables, or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) for both the print and online format and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.
          </h5>
        </GridItem>
      </GridContainer>
      <br/>
      
      <PaperSubmissionTemplate/>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Mathematical Formulae </h2>
          <h5 className={classes.description} style={justify}>
          Present formula using Equation editor in the line of normal text. Number consecutively any equations that have to be referred in the text.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Captions and Numbering for Figure and Tables </h2>
          <h5 className={classes.description} style={justify}>
          Ensure that each figure / table has been numbered and captioned. Supply captions separately, not attached to the figure. A caption should comprise a brief title and a description of the illustration. Figures and tables should be numbered separately, but consecutively in accordance with their appearance in the text.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Color illustrations  </h2>
          <h5 className={classes.description}>
          Online publication of color illustrations is free of charge. There is no any extra charges.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Copyright  </h2>
          <h5 className={classes.description} style={justify}>
            Copyright of all accepted papers will belong to IJICC and the author(s) must affirm that accepted papers for publication in IJICC must not be re-published elsewhere without the written consent of the editor-in-chief of IJICC. To comply with this policy, authors will be required to submit a signed copy of Copyright Transfer Form, after acceptance of their paper, before the same is published. Copyright form available at <a href="https://drive.google.com/file/d/125_4BiJHzm0xHOEUzCjJert5uLJFV7VT/view?usp=sharing" target="_blank"> Copyright Form </a>
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Copyright Policy  </h2>
          <h5 className={classes.description} style={justify}>
            Authors note that paper can not be withdrawn at any condition once it is accepted. The Author may not publish his/her contribution anywhere else without the prior written permission of the publisher unless it has been changed substantially. The Author warrants that his/her contribution is original, except for such excerpts from copyrighted works as may be included with the permission of the copyright holder and author thereof, that it contains no libelous statements, and does not infringe on any copyright, trademark, patent, statutory right, or propriety right of others.  The Author signs for and accepts responsibility for releasing this material on behalf of any and all co-authors. In return for these rights:
          </h5>
          <List >
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
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}> Final Proof of the Paper </h2>
          <h5 className={classes.description}>
          One set of page proofs (as PDF files) will be sent by e-mail to the corresponding author or a link will be provided in the e-mail so that the authors can download the files themselves. These PDF proofs can be annotated; for this you need to download <a href="https://www.google.com/url?q=https%3A%2F%2Fget.adobe.com%2Freader%2F&sa=D" target="_blank"> Adobe Reader </a> version 7 (or higher) available free at <a href="https://www.google.com/url?q=http%3A%2F%2Fget.adobe.com%2Freader%2F&sa=D" target="_blank">get.adobe.com/reader</a> If authors do not wish to use the PDF annotations function, they may list the corrections and return them to IJICC in an e-mail
           <a> editor@icc-journal.com </a>. Please list corrections quoting line number. If, for any reason, this is not possible, then mark the corrections and any other comments on a printout of the proof and then scan the pages having corrections and e-mail them back, within 05 days. Please use this proof only for checking the typesetting, editing, completeness and correctness of the text, tables and figures. Significant changes to the paper that has been accepted for publication will not be considered at this stage without prior permission. It is important to ensure that all corrections are sent back to us in one communication: please check carefully before replying, as inclusion of any subsequent corrections cannot be guaranteed. Proofreading is solely authors’ responsibility. Note that IJICC will proceed with the publication of paper, if no response is received within 05 days.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
