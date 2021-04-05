import React, { useEffect, useState } from 'react'
import { getAllLandpads } from '../../services/spaceXApi'
import { SmallCard } from "../../components"
import { Grid, Button } from '@material-ui/core'
import Loader from "react-loader-spinner"
import clsx from 'clsx'
import useStyles from '../AllLauches/styles'

const Landpads = () => {
    const [landpadData, setLandpadData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(true)
    const [hasPrevPage, setHasPrevPage] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const landpadImgArray = [
        'https://s.w-x.co/util/image/w/411spacex.jpg?v=at&w=815&h=458',
        'https://upload.wikimedia.org/wikipedia/commons/5/54/CRS-8_%2826239020092%29.jpg',
        'https://cdn.arstechnica.net/wp-content/uploads/2017/01/SpaceXmap-800x460.jpg',
        'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2014/12/asds_exposure_correction_no_water_smooth.jpg'
    ]
    const fetchAllLandpads = async (pageNum) => {
        const data =  await getAllLandpads(pageNum)
        if(data) {
            setLandpadData(data.docs)
            setTotalPages(data.totalPages)
            setPageNum(data.page)
            setHasNextPage(data.hasNextPage)
            setHasPrevPage(data.hasPrevPage)
            // console.log(landpadData,data,totalPages)
        } 
    }
    useEffect(() => {
        fetchAllLandpads()
        //eslint-disable-next-line
    },[])

    const handleNextPage = () => {
        if(hasNextPage === true && pageNum < totalPages){
            setAlertMessage('')
            fetchAllLandpads(pageNum+1)
        }else {
            setAlertMessage('This is the Last Page')
        }
    }
    const handlePreviousPage = () => {
        if(hasPrevPage === true){
            setAlertMessage('')
            fetchAllLandpads(pageNum-1)
        }else{
            setAlertMessage('This is the first Page')
        }
    }
    const classes = useStyles()
    return (
        <main className={clsx(classes.content)}>
            <h1 className={classes.title}>All LandPads</h1>
            <Grid container justify="center" spacing={4}>
                {landpadData.length > 0 ? landpadData.map((landpad) => (
                    <Grid item key={landpad.id} xs={12} sm={6} md={4} lg={3}>
                        <SmallCard 
                            images = {landpadImgArray[Math.floor(Math.random() * landpadImgArray.length)]}
                            name = {`${landpad?.full_name} - ${landpad?.region}`}
                            description = {`Status : ${landpad?.status.toUpperCase()} & ${landpad?.details}`}
                            articleLink ={landpad?.wikipedia}
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

export default Landpads
