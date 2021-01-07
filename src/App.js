import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {
  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')

  // useEffect(()=>{
  //   const fetchItems=async()=>{
  //     const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
  //     setItems(result.data)
  //     setIsLoading(false)
  //   }
  //   fetchItems()
  // },[query])

  useEffect(()=>{
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res=>{
      setItems(res.data)
      setIsLoading(false)
    })
    .catch(err=>{
      console.log(err)
    })
    },[query])

  return (
    <div className="App">
        <Header/>
        <Search getQuery={q=>setQuery(q)}/>
        <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;