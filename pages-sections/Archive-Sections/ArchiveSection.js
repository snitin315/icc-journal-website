import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function AdvisoryBoard() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{ textAlign: 'center' }}>
        {' '}
        Archive
      </h2>
      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Vol. 1, Issue 1, July 2019 </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1GBQI3-uqkLAhi09raYK0s6DUO8jcnAxN/view"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Editorial – Inaugural Issue of Innovative Computing and Communication: An
                        International Journal{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Deepak Gupta, Ashish Khanna
                  </h5>
                  <h5>
                    <b>Pages: 1-4 </b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/10f1GZJxjNVBV3rITIckeIlmMm5nEZEAm/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        GEO PROFILING MAPS BASED ON CRIME{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Siddhant Magow, Harshit Kapoor, Chiranjeev Singh Bindra,
                    Deepak Gupta
                  </h5>
                  <h5>
                    <b>Pages: 1-8 </b>
                  </h5>
                  <br />
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1Qvkk12ooIllDxAltPITtzh8QLoKEG0E-/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Analysis of Gender Inequality Indian Women’s faced on Workplace{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Deepa Sharma, S.Ramachandran, Mandeep Kaur
                  </h5>
                  <h5>
                    <b>Pages: 9-14 </b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1zGgY5TIuJquzsqAqfRJNM3XqOKhl8Gdy/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Feature Selection using MultiObjective Grey Wolf Optimization Algorithm{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Deepak Gupta, Nimish Verma, Mayank Sehgal, Nitesh
                  </h5>
                  <h5>
                    <b>Pages: 15-18</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1Hrb9KQEaiACadUrgB_IBe0tPvPH37kUF/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        EQUIVALENCE DATA GENERATION TECHNIQUE IN CASE OF DATA LOSS DUE TO FAULT
                        OCCURRENCE IN VIRTUAL MACHINES USED IN CLOUD COMPUTING{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Umesh Dwivedi, Harsh Dev
                  </h5>
                  <h5>
                    <b>Pages: 19-28</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1cRRyRU5P3ld3HhwfAK8A-lQWCzR0lDMw/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Optimizing Machine Learning Models using Multiobjective Grasshopper
                        Optimization Algorithm{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Ashish Sharma, Deepak Gupta, Nimish Verma, Mayank Sehgal,
                    Nitesh
                  </h5>
                  <h5>
                    <b>Pages: 29-34</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1NtTvqnVCGwtnSLjpTZ9l3skUPZXMlW4l/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Early Detection of Ransomware Exploits Using Snort{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Raaghav Mathur, Ashish Khanna, Abhijeet Singh
                  </h5>
                  <h5>
                    <b>Pages: 35-46</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1RRJ-6nIyuBmwTvlamQz_5rOJ4NAWzM26/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        An Inflation Insinuation in Industries (MSME of Uttar Pradesh) Growth{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Manisha Shukla
                  </h5>
                  <h5>
                    <b>Pages: 47-54</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1ynRKmFNV6Q0wgMtMUo-KZ9MndH-9hl6A/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        Machine Learning with Internet of Things: A Comprehensive Survey{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Akanksha Kochhar, Prerna Sharma
                  </h5>
                  <h5>
                    <b>Pages: 55-64</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1smON6UTLVmIO9wdpsBMWeXvBDiZuVGaG/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        BLACK HOLE DETECTION AND PREVENTION IN AODV PROTOCOL USING MODIFIED CUCKOO
                        SEARCH ALGORITHM{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Moolchand sharma, Shubbham Gupta, Suman Deswal
                  </h5>
                  <h5>
                    <b>Pages: 65-74 </b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1VkwFJgT7QDc5MQ7qbE93TeoxNeWnuZ7D/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Comparative Analysis of Big Data Analytics and IoT Technologies{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Theres Bemila Jenet, Sonali Bapte
                  </h5>
                  <h5>
                    <b>Pages: 75-78 </b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <br />

      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Vol. 1, Issue 2, September 2019 </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1FJByHB4EYxyvTuc23UTluYavMzC6027J/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        RC Car Using LabVIEW And Arduino{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Nimit Nayak, Sahib Singh, Rajatdeep Singh, Ramandeep Singh,
                    Parul Dawar
                  </h5>
                  <h5>
                    <b>Pages: 1-6</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1Gt3dZOMEhVw_rVGz98N6xnli3zNW8wn3/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Implementation of IoT to Minimize Post-harvest Losses{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Srishti Sahni, Farzil Kidwai, Prerna Sharma, Harshit Singhal
                  </h5>
                  <h5>
                    <b>Pages: 7-16</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1O4y9PCoibaIPwirzaBbMaDhMiqeYjq9E/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Hand Gesture Recognition using Kinect Sensor{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Sai Rakshit S Harathas
                  </h5>
                  <h5>
                    <b>Pages: 17-20</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/16kGHpjv8cgO_lIRfwsK6pkZPWjoW_3gk/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Robotic Arm Control using LabView{' '}
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Piyush Malhotra, Parul Dawar
                  </h5>
                  <h5>
                    <b>Pages: 21-24</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Vol. 1, Issue 3, January/April 2020 </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1A7IufEizW-E82IspqchNmVL4ty3NxKvf/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Hierarchical Image Classification on Bayesian Cascade Neural Learning
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> M. Dharmalingam, G.D. Praveenkumar
                  </h5>
                  <h5>
                    <b>Pages: 1-6</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1mIiOWYEkv_6hLaNA0-YMVqqWZhb2bOk4/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        SAVE A LIFE-DONATE UNUSED MEDICINES
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Aditya Kumar, Rani Rupali Rajput, Ashi Srivastava, Prabhat Singh, and Harsh Khatter
                  </h5>
                  <h5>
                    <b>Pages: 7-12</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1R-2QY8eSFFSXkYWFghoPsyfD1QtadV6h/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        AI based Chatbot for Human Assistance
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Sanchit Singhal, Vatsal Garg, Osho Garg, Prabhat Singh, Harsh
                    Khatter
                  </h5>
                  <h5>
                    <b>Pages: 13-18</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1wgYhC3lg8yRP6N0BI00EPHxbtKLbDMWa/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Immigration Control and Management System using Blockchain
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Abhay Goel, Abhishek Sharma, Deepak Gupta
                  </h5>
                  <h5>
                    <b>Pages: 19-24</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/13_Rejz-REl2aRa9z9d46bCQAK-ig0iDi/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Voice Based Email for Visually Impaired
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Yash Singhal, Yash Kumar Singh, Utkarsh Agarwal, Prabhat
                    Singh, Harsh Khatter
                  </h5>
                  <h5>
                    <b>Pages: 25-29</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br/>
      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Vol. 1, Issue 4, April 2020 </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1L9baaZzLdjlD5HmvD9HnXuwF9uqSe-ir/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        COVID-19 outbreak analysis and predictions for future cases
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Karan Gupta, Luv Dhamija, Ritin Behl  
                  </h5>
                  <h5>
                    <b>Pages: 1-5</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1h1uwbzSEg9C5B1yqfCuoYsfRoV-qbmVa/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        FLY BULLETIN: AN INTELLIGENT NEWS APP 
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Srishty Chaudhary, Tanya Mehra, Prabhat Singh, Harsh Khatter
                  </h5>
                  <h5>
                    <b>Pages: 7-15</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1WdGgqsmFCL_Ur07b6Yojtw36ehFarfix/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Autonomous Car Using Tensorflow
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Navender Vats, Md Abid Iqbal, Suraj Aggarwal 
                  </h5>
                  <h5>
                    <b>Pages: 17-19</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/163yPYbzGHUe9-WQkyUC1YsxG04t8u5R7/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Voice Prescription using Name Entity Recognition
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Nobel Dang, Saksham Thukral, Ashish Khanna
                  </h5>
                  <h5>
                    <b>Pages: 21-25</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br/>
      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Vol. 2, Issue 1, August 2020 </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1wX6L-wUGIvyO03gcZIethYOSXgiLzftP/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Design of smart Home monitoring healthcare system using Internet of things
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> P. Nishanthi, E. Udayakumar, M. Vaishnavi, K. Srihari 
                  </h5>
                  <h5>
                    <b>Pages: 1-6</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1MH9T_LmGQKZOsU4AGsG8LvDaUiDIJ3nd/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Computer Aided Diagnosis Model for Lung Cancer Prediction using Gabor Filtering with Artificial Neural Networks
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b>  K. Shankar
                  </h5>
                  <h5>
                    <b>Pages: 7-10</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1m5BC0ZmHrcZuPm1u79fmKSxYJ1hAFs6t/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        One QR code for Ticketing System
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b>  Ashima Arya, Sapna Juneja, Abhinav Juneja
                  </h5>
                  <h5>
                    <b>Pages: 11-16</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1NoLy3Gf9P1F88etV49oSH3utqDNycq6M/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        Motion Transfer in Videos using DCGAN
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b> Moolchand Sharma, Prerna Sharma, Manish Kumar Jha, Rohan Singh
                  </h5>
                  <h5>
                    <b>Pages: 17-24</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <h4>
                    <b>
                      Title :{' '}
                      <a
                        href="https://drive.google.com/file/d/1baCCs98TVWkzY698pgqmT8QZ7EpHE1Dm/view?usp=sharing"
                        target="_blank"
                        style={{ color: '#1565d4' }}
                      >
                        {' '}
                        An improved K-Means Clustering with Machine Learning based Sentiment Analysis and Classification Model
                      </a>{' '}
                    </b>
                  </h4>
                  <h5>
                    <b>Author(s): </b>  M. Iiayaraja
                  </h5>
                  <h5>
                    <b>Pages: 25-30</b>
                  </h5>
                </CardBody>
              </Card>
            </GridItem>

          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
