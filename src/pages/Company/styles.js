import { makeStyles } from '@material-ui/core/styles'
import { blue, grey, teal } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    root: {
        maxWidth: '100%',
        borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        
    },
    title: {
        display:'flex',
        justifyContent: 'center',
        width: '100%',
        fontFamily: 'Helvetica,Great Vibes',
        color: '#000',
        fontSize: '4rem',
        fontWeight: 'bold',
        textShadow: '0.5px 2px 0.5px #fff',
        marginBottom:'1.5rem',
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
        color: blue[600],
    },
    avatarWiki: {
        color: grey[600],
    },
    avatarArticle: {
        color: teal[500],
    },
    cardImg : {
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundClip: 'border-box',
        backgroundOrigin: 'border-box',
    },
    avatar : {
        backgroundColor: '#000000',
        fontSize: '2rem'
    }
}))