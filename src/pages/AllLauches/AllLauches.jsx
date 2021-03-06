import React, { useEffect, useState } from 'react'
import { getAllLaunches } from '../../services/spaceXApi'
import { ShowCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from './styles'

const AllLauches = () => {
    const [lauchesData, setLaunchesData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const fetchAllLaunches = async (pageNum) => {
        const data =  await getAllLaunches(pageNum)
        if(data) {
            setLaunchesData(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            // console.log(lauchesData,data,totalPages)
        }
      }

    useEffect(() => {
        fetchAllLaunches()
        //eslint-disable-next-line
    },[])
    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllLaunches(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllLaunches(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }

    const classes = useStyles()

    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}> All Launches</h1>
            <Grid container justify="center" spacing={4}>
                {lauchesData.length > 0 ? lauchesData.map((launch) => (
                    <Grid item key={launch.id} xs={12} sm={6} md={4} lg={3}>
                        <ShowCard 
                            name={launch?.name}
                            images={launch?.links?.patch.small}
                            launchDate={launch?.date_utc}
                            youtubeLink={launch?.links?.webcast}
                            wikiLink={launch?.links?.wikipedia}
                            articleLink={launch?.links?.article}
                            rokect={launch?.rocket?.name}
                            orbit={launch?.payloads[0]?.orbit}
                            launchpad={launch?.launchpad?.name}
                            upcoming={launch?.upcoming}
                            success={launch?.success}
                            launchDetails={launch?.details}
                            flightNumber={launch?.flight_number}
                            manufacturer={launch?.payloads[0]?.manufacturers[0]}
                            nationality={launch?.payloads[0]?.nationalities[0]}
                            payloadType={launch?.payloads[0]?.type}
                            numOfLaunches={launch?.launchpad?.launches.length}
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

export default AllLauches
