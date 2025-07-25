import React, { useState } from 'react';
import photos from '../../../data/photos.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { admin } from '../../../data/admin';
import { IconBrandInstagram } from '@tabler/icons-react';

const PhotoCard = () => {
    const [current, setCurrent] = useState(0);


    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className=" w-full h-full mx-auto flex items-center justify-center overflow-hidden rounded-2xl shadow-lg text-gray-200">
            <div className="w-full items-center justify-between">

                <a href={admin.framesByAshwin} target="_blank" rel="noreferrer" className='flex items-center gap-1 text-start text-base absolute top-3 left-3 z-20  px-3 bg-primary text-dark rounded-full '>
                    <IconBrandInstagram strokeWidth={1.5} /> Beyond the 9-5
                </a>
            </div>
            {photos.map((photo, index) => (
                <img
                    key={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === current ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full"
            >
                <ChevronRight />
            </button>

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 py-4 flex justify-center mt-4 gap-2">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoCard;
