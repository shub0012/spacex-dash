import React, { useEffect, useState } from 'react'
import { getAllRockets } from '../../services/spaceXApi'
import { SmallCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from '../AllLauches/styles'

const Rocket = () => {
    const [rocketData, setRocketata] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const fetchAllRockets = async (pageNum) => {
        const data =  await getAllRockets(pageNum)
        if(data) {
            setRocketata(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            // console.log(rocketData,data,totalPages)
        } 
      }
    
    useEffect(() => {
        fetchAllRockets()
        //eslint-disable-next-line
    },[])

    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllRockets(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllRockets(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }
    const classes = useStyles()
    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}>All Rockets</h1>
            <Grid container justify="center" spacing={4}>
                {rocketData.length > 0 ? rocketData.map((rocket) => (
                    <Grid item key={rocket.id} xs={12} sm={6} md={4} lg={3}>
                        <SmallCard 
                            images = {rocket?.flickr_images[0]}
                            name = {rocket?.name}
                            description = {rocket?.description}
                            articleLink ={rocket?.wikipedia}
                        />
                    </Grid>
                )) : <Loader
                        type="TailSpin"
                        color="#000"
                        height={400}
                        width={300}
                        
                    /> 
                }
                
            </Grid>
            <div className={classes.alertMessage}>
                {alertMessage}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '2.5rem'}}>
                <Button variant="contained" color="secondary" onClick={() => handlePreviousPage()} style={{padding:'0.7rem'}}>Previous Page</Button>
                <Button variant="contained" color="primary" onClick={() => handleNextPage()} style={{padding:'0.7rem'}}>Next Page</Button>
            </div>
        </main>
    )
}

export default Rocket
