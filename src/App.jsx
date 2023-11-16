import { useEffect, useState } from 'react';
import PokeApi from './components/pokeAPI';
import './App.css';

function App() {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${PokeApi}api/v2/pokemon`);
        const data = await response.json();
        setPokeData(data);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching poke data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        
      </div>
      
    </>
  )
}

export default App
