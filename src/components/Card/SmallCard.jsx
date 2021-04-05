import React from 'react'
import clsx from 'clsx'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from './styles'

const SmallCard = ({images, name, description, articleLink}) => {
    const classes = useStyles();
    const checkImg = images === null ? 'https://www.cnet.com/a/img/NC780VXAanQ74Jn2zMHyt5cVdqs=/940x0/2020/05/12/df1dcd12-9774-4359-8bfe-e0b8b871ec22/go-searcher-helo-landing-20181018-helicopter-landing-test-2018-10-19-291-9.jpg' : images
    const checkLink = (contentLink) => {
      return (
          contentLink === null ? alert('Content not available') : contentLink
      )
    }

    return (
        <Card className={clsx(classes.root, classes.cardHover)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="350"
          image={checkImg}
          title={name}
          className={classes.cardImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" title={name}>
            {name.slice(0,48)}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" title={description}>
            {description.slice(0,170)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="secondary" variant="outlined" target="_blank" rel="noopener noreferrer" onClick={() => checkLink(articleLink)} href={articleLink}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    )
}

export default SmallCard
