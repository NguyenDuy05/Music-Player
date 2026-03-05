import { useState } from "react"

import songs from "./data/songs"

import Sidebar from "./components/Sidebar"
import Albums from "./components/Albums"
import Charts from "./components/Charts"
import MusicPlayer from "./components/MusicPlayer"
import SearchBar from "./components/SearchBar"

import "./App.css"

function App() {

  const [currentSong, setCurrentSong] = useState(songs[0])
  const [index, setIndex] = useState(0)
  const [search, setSearch] = useState("")
  const [liked, setLiked] = useState([])

  const nextSong = () => {
    const i = (index + 1) % songs.length
    setIndex(i)
    setCurrentSong(songs[i])
  }

  const prevSong = () => {
    const i = (index - 1 + songs.length) % songs.length
    setIndex(i)
    setCurrentSong(songs[i])
  }

  const toggleLike = (id) => {

    if (liked.includes(id)) {
      setLiked(liked.filter(x => x !== id))
    } else {
      setLiked([...liked, id])
    }

  }

  const removeVietnamese = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  }

  const filtered = songs.filter(song =>
    removeVietnamese(song.title).includes(removeVietnamese(search))
  )

  return (

    <div className="app">

      <Sidebar />

      <div className="main">

        <SearchBar search={search} setSearch={setSearch} />

        <Albums songs={filtered} setCurrentSong={setCurrentSong} />

        <Charts
          songs={filtered}
          setCurrentSong={setCurrentSong}
          liked={liked}
          toggleLike={toggleLike}
        />

      </div>

      <MusicPlayer
        song={currentSong}
        nextSong={nextSong}
        prevSong={prevSong}
      />

    </div>

  )

}

export default App