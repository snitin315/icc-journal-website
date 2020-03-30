import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
       <CardMedia
        className={classes.cover}
        image={require('assets/img/landing-bg.jpg')}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Joel J. P. C. Rodrigues 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Professor
          </Typography>
          <Typography variant="subtitle3" color="textSecondary">
          National Institute of Telecommunications (Inatel), Santa Rita do Sapucaı́, MG, Brazil
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Instituto de Telecomunicações, Lisbon, Portugal
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          Federal University of Piauí (UFPI), Teresina, PI, Brazil
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}