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
      color: '#d54d7b',
      fontSize: '4rem',
      fontWeight: 'normal',
      textShadow: '0 1px 1px #fff',
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
}))