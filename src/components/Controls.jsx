function Controls({ prevSong, nextSong }) {
    return (
        <div className="controls">
            <button onClick={prevSong}>⏮</button>
            <button onClick={nextSong}>⏭</button>
        </div>
    );
}

export default Controls;