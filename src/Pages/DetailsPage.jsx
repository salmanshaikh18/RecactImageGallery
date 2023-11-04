import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailsPage.css'

const DetailsPage = () => {
  const [data, setData] = useState();
  const { id } = useParams()

  const getData = async () => {
    const resp = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
    const { photo } = await resp.json();
    setData(photo)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div id="singlePhoto">
      <div className="detailsWrapper">
        <img className='detailsImage' src={data?.url} alt="" />
        <div>
          <h1 className='title'>{data?.title}</h1>
          <p className='description'>
            {data?.description}
          </p>
        </div>
      </div>

    </div>
  )
}

export default DetailsPage