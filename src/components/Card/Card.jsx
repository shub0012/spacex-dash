import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography,CardHeader, Collapse, IconButton, Button  } from "@material-ui/core"
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import YouTubeIcon from '@material-ui/icons/YouTube'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import useStyles from './styles'

const ShowCard = ({name, 
    images, 
    launchDate, 
    youtubeLink, 
    wikiLink, 
    articleLink, 
    rokect, 
    orbit, 
    launchpad, 
    upcoming, 
    success,
    launchDetails,
    flightNumber,
    manufacturer,
    nationality,
    payloadType,
    numOfLaunches }) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const showImage =  images === null ? "https://www.spacex.com/static/images/share.jpg" : images
    const checkLink = (contentLink) => {
        return (
            contentLink === null ? alert('Content not available') : contentLink
        )
    }
    const launchStatus = success && !upcoming ? 'Success' : !success && !upcoming ? 'Failure' : 'Upcoming'
    const checkOrbit = orbit === undefined ? 'NA' : orbit
    const checkLaunchDetails = launchDetails === null ? 'Details not available for this Launch' : launchDetails
    const formattedDate = new Date(launchDate)
    const handleExpandClick = () => {
    setExpanded(!expanded);
    }

    return (
       <Card className={clsx(classes.root, classes.cardHover)} elevation={5}>
        <CardHeader
            title={name.slice(0,20)}
            subheader={`${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`}
            action = {
                <Button className={launchStatus === 'Upcoming' ? classes.Upcoming : launchStatus === 'Success' ? classes.Success : classes.Failure} variant="text">{launchStatus}</Button>
            }
        />
        <CardMedia
            className={classes.media}
            image={showImage}
            title={name}
        />
        <CardContent className={classes.cardContent}>
            <Typography variant="subtitle1" color="textPrimary" display="block">
                 <div>Rocket: {rokect}</div>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" display="block">
                <div>Orbit: {checkOrbit}</div>
            </Typography>
            <Typography variant="subtitle1" color="textPrimary" display="block">
                <div>launchpad: {launchpad}</div>
            </Typography>
            
        </CardContent>
        <CardActions disableSpacing>
            <IconButton  aria-label="watch youtube webcast" target="_blank" onClick={() => checkLink(youtubeLink)} href={youtubeLink} rel="noopener noreferrer">
                <YouTubeIcon className={classes.avatarUtube} />
            </IconButton>
            <IconButton aria-label="wikipedia" target="_blank" onClick={() => checkLink(wikiLink)} href={wikiLink} rel="noopener noreferrer">
                <LanguageIcon className={classes.avatarWiki} />
            </IconButton>
            <IconButton aria-label="article" target="_blank" onClick={() => checkLink(articleLink)} href={articleLink} rel="noopener noreferrer">
                <LibraryBooksIcon className={classes.avatarArticle}  />
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography>Launch Details:</Typography>
                <Typography paragraph title={launchDetails}>
                        {checkLaunchDetails.slice(0,250)}
                </Typography>
                <Typography paragraph>Flight Number: {flightNumber}</Typography>
                <Typography paragraph>Manufacturer: {manufacturer}</Typography>
                <Typography paragraph>Nationality: {nationality}</Typography>
                <Typography paragraph>Payload Type: {payloadType}</Typography>
                <Typography paragraph>Number of Launches: {numOfLaunches}</Typography>
            </CardContent>
        </Collapse>
    </Card>
    )
}

export default ShowCard