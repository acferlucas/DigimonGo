import {useState , useEffect, FormEvent} from 'react';
import { Header } from './components/header/index'
import { Digimon } from './components/digimon/index'
import './global.scss'

type Digimon = {
  name: string
  img: string
  level : string
}

function App() {
  
  const [digimons,setDigimons] = useState<Digimon[]>([]);
  const [filteredDigimons,setFilteredDigimons] = useState<Digimon[]>([]);
  const [name,setName] = useState('')

  useEffect(() => {
    
    async function getDigimons(){
      const response = await fetch('https://digimon-api.vercel.app/api/digimon')
      const data = await response.json()

      setDigimons(data)

    }
    getDigimons()
  },[]);

  function handleSearch(){
    
    if(name.trim() == ''){
      
      setFilteredDigimons([])
      return
    }

    const filteredDigimons = digimons.filter(
        digimon => digimon.name.toLowerCase().includes(name)
      )
      setFilteredDigimons(filteredDigimons)
      console.log(filteredDigimons)
  }
  
  function handleRandom(){
    
    setFilteredDigimons(digimons)
  }



  return (
    <>
    <Header />
    <main>
      <h1>Escolha seu Digimon</h1>
      <div className="input-area">
        <input type="text" placeholder="Selecione um digimon" onChange={event => setName(event.target.value)} value={name}/>
        <button id="search-button" onClick={handleSearch}>Go</button>
        <button id="random-button" onClick={handleRandom}>Random</button>
      </div>
    </main>
    <footer className="footer">
      <div>
        {filteredDigimons.map(digimon => <Digimon digimon={digimon}/>)}
      </div>
    </footer>
    </>
  )
}

export default App;
