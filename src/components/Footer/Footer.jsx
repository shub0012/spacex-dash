import React from 'react'
import useStyles from '../../pages/Navbar/styles'

const Footer = () => {
    const classes = useStyles()
    return (  
            <div style={{ display:'flex', justifyContent: 'center', padding:'0.5rem'}} className={classes.glassEffect}>
                <p style={{color: '#000',fontSize:'1.2rem'}}>Email : shubhams4455@gmail.com </p>
                <div style={{marginRight:"20px"}} />
                <a style={{textDecoration: 'none', color: '#000',fontSize:'1.2rem'}} href="https://github.com/shub0012/spacex-dash" target="_blank" rel="noopener noreferrer">GitHub link for this project</a>
            </div>
    )
}

export default Footer
