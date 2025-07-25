import React, { useEffect, useRef, useState } from 'react'
import songData from "../../../data/music.json"
import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerTrackNextFilled, IconPlayerTrackPrevFilled } from '@tabler/icons-react'
import { Disc3 } from 'lucide-react';

const MusicCard = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    const current = songData[currentIdx];

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    const playNext = () => {
        const next = (currentIdx + 1) % songData.length;
        setCurrentIdx(next);
    }

    const playPrev = () => {
        const prev = (currentIdx - 1 + songData.length) % songData.length;
        setCurrentIdx(prev);
    }

    const handleSeek = (e) => {
        const value = parseFloat(e.target.value);
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const setMeta = () => setDuration(audio.duration || 0);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", setMeta);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", setMeta);
        }

    }, [currentIdx]);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [currentIdx, isPlaying]);

    return (
        <div className="group  w-full h-full flex flex-col items-center justify-center">
            <h3 className='text-base  bg-primary flex items-center gap-1 text-dark absolute top-3 left-3 px-3 py-1 rounded-full z-10'>
                <Disc3 strokeWidth={1.5} size={20} /> Currently Jamming To
            </h3>
            <img src={current.cover} alt={current.title} className={`w-full h-full object-cover transition-all duration-500 ${isPlaying ? 'animate-vibe saturate-100' : "saturate-0"}`} />
            <div className="flex flex-col items-center justify-center gap-2 w-full absolute bottom-0 bg-gradient-to-t from-black py-3">
                <div className="w-full flex flex-col items-start justify-center px-4 text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 group-active:opacity-100">
                    <p className='text-xl font-medium'>{current.title}</p>
                    <p className=''>{current.artist}</p>
                    <input
                        type="range"
                        name="range"
                        id="range"
                        min={0}
                        max={duration || 0}
                        value={currentTime}
                        onChange={handleSeek}
                        className='w-full accent-gray-200'
                    />
                    <div className="flex items-center justify-between w-full">
                        <span> {formatTime(currentTime)} </span>
                        <span> {formatTime(duration)} </span>
                    </div>
                </div>
                <div className="flex items-center justify-evenly w-full">
                    <button
                        type="button"
                        onClick={playPrev}
                        className='text-gray-200 rounded-full  cursor-pointer active:translate-y-0.5 transition duration-300'
                    >
                        <IconPlayerTrackPrevFilled size={32} />
                    </button>
                    <button
                        type="button"
                        onClick={togglePlay}
                        className='text-gray-200 rounded-full  cursor-pointer active:translate-y-0.5 transition duration-300'
                    >
                        {isPlaying ? <IconPlayerPauseFilled size={32} /> : <IconPlayerPlayFilled size={32} />}
                    </button>
                    <button
                        type="button"
                        onClick={playNext}
                        className='text-gray-200 rounded-full  cursor-pointer active:translate-y-1 transition duration-300'
                    >
                        <IconPlayerTrackNextFilled size={32} />
                    </button>
                </div>
            </div>
            <audio
                ref={audioRef}
                src={current.src}
                onEnded={playNext}
            />
        </div>
    )
}

export default MusicCard;
