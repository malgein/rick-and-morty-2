import React, {useEffect, useState} from 'react'
import CharacterList from './components/CharacterList';
import './App.css';



function App() {
  const [loading, setLoading]= useState(true)
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() =>  {
    const fetchData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    const data = await response.json() 
    setCharacters(data.results)
    setLoading(false)
  }
    
    fetchData()
  }, [page])

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <header className="">
        {
          page>1 ? (
          <div>
            <button  className="button-2" onClick={()=> setPage(page-1)}>Page: {page-1}</button>
            <button className="button-1" onClick={()=> setPage(page +1)}>Page {page+1}</button>
            <p>Page: {page}</p>
            <CharacterList loading={loading} characters={characters} />
          </div>) : (
            <div>
            <button className="button-1" onClick={()=> setPage(page +1)}>Page {page+1}</button>
            <p>Page: {page}</p>
            <CharacterList loading={loading} characters={characters} />
          </div>
          )
        }	
        </header>
    </div>
  )
  }

export default App
