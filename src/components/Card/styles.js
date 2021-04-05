import { makeStyles } from '@material-ui/core/styles'
import { red, grey, teal } from '@material-ui/core/colors';
import Color from 'color';

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        
    },
    Success: {
        color: '#03543F',
        border: '1px solid #DEF7EC',
        borderRadius: '15px',
        backgroundColor: '#DEF7EC'
    },
    Upcoming: {
        color: '#92400F',
        border: '1px solid #FEF3C7',
        borderRadius: '15px',
        backgroundColor: '#FEF3C7'
    },
    Failure: {
        color: '#981B1C',
        border: '1px solid #FDE2E1',
        borderRadius: '15px',
        backgroundColor: '#FDE2E1' 
    },
    cardHover: {
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 7.0px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        WebkitBackdropFilter: 'blur(7.0px)'
    },
    media: {
        height:0,
        paddingTop:'56.25%', //16.9 screen
    },
    cardActions: {
        display:"flex",
        justifyContent:'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
      },
    avatarUtube: {
        color: red[800],
    },
    avatarWiki: {
        color: grey[600],
    },
    avatarArticle: {
        color: teal[500],
    },
}))