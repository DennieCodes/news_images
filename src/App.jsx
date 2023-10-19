import { useState } from 'react'
import ImageGallery from './ImageGallery';
import NewsList from './NewsList';
import './App.css'
function App() {

  const [search, setSearch] = useState("")
  const [displayResults, setDisplayResults] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisplayResults(true);
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input onChange={handleSearchChange} required placeholder='News Search Term' type="text" id="search" name="search" value={search}></input>
          <label htmlFor="search">Enter your news search term</label>
          <button type="submit">Search</button>
        </form>
      </div>

      { displayResults ?
       ( <div>
          < NewsList query={search} />
          < ImageGallery query={search} />
        </div>

       ) : (<></>)
      }
    </>
  )
}

export default App
