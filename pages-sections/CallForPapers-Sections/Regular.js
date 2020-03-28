import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import Album from '@material-ui/icons/Album';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Special from './Special';

const useStyles = makeStyles(styles);
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

export default function Regular() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Call For Regular Issues</h2>
      <NavPills
        color="primary"
        tabs={[
          {
            tabButton: 'Innovative Communication Networks & Security',
            tabContent: (
              <span>
                <GridContainer xs={12} sm={12} md={18} justify="center">
                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Wireless sensor networks" />
                    <ListStyle text="Mobile ad-hoc networks " />
                    <ListStyle text="Software defined networks " />
                    <ListStyle text="Information theory and coding " />
                    <ListStyle text="Cloud communications and networking " />
                    <ListStyle text="Wearable network and systems " />
                    <ListStyle text="Personal communication systems" />
                    <ListStyle text="Vehicular networks and applications " />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Wireless communications" />
                    <ListStyle text="Virtual and overlay networks " />
                    <ListStyle text="Future Internet Architecture & protocols " />
                    <ListStyle text="Satellite Communication " />
                    <ListStyle text=" Next Generation Networking" />
                    <ListStyle text="Quantum Networking " />
                    <ListStyle text="Qos Provisioning and Architectures " />
                    <ListStyle text="Telecommunication Services & Apps. " />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Optical Communication" />
                    <ListStyle text="Network Performance" />
                    <ListStyle text="Computer Security " />
                    <ListStyle text="Digital Signature " />
                    <ListStyle text="Information Security " />
                    <ListStyle text="Network Security " />
                    <ListStyle text="Cyber Security " />
                    <ListStyle text="MANET’s " />
                  </GridItem>
                </GridContainer>
              </span>
            ),
          },
          {
            tabButton: 'Innovative Computing',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Computational Intelligence " />
                  <ListStyle text="Machine Learning " />
                  <ListStyle text="Artificial Intelligence " />
                  <ListStyle text="Signal Processing " />
                  <ListStyle text="Computer vision" />
                  <ListStyle text="Soft Computing " />
                  <ListStyle text="Decision Support and Decision making " />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Parallel computing " />
                  <ListStyle text="Distributed computing " />
                  <ListStyle text="Grid computing" />
                  <ListStyle text="Cloud computing " />
                  <ListStyle text="Mobile computing " />
                  <ListStyle text="Biomedical computing" />
                  <ListStyle text="Ubiquitous computing" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Image processing " />
                  <ListStyle text="Information retrieval " />
                  <ListStyle text="Deep learning " />
                  <ListStyle text="Expert system " />
                  <ListStyle text="Internet computing " />
                  <ListStyle text="High performance computing" />
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Internet of Things (IoT)',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Intelligent Systems for IoT" />
                  <ListStyle text="Environmental Monitoring" />
                  <ListStyle text="Machine to Machine/Device Communications" />
                  <ListStyle text="Network Design and Architecture" />
                  <ListStyle text="Wireless Systems and Applications" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Infrastructure Management" />
                  <ListStyle text="IoT and Big Data" />
                  <ListStyle text="Home Automation" />
                  <ListStyle text="Security and Privacy" />
                  <ListStyle text="Social Implications of IoT" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Technological focus for Smart Environments" />
                  <ListStyle text="Smart City Case Studies" />
                  <ListStyle text="Data Analysis and Visualization" />
                  <ListStyle text="Architecture for secure and interactive IoT" />
                  <ListStyle text="Sensor, Wireless Technologies and APIs" />
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
      <Special />
    </div>
  );
}
