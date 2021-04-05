import React, { useEffect, useState } from 'react'
import { getAllCrew } from '../../services/spaceXApi'
import { SmallCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from '../AllLauches/styles'

const Crew = () => {
    const [crewData, setCrewData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const fetchAllCrew = async (pageNum) => {
        const data =  await getAllCrew(pageNum)
        if(data) {
            setCrewData(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            // console.log(data,totalPages)
        } 
      }
    
    useEffect(() => {
        fetchAllCrew()
        //eslint-disable-next-line
    },[])

    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllCrew(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllCrew(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }
    const classes = useStyles()

    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}>All Crew</h1>
            <Grid container justify="center" spacing={4}>
                {crewData.length > 0 ? crewData.map((crew) => (
                    <Grid item key={crew.id} xs={12} sm={6} md={4} lg={3}>
                        <SmallCard 
                            images = {crew?.image}
                            name = {crew?.name}
                            description = {`${crew?.name} is an ${crew?.status} Crew Member. ${crew?.name} is from ${crew?.agency} and currently working with SpaceX `}
                            articleLink ={crew?.wikipedia}
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

export default Crew
