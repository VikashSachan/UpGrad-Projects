import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Details from '../components/details';
import authService from './service/auth.service';
import { NavLink } from "react-router-dom";
import Home from './home/Home';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2em',
  },
  root: {
    maxWidth: 345,
    alignItems: 'center',
  },
  media: {
    height: 140,
  }
});



export default function Product() {

  const classes = useStyles();

  return (
    <div>
      <Home/>
      <Details/>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://rukminim1.flixcart.com/image/800/960/knxiavk0/shoe/a/r/b/6-hkz70-7-reebok-smoky-indigo-vector-original-imag2hwk8h5xq6a3.jpeg?q=50"
              title="EMERGO RUNNER Running Shoes"
            />
            <CardContent>
              <CardActions>
                <Typography gutterBottom variant="h6" component="h6" direction="grid" justify="flex-end">
                  EMERGO RUNNER Running Shoes
                </Typography>
              </CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                Unique new design with an amalgamation of PU and textile mesh. PU at the rearfoot for motion and protection. Full EVA outsole responsible for traction and responsiveness.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary">
              BUY
            </Button>
            {authService.isLoggedIn() && authService.isAdmin() && (
              <>
              <NavLink to="/add-product">
              <IconButton edge="end" className={classes.menuButton} color="default" aria-label="open drawer"
            >
              <EditIcon />
            </IconButton>
              </NavLink>
                <NavLink to="/add-product">
                  <IconButton edge="end" className={classes.menuButton} color="default" aria-label="open drawer">
                    <DeleteIcon />
                  </IconButton>
                </NavLink>
              </>
            )}
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/g/7/j/airdopes-131-boat-original-imagf9n3rhpwq252.jpeg?q=70"
              title="boAt Airdopes 131"
            />
            <CardContent>
              <CardActions>
                <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
                  boAt Airdopes 131
                </Typography>
                <Typography gutterBottom variant="h6" component="h6" justify="flex-end">
                  123
                </Typography>
              </CardActions>
              <Typography variant="body2" color="textSecondary" component="p">
                Bring home the boAt Airdopes 131 that comes with a carrying case.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" color="primary">
              BUY
            </Button>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}