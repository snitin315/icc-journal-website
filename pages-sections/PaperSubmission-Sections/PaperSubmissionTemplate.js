import React from 'react';
// nodejs library that concatenates classes

import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import { cardTitle } from 'assets/jss/nextjs-material-kit.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
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

const useCardStyles = makeStyles(CardStyles);
const useStyles = makeStyles(styles);

export default function Instruction() {
  const classes = useStyles();
  const CardClasses = useCardStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Card className={CardClasses.textCenter}>
            <CardHeader color="primary">
              {' '}
              <strong>Online Paper Submission</strong>
            </CardHeader>
            <CardBody>
              <h5 className={CardClasses.cardTitle}>
                Prospective authors are invited to submit full text papers including abstract,
                keywords, introduction, methodology, result description, tables, figures and
                references. Full text papers (.doc, .pdf) may send by e-mail at{' '}
                <a> ijicc.editor@gmail.com </a>
              </h5>
              <h6>Paper Template of it is available. CLick the button below.</h6>
              <Button
                color="primary"
                target="_blank"
                href="https://drive.google.com/file/d/1R8ZlvIia2s5EpOK44Sh73xZRi4B0c7Av/view?usp=sharing"
              >
                {' '}
                <strong> Get Paper Template</strong>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}> 1. Title Page </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                The title page should include the name(s) of the author(s), a concise and
                informative title, the affiliation(s) and address(es) of the author(s), the e-mail
                address, and mobile number(s) of the corresponding author.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>2. Abstract </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                Please provide an abstract of 150 to 450 words. The abstract should not contain any
                undefined abbreviations or unspecified references.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>3. Keywords </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                Author(s) should provide 4 to 6 keywords which can be used for indexing purposes.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}> 4. Text Formatting </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                Paper Setup must be in A4 size with Margin: Top 1.78 cm, Bottom 1.78 cm, Left 1.78
                cm, Right 1.65 cm, Gutter 0 cm, and Gutter Position Top. Paper must be in two
                Columns after Authors Name with Width 8.59 cm, Spacing 0.51 cm. Whole paper must be
                with: Font Name Times New Roman, Font Size 10, Line Spacing 1.05 EXCEPT Abstract,
                Keywords (Index Term), Paper Tile, References, Author Profile (in the last page of
                the paper, maximum 400 words), All Headings, and Manuscript Details (First Page,
                Bottom, left side).Paper Title must be in Font Size 24, Bold, with Single Line
                Spacing. Authors Name must be in Font Size 11, Bold, Before Spacing 0, After Spacing
                16, with Single Line Spacing. Please do not write Author e-mail or author address in
                the place of Authors name. Authors e-mail, and their Address details must be in the
                Manuscript details. Abstract and Keywords (Index Term) must be in Font Size 9, Bold,
                Italic with Single Line Spacing. All MAIN HEADING must be in Upper Case, Center, and
                Roman Numbering (I, II, III…etc), Before Spacing 12, After Spacing 6, with single
                line spacing. All Sub Heading must be in Title Case, Left 0.25 cm, Italic, and
                Alphabet Numbering (A, B, C…etc), Before Spacing 6, After Spacing 4, with Single
                Line Spacing. Manuscript Details must be in Font Size 8, in the Bottom, First Page,
                and Left Side with Single Line Spacing. References must be in Font Size 8, Hanging
                0.25 with single line spacing. Author Profile must be in Font Size 8, with single
                line spacing.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}> 5. Introduction </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                State the objectives of the work and provide an adequate background, with a detailed
                literature survey or a summary of the results.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>6. Theory/Methodology </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                A Theory Section should extend, not repeat the information discussed in
                Introduction. In contrast, a Calculation Section represents a practical development
                from a theoretical basis.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>7. Result </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                Results should be clear and concise.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>8. Discussion </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                This section should explore the importance of the results of the work, not repeat
                them. A combined Results and Discussion section is often appropriate.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>
                {' '}
                9. Conclusion & Future Scope{' '}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                The main conclusions of the study may be presented in a short Conclusion Section. In
                this section, the author(s) should also briefly discuss the limitations of the
                research and Future Scope for improvement.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}> 10. Appendix </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                If there are multiple appendices, they should be identified as A, B, etc. Formula
                and equations in appendices should be given separate numbering: Eq. (A.1), Eq.
                (A.2), etc.; in a subsequent appendix, Eq. (B.1) and so on. Similar nomenclature
                should be followed for tables and figures: Table A.1; Fig. A.1, etc.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>11. Acknowledgement </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                f desired, authors may provide acknowledgements at the end of the article, before
                the references. The organizations / individuals who provided help during the
                research (e.g. providing language help, writing assistance, proof reading the
                article, sponsoring the research, etc.) may be acknowledged here.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={CardClasses.cardTitle}>12. References </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.description}>
                Citation in text- Please ensure that every reference cited in the text is also
                present in the reference list (and vice versa). The references in the reference list
                should follow the standard IEEE reference style of the journal and citation of a
                reference. Web references- As a minimum, the full URL should be given and the date
                when the reference was last accessed. Any further information, if known (DOI, author
                names, dates, reference to a source publication, etc.), should also be given. Web
                references can be listed separately (e.g., after the reference list) under a
                different heading if desired, or can be included in the reference list, as well.
                Reference style: Text- Indicate references by number(s) in square brackets in line
                with the text. The actual authors can be referred to, but the reference number(s)
                must always be given. Example: ‘….. as demonstrated [3,6]. Barnaby and Jones [8]
                obtained a different result ….’ List- Number the references (numbers in square
                brackets) in the list, according to the order in which they appear in the text.
                example: [1] G. O. Young, “Synthetic structure of industrial plastics (Book style
                with paper title and editor),” in Plastics, 2nd ed. vol. 3, J. Peters, Ed. New York:
                McGraw-Hill, 1964, pp. 15–64.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </GridItem>
      </GridContainer>
    </div>
  );
}
