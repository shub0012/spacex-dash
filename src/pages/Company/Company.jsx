import React from 'react'
import { Grid, Card, CardMedia, CardContent, CardActions, Typography,CardHeader, Collapse, IconButton, Avatar   } from "@material-ui/core"
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LanguageIcon from '@material-ui/icons/Language'
import Loader from "react-loader-spinner"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import TwitterIcon from '@material-ui/icons/Twitter';
import useStyles from './styles'

const Company = () => {
    
    // const fetchCompanyInfo = async () => {
    //     await fetch('https://api.spacexdata.com/v4/company')
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data){
    //             setCompany(data)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     fetchCompanyInfo()
    // })
    const company = {
        "headquarters": {
            "address": "Rocket Road",
            "city": "Hawthorne",
            "state": "California"
            },
            "links": {
            "website": "https://www.spacex.com/",
            "flickr": "https://www.flickr.com/photos/spacex/",
            "twitter": "https://twitter.com/SpaceX",
            "elon_twitter": "https://twitter.com/elonmusk"
            },
            "name": "SpaceX",
            "founder": "Elon Musk",
            "founded": 2002,
            "employees": 8000,
            "vehicles": 3,
            "launch_sites": 3,
            "test_sites": 1,
            "ceo": "Elon Musk",
            "cto": "Elon Musk",
            "coo": "Gwynne Shotwell",
            "cto_propulsion": "Tom Mueller",
            "valuation": 52000000000,
            "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
            "id": "5eb75edc42fea42237d7f3ed"
    }
    // console.log(company)
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const checkLink = (contentLink) => {
    return (
        contentLink === null ? alert('Content not available') : contentLink
    )
}
  return (
    <main className={clsx(classes.content)}>
            <h1 className={classes.title}>About SpaceX</h1>
            <Grid container justify="center" spacing={4}>
            {company ? <Card className={clsx(classes.cardHover)} elevation={5}>
            <CardHeader
              avatar={
                <Avatar aria-label="spaceX" className={classes.avatar}>
                  S
                </Avatar>
              }
              action={
                <h5>Founder: {company.founder}</h5>
              }
              title={company.name}
              subheader={`May 6th, ${company.founded}`}
            />
            <CardMedia
              className={classes.media}
              image='https://www.spacex.com/static/images/share.jpg'
              title={company.name}
            />
            <CardContent>
              <Typography variant="subtitle1" color="textPrimary" component="article">
                {company.summary}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton  aria-label="watch youtube webcast" target="_blank" onClick={() => checkLink(company.links.twitter)} href={company?.links?.twitter} rel="noopener noreferrer">
            <TwitterIcon className={classes.avatarUtube} />
        </IconButton>
        <IconButton aria-label="wikipedia" target="_blank" onClick={() => checkLink(company.links.website)} href={company?.links?.website} rel="noopener noreferrer">
            <LanguageIcon className={classes.avatarWiki} />
        </IconButton>
        <IconButton aria-label="article" target="_blank" onClick={() => checkLink(company.links.flickr)} href={company?.links?.flickr} rel="noopener noreferrer">
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
                <Typography paragraph variant="subtitle1" color="textPrimary" component="h5">
                  HeadQuarter: {`${company.headquarters.address}, ${company.headquarters.city}, ${company.headquarters.state}`}
                </Typography>
                <Typography paragraph>Number of Employees: {company.employees}</Typography>
                <Typography paragraph>CEO: {company.ceo}</Typography>
                <Typography paragraph>CTO: {company.cto}</Typography>
                <Typography paragraph>COO: {company.coo}</Typography>
                <Typography paragraph>CTO-PROPULSION: {company.cto_propulsion}</Typography>
                <Typography paragraph>valuation: ${company.valuation}</Typography>
                <Typography paragraph>Number of Launch Sites: {company.launch_sites}</Typography>
                <Typography paragraph>Number of Test Sites: {company.test_sites}</Typography>
              </CardContent>
            </Collapse>
          </Card> : <Loader
                        type="TailSpin"
                        color="#000"
                        height={400}
                        width={300}
          
                    />  
    }
            </Grid>
        </main>
  );
}

export default Company
