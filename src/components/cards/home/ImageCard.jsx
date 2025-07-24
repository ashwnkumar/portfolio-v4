import React from 'react'
import { admin } from '../../../data/admin'

const ImageCard = () => {
    return (
        <div className="w-48 h-48 rounded-full overflow-hidden ">
            <img src={admin.homeImage} alt="" className="w-full-h-full group-hover:scale-110 transition-all duration-500" />
        </div>
    )
}

export default ImageCard