import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
      maxWidth: 345,
      borderRadius: 16,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        marginBottom: '2.5rem',
        marginRight: '0.5rem'
    },
    media: {
      height: 200,
    },
    cardHover: {
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 7.0px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        WebkitBackdropFilter: 'blur(7.0px)'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
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
  }))