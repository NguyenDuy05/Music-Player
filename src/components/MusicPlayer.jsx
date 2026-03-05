import { useRef, useState, useEffect } from "react"
import ProgressBar from "./ProgressBar"

export default function MusicPlayer({ song, nextSong, prevSong }) {

    const audioRef = useRef()

    const [time, setTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {

        audioRef.current.load()

    }, [song])

    const updateTime = () => {
        setTime(audioRef.current.currentTime)
        setDuration(audioRef.current.duration)
    }

    const changeTime = (e) => {
        audioRef.current.currentTime = e.target.value
        setTime(e.target.value)
    }

    return (

        <div className="player">

            <div className="player-left">

                <img src={song.cover} width="60" />

                <div>

                    <div>{song.title}</div>
                    <div>{song.artist}</div>

                </div>

            </div>

            <div className="player-center">

                <button onClick={prevSong}>⏮</button>

                <audio
                    ref={audioRef}
                    src={song.url}
                    controls
                    onTimeUpdate={updateTime}
                />

                <button onClick={nextSong}>⏭</button>

            </div>

            <div className="progress">

                <ProgressBar
                    currentTime={time}
                    duration={duration}
                    onChange={changeTime}
                />

            </div>

        </div>

    )

}