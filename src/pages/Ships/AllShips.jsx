import React, { useEffect, useState } from 'react'
import { getAllShips } from '../../services/spaceXApi'
import { SmallCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from '../AllLauches/styles'


const AllShips = () => {
    const [shipData, setShipData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const fetchAllShips = async (pageNum) => {
        const data =  await getAllShips(pageNum)
        if(data) {
            setShipData(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            console.log(shipData,data,totalPages)
        } 
      }
    
    useEffect(() => {
        fetchAllShips()
        //eslint-disable-next-line
    },[])

    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllShips(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllShips(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }
    const classes = useStyles()
    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}>All Ships</h1>
            <Grid container justify="center" spacing={4}>
                {shipData.length > 0 ? shipData.map((ship) => (
                    <Grid item key={ship.id} xs={12} sm={6} md={4} lg={3}>
                        <SmallCard 
                            images = {ship?.image}
                            name = {ship?.name}
                            description = {`${ship?.name} has a mass of ${ship?.mass_lbs} kg and was built on ${ship?.year_built}. The home port for ${ship?.name} is ${ship?.home_port}. The type of the ship is ${ship?.type} and Active Status is ${ship?.active.toString().toUpperCase()}.`}
                            articleLink ={ship?.link}
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

export default AllShips
