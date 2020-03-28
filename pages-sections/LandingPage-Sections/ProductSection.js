import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import { Book, Create } from '@material-ui/icons';

const useStyles = makeStyles(styles);
const justify = {
  textAlign: 'justify',
};

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}>About The Journal</h2>
          <h5 className={classes.description} style={justify}>
            Innovative Computing and Communication Journal (IJICC) is an annual international
            scientific peer-reviewed journal. Journal publishes original scientific papers,
            preliminary communications and review articles from the field of Computing,
            Communication Networks and Security and Internet of Things, as well as relevant
            contributions from related scientific disciplines. Publication in Innovative Computing
            and Communication Journal is without any costs/charge to authors. All processing and
            publishing costs are borne by the journal owner rather than by the author.
            <br />
            Innovative Computing and Communication Journal is dedicated to the dissemination of
            information on computer science, computer engineering, and computer systems. This
            journal encourages articles on original research in the areas of computer software,
            hardward, man-machine interface, theory and applications. tutorial papers in the
            above-mentioned areas, and state-of-the-art papers on various aspects of computer
            systems and applications.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}>
            About{' '}
            <a href="http://universal-inovators.com" target="_blank">
              Universal Innovators
            </a>
          </h2>
          <h5 className={classes.description} style={justify}>
            Every success story begins with a vision. The Universal Innovators (UI) is a private and
            autonomous body promoting research based activities all over the world. The UI aims to
            do non-profit collaborative research in the field of engineering, applied sciences and
            management. We aim to be the leading independent academic and professional body working
            in collaboration with academicians, faculties, students, researchers and educational
            institutes. This leads us to be playing a creative and critical role in the society by
            disseminating teaching and research on a global scale, the cornerstones of which are
            good, long-term relationships, a focus on real life applications necessary for the
            welfare of the mankind, and an ability to combine quality and innovation. The mission of
            Universal Innovators is to cultivate and carry out research in high-tech methodologies.
            We deal in conducting FDP’s, workshops, seminars, and conferences. As a recognized body,
            Universal Innovators (UI) seeks to facilitate the availability of academic excellence
            and disseminate innovative knowledge worldwide.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Call For Paper"
              description="Papers are called for various categories like Innovative Communication Networks and Security , Innovative Computing and Internet of Things (IoT) "
              icon={Book}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Paper Submission"
              description="Papers for the regular issues of the journal can be submitted,round the year.After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Editorial Board"
              description="ICC-Journal operate under the guidance of an editorial board, providing expert advice on content, attracting new authors and encouraging submissions.The Editorial Board is the team of experts in the journal's field."
              icon={Create}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={11}>
            <h2 className={classes.title}>Peer Review Process</h2>
            <h5 className={classes.description} style={justify}>
              The Innovative Computing and Communication Journal - IJICC will not accept or publish
              papers without prior peer review. There shall be a review process of submitted papers
              by one or more independent referees who are conversant in the pertinent subject area.
              <br />
              <hr />
              Peer reviews will be proposed by the Editing board, or will be confirmed by the
              Editorial board and the editor. For each paper two referees will be nominated, and
              when necessery the third one. The final decision about publishing the reviewed paper
              will bring the Editor.
              <br />
              <hr />
              Authors should strive for maximum clarity of expression, bearing in mind that the peer
              reviewers are eminent scientists in the field of their research.
              <br />
              <hr />
              Referees shall treat the contents of papers under review as privileged information not
              to be disclosed to others before publication. It is expected that no one with access
              to a paper under review will make any inappropriate use of the special knowledge which
              that access provides. Contents of abstracts submitted to conference program committees
              shall be regarded as privileged as well, and handled in the same manner.
              <br />
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={11}>
            <h2 className={classes.title}>Open Access Policy</h2>
            <h5 className={classes.description} style={justify}>
              This journal provides immediate open access to its content on the principle that
              making research freely available to the public supports a greater global exchange of
              knowledge.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={11}>
            <h2 className={classes.title}>Article Processing Charges</h2>
            <h5 className={classes.description} style={justify}>
              Publication in Innovative Computing and Communication Journal (IJICC) is without any
              costs/charge to authors. All processing and publishing costs are borne by the journal
              owner rather than by the author.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
