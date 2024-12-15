
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import NavBar from './Data/NavBar/NavBar';
import Buttoms from './Data/Buttoms/Buttoms';
import Persons from './Data/Persons/Persons';
import { Data } from './Data/Data';

function App() {
  const [item , setItemData] = useState(Data)
// get all categories

  const allCatogeroy = ['all',...new Set(item.map((i)=>i.kind ))]
  console.log(allCatogeroy);
  
  // search
  const filterSearch =
(word)=>{
  if(word !== ''){
    const newARR = item.filter(item=>item.title === word)
    setItemData(newARR)
  }
}
  console.log(filterSearch);

  const filterARR = (cat)=>{
    if(cat === 'all'){
      setItemData(Data)
    }
    else{
      const newARR = item.filter(item=>item.kind === cat)
      setItemData(newARR)
    }
  
  }
return (
<>
<NavBar filterSearch={filterSearch}/>;
<h1 className='key-word text-center '> Food Menu</h1>
<Buttoms filterARR={filterARR} allCatogeroy={allCatogeroy} />
<Persons data={item}/>
</>
  )
}

export default App
