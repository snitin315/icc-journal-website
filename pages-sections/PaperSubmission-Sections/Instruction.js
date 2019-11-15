import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Fade from 'react-reveal/Fade';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";
import  Album from '@material-ui/icons/Album';
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'; 

const CardStyles = {
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    textMuted: {
      color: "#6c757d"
    },
  };

const accStyle = {
    backgroundColor : "#eeeeee",
    cursor : "pointer",
    textAlign : "justify",
    margin : "10px",
    padding : "10px"
} 

const flex = {display : "flex", alignItems : "center",textalign : "justify"}


function ListStyle(props){
    const classes = useStyles(); 
    return (
   
      <h5 className={classes.description} style ={flex} >
          <Album/> <li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}> <strong style ={{color : "black"}}> {props.title} :</strong> {props.text}
                   </li> 
      </h5>             
    
    )
  }
  
const useCardStyles = makeStyles(CardStyles);
const useStyles = makeStyles(styles);

export default function Instruction() {
  const classes = useStyles();
  const justify = {
    textAlign : "justify"
  }

  const CardClasses = useCardStyles();
  
  return (

    <div className={classes.section}>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}> Instructions To Authors</h2>
          <h5 className={classes.description} style={justify}>
          Papers for the regular issues of the journal can be submitted, round the year, electronically at <a> editor@icc-journal.com</a> . After the final acceptance of the paper, based upon the detailed review process, the paper will immediately be published online. However, assignment of the paper to an specific Volume / Issue of the Journal will be taken up by the Editorial Board later; and the author will be intimated accordingly. For Theme Based Special Issues, time bound Special Call for Papers will be announced and the same will be applicable for that specific issue only.<br/>
          Submission of a paper implies that the work described has not been published previously (except in the form of an abstract or academic thesis) and is not under consideration for publication elsewhere. The submission should be approved by all the authors of the paper. If a paper is finally accepted, the authorities, where the work had been carried out, shall be responsible for not publishing the work elsewhere in the same form. Paper, once submitted for consideration in IJICC, cannot be withdrawn unless the same is finally rejected.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}> Manuscript Submission</h2>
          <h5 className={classes.description} style={justify}>
          Submission of a manuscript implies: that the work described has not been published before; that it is not under consideration for publication anywhere else; that its publication has been approved by all co-authors, if any, as well as by the responsible authorities – tacitly or explicitly – at the institute where the work has been carried out. The publisher will not be held legally responsible should there be any claims for compensation.
          </h5>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h2 className={classes.title}> Permissions</h2>
          <h5 className={classes.description} style={justify}>
          Authors wishing to include figures, tables, or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s) for both the print and online format and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the authors.
          </h5>
        </GridItem>
      </GridContainer>
      <br/>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <Card className={CardClasses.textCenter}>
                <CardHeader color="primary"> <strong>Online Paper Submission</strong></CardHeader>
                <CardBody>
                    <h5 className={CardClasses.cardTitle}>Prospective authors are invited to submit full text papers including abstract, keywords, introduction, methodology, result description, tables, figures and references. Full text papers (.doc, .pdf) may send by e-mail at <a>  editor@icc-journal.com </a></h5>
                    <h6>
                    Paper Template of it is available. CLick the button below.
                    </h6>
                    <Button color="primary"> <strong> Get Paper Template</strong></Button>
                </CardBody>               
          </Card>
        </GridItem>
      </GridContainer>
     
    </div>
  );
}
