import { makeStyles } from '@material-ui/core/styles'
// import { grey } from '@material-ui/core/colors'
// import { GradientTwoTone } from '@material-ui/icons'


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    
    root: {
      flexGrow: 1,
      '& > *': {
        margin: theme.spacing(1),
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
    carousel : {
      width:'100%',
      height:'600px',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        height: 'auto',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    alertMessage: {
      backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 7.0px )',
      borderRadius: '10px',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
      WebkitBackdropFilter: 'blur(7.0px)',
      display: 'flex', 
      justifyContent: 'space-evenly', 
      margin: '2.5rem', 
      fontSize:'2rem',
    }
}))