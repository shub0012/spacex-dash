import React, { useEffect, useState } from 'react'
import { getAllLaunchpads } from '../../services/spaceXApi'
import { SmallCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from '../AllLauches/styles'

const Launchpads = () => {
    const [launchpadData, setLaunchpadData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const launchpadImgArray = [
        'https://cdn.mos.cms.futurecdn.net/87oRsc2tLRDNtqmKyu4KoF.jpg',
        'https://cdn.geekwire.com/wp-content/uploads/2020/05/20200530_SpaceX_Launch_59-630x450.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/d/d4/Launch_pad_40_awaiting_Falcon_9_rocket.jpg',
        'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2019/06/D91bunNUEAAaARr.jpeg'
    ]
    const fetchAllLaunchpads = async (pageNum) => {
        const data =  await getAllLaunchpads(pageNum)
        if(data) {
            setLaunchpadData(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            // console.log(launchpadData,data,totalPages)
        } 
      }
    
    useEffect(() => {
        fetchAllLaunchpads()
        //eslint-disable-next-line
    },[])

    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllLaunchpads(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllLaunchpads(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }
    const classes = useStyles()

    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}>All Launchpads</h1>
            <Grid container justify="center" spacing={4}>
                {launchpadData.length > 0 ? launchpadData.map((launchpad) => (
                    <Grid item key={launchpad.id} xs={12} sm={6} md={4} lg={3}>
                        <SmallCard 
                            images = {launchpadImgArray[Math.floor(Math.random() * launchpadImgArray.length)]}
                            name = {launchpad?.full_name}
                            description = {`Status : ${launchpad?.status} & ${launchpad?.details}`}
                            articleLink = "https://en.wikipedia.org/wiki/SpaceX_launch_facilities"
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

export default Launchpads
