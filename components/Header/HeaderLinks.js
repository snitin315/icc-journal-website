/*eslint-disable*/
import React from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import { Apps, Home, Book, GroupAdd } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/nextjs-material-kit/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" color="transparent" className={classes.navLink}>
          <Home className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/call-for-papers" color="transparent" className={classes.navLink}>
          <Book className={classes.icons} /> Call For Papers
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Paper Submission"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/paper-submission/instruction-to-authors">
              <a className={classes.dropdownLink}> Instruction To Authors</a>
            </Link>,
            <Link href="/paper-submission/peer-review-policy">
              <a className={classes.dropdownLink}> Peer Review Policy</a>
            </Link>,
            <Link href="/paper-submission/plagiarism-policy">
              <a className={classes.dropdownLink}> Plagiarism Policy</a>
            </Link>,
            <Link href="/paper-submission/paper-submission-template">
              <a className={classes.dropdownLink}> Paper Submission template</a>
            </Link>,
            <Link href="/paper-submission/copyright-form">
              <a className={classes.dropdownLink}> Copyright Form</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/editorial-board" color="transparent" className={classes.navLink}>
          <GroupAdd className={classes.icons} /> Editorial Board
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button href="/archieve" color="transparent" className={classes.navLink}>
          <Book className={classes.icons} /> Archieve
        </Button>
      </ListItem>
    </List>
  );
}
