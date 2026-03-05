export default function Albums({ songs, setCurrentSong }) {

    return (

        <div>

            <h2>New Albums</h2>

            <div className="albums">

                {songs.map(song => (

                    <div
                        className="album-card"
                        key={song.id}
                        onClick={() => setCurrentSong(song)}
                    >

                        <img src={song.cover} />

                        <h4>{song.title}</h4>

                        <p>{song.artist}</p>

                    </div>

                ))}

            </div>

        </div>

    )

}