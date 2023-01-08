import axios from 'axios'
import { useState, useEffect } from 'react'
import HorizontalSlider from '../components/HorizontalSliders'

const Home = () => {
    const [allSongs, setAllSongs] = useState([])

    useEffect(() => {
        getAllSongs()
    }, [])


    const getAllSongs = () => {

        // url of the rest api
        const url = 'http://localhost:5000'


        // send the GET request using axios

        axios.get(url + '/song').then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setAllSongs(result.data)
            }
            else {
                alert('error occured while loading songs')
            }
        })
    }

    return (
        <div>
            <h1 className="page-title">Home</h1>
            <HorizontalSlider items={allSongs} title="All songs" />
        </div>
    )

}
export default Home;