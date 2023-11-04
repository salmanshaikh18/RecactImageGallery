import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageCard.css'

const ImageCard = ({ imageUrl, id }) => {
    const navigate = useNavigate()

    const redirectToDetailsPage = () => {
        navigate(`/details/${id}`)
    }

    return (
        <div className='box'>
            <div className="imgBox">
                <img className='image' src={imageUrl} alt="image" onClick={redirectToDetailsPage} />
            </div>

        </div>
    )
}

export default ImageCard