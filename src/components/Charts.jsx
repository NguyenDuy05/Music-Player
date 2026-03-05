export default function Charts({ songs, setCurrentSong, liked, toggleLike }) {

    return (

        <div>

            <h2>Top Charts</h2>

            {songs.map(song => (

                <div className="chart-item" key={song.id}>

                    <div onClick={() => setCurrentSong(song)}>

                        {song.title}

                    </div>

                    <button onClick={() => toggleLike(song.id)}>
                        {liked.includes(song.id) ? "❤️" : "🤍"}
                    </button>

                </div>

            ))}

        </div>

    )

}