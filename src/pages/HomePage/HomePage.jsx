import React from 'react'
import {Card, Grid} from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const HomePage = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="space-evenly" spacing={4} >
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='http://www.nasa.gov/sites/default/files/thumbnails/image/spacexarabsat6a.jpg'
                    title="All Launches"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            All Launches
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about SpaceX Launches
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/all-launches">
                    All Launches
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://www.cnet.com/a/img/hIm0NUGZEjG4S0Dy_caWwPiD3Kk=/1200x675/2019/01/30/eef0e715-6c47-4c9b-b01a-2827f0aeab02/screen-shot-2019-01-30-at-12-42-36-pm.png'
                    title="Ships"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Ships
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about Ships used by SpaceX
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/ships">
                    Ships
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://cdn.geekwire.com/wp-content/uploads/2019/01/190110-starship5.jpg'
                    title="Rockets"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Rockets
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about Rockets used by SpaceX
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/rockets">
                    Rockets
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://i.insider.com/5a792ef470ca4431008b47b6?width=1136&format=jpeg'
                    title="launchpads"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Launchpads
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about launchpads used by SpaceX
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/launchpads">
                    Launchpads
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://www.teslarati.com/wp-content/uploads/2020/03/Falcon-9-Block-5-CRS-launch-SpaceX-LZ-1-3.jpg'
                    title="landpads"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Landpads
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about landpads used by SpaceX
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/landpads">
                    Landpads
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://pbs.twimg.com/media/Evvl78AXMAQy6vx.jpg'
                    title="crew"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Ships
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about crew in SpaceX Team
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/crew">
                    Crew
                    </Button>
                </CardActions>
            </Card>
            <Card className={clsx(classes.root, classes.cardHover)}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image='https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600'
                    title="company"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        About SpaceX
                        </Typography>
                        <Typography variant="body2" color="textPrimary" component="h4">
                            Click Below to know more about SpaceX
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" variant="contained" color="secondary" component={Link} to="/company-info">
                    SpaceX
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    </main>
    )
}

export default HomePage
