import { useState } from 'react'
import './App.css'
import ImageGallery  from './ImageGallery'
import NewsList from './NewsList'
function App() {
  const [search, setSearch] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleSearchChange} required placeholder='News Search Term' type="text" id="search" name="search" value={search}></input>
          <label htmlFor="search">Enter your news search term</label>
          <button type="submit">Search</button>
        </form>
      </div>

    </>
  )
}

export default App
