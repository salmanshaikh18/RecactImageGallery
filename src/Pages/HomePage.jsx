import React, { useEffect, useState } from 'react'
import ImageCard from '../components/ImageCard'
import './HomePage.css'

const HomePage = () => {
    const [data, setData] = useState([])
    
    const getData = async () => {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
        console.log("response: ", response)
        const { photos } = await response.json()
        setData(photos)
        console.log('photos: ', photos)
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div id="parent">
        {
            data?.map((e,i)=>{
                return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
              })
        }
    </div>
  )
}

export default HomePage