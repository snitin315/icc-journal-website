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

export default function EditorialBoard() {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.title} style={{ textAlign: 'center' }}>
        {' '}
        Editorial Board Members
      </h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Prof. Victor Hugo C. de Albuquerque </a>{' '}
                </b>
              </h5>
              <h6> University of Fortaleza, Brazil. </h6>
              <b className={classes.description}> Email: victor.albuquerque@unifor.br. </b>
            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Prof. Siddhartha Bhattacharyya </a>{' '}
                </b>
              </h5>
              <h6> RCC Institute of Information Technology, Kolkata, India. </h6>
              <b className={classes.description}>dr.siddhartha.bhattacharyya@gmail.com</b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Dr. Jafar A. Alzubi </a>{' '}
                </b>
              </h5>
              <h6> Al-Balqa, Applied University, Salt - Jordan. </h6>
              <b className={classes.description}> Email: j.zubi@bau.edu.jo. </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Dr. Zdzislaw Polkowski </a>{' '}
                </b>
              </h5>
              <h6> Jan Wyzykowski University, Polkowice, Poland. </h6>
              <b className={classes.description}> Email: z.polkowski@ujw.pl </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Dr. D Jude Hemanth </a>{' '}
                </b>
              </h5>
              <h6> Karunya University, Coimbatore, India </h6>
              <b className={classes.description}> Email: judehemanth@karunya.edu. </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Dr. Nhu Gia Nguyen </a>{' '}
                </b>
              </h5>
              <h6> Duy Tan University, Vietnam </h6>
              <b className={classes.description}> Email: nguyengianhu@duytan.edu.vn </b>
            </CardBody>
          </Card>
        </GridItem> */}
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Prof. Abhishek Swaroop </a>{' '}
                </b>
              </h5>
              <h6> Bhagwan Parshuram Institute of Technology, New Delhi, India </h6>
              <b className={classes.description}> Email abhishekswaroop@bpitindia.com</b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Dr. Utku Kose </a>{' '}
                </b>
              </h5>
              <h6> Suleyman Demirel University, Turkey </h6>
              <b className={classes.description}> Email: utkukose@sdu.edu.tr </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a> Dr. Ashish Khanna </a>{' '}
                </b>
              </h5>
              <h6> Maharaha Agrasen Institute of Technology, New Delhi, India </h6>
              <b className={classes.description}> Email: ashishkhanna@mait.ac.in </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Dr. Deepak Gupta </a>{' '}
                </b>
              </h5>
              <h6> Maharaja Agrasen Institute of Technology, Delhi, India. </h6>
              <b className={classes.description}>
                {' '}
                deepakgupta@mait.ac.in, drdeepakgupta.cse@gmail.com{' '}
              </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Dr. Aditya Khamparia </a>{' '}
                </b>
              </h5>
              <h6>Lovely Professional University, Punjab, India </h6>
              <b className={classes.description}> Email: aditya.khamparia88@gmail.com </b>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <h2 className={classes.title} style={{ textAlign: 'center' }}>
        {' '}
        Managing Editors
      </h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Dr. Deepak Gupta </a>{' '}
                </b>
              </h5>
              <h6> Maharaja Agrasen Institute of Technology, Delhi, India. </h6>
              <b className={classes.description}>
                {' '}
                deepakgupta@mait.ac.in, drdeepakgupta.cse@gmail.com{' '}
              </b>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <h5>
                <b>
                  <a>Dr. Aditya Khamparia </a>{' '}
                </b>
              </h5>
              <h6>Lovely Professional University, Punjab, India </h6>
              <b className={classes.description}> Email: aditya.khamparia88@gmail.com </b>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
