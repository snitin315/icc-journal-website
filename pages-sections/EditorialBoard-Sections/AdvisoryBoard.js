import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function AdvisoryBoard() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title} style={{ textAlign: 'center' }}>
        {' '}
        Advisory Board
      </h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Vincenzo Piuri </a>{' '}
                </b>
              </h4>
              <h6> University of Milan, Italy. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Valentina Emilia Balas </a>{' '}
                </b>
              </h4>
              <h6> Aurel Vlaicu University of Arad, Romania </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Sheng-Lung Peng </a>{' '}
                </b>
              </h4>
              <h6>National Dong Swa Uinversity, Taiwan. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Mohamed Bouhlel </a>{' '}
                </b>
              </h4>
              <h6> Sfax University, Tunisia. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Aboul Ella Hassanien </a>{' '}
                </b>
              </h4>
              <h6> Cairo University, Egypt. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. Victor C.M. Leung </a>{' '}
                </b>
              </h4>
              <h6> The University of British Columbia, Canada. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Prof. Siddhartha Bhattacharyya </a>{' '}
                </b>
              </h5>
              <h6> RCC Institute of Information Technology. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Prof. A.K. Singh </a>{' '}
                </b>
              </h4>
              <h6>NIT Kurukshetra, India. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a>Prof. Anil Kumar Ahlawat </a>{' '}
                </b>
              </h4>
              <h6> KIET Group of Institutes, India. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Dr. David Camacho </a>{' '}
                </b>
              </h4>
              <h6> Universidad Autonoma de Madrid,Spain. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Dr. Bozidar Klicek </a>{' '}
                </b>
              </h4>
              <h6> University of Zagreb, Croatia. </h6>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h4>
                <b>
                  <a> Dr. Marcin Paprzycki </a>{' '}
                </b>
              </h4>
              <h6> Polish Academy of Science, Poland. </h6>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
