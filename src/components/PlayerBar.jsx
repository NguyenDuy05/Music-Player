import { useRef } from "react"

function PlayerBar({ songs, currentSong, setCurrentSong }) {

    const audioRef = useRef()

    const nextSong = () => {
        setCurrentSong((currentSong + 1) % songs.length)
    }

    const prevSong = () => {
        setCurrentSong(
            currentSong === 0 ? songs.length - 1 : currentSong - 1
        )
    }

    return (

        <div className="playerbar">

            <img
                src={songs[currentSong].cover}
                className="cover"
            />

            <div>

                <h4>{songs[currentSong].title}</h4>

                <audio
                    ref={audioRef}
                    src={songs[currentSong].src}
                    controls
                    autoPlay
                />

            </div>

            <div className="controls">

                <button onClick={prevSong}>⏮</button>

                <button onClick={nextSong}>⏭</button>

            </div>

        </div>

    )

}

export default PlayerBar