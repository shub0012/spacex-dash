import { makeStyles } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors';
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
        boxShadow: `0 6px 12px 0 ${grey[400]}`,
        '&:hover': {
        boxShadow: `0 6px 12px 0 ${Color(grey[800])
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
        },
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
    avatar: {
        color: red[500],
    },
}))