import { useState } from 'react';
import { data } from './data';
import './App.css';
import AppTwo from './AppTwo';

function App() {
  const [cities, setCities] = useState(data);
  const [showText, setShowText] = useState(false);
 

  const removeCity = (id) =>{
    let newCity = cities.filter((city) => city.id !== id);
    setCities(newCity)
  }

  const showTextClick = (element) =>{
    element.showMore = !element.showMore;
    setShowText(!showText)
  }



  return (<div>
    <div className='container'>
      <h1>{cities.length} города, где я хочу побывать.</h1>
    </div>
    {cities.map((element =>{
      const {id, city, image, description, showMore}=element;
      return(
      <div key={id}>
        <div className='container'>
          <h2>{id}-{city}</h2>
        </div>

        <div className='container'>
          <p>{showMore ? description.substring(0,190) + '...' : description}
          <button onClick={() => {showTextClick(element)}}>{showMore ? 'Show more' : 'Show less'}</button></p>
        </div>

        <div className='container'>
          <img src={image} width='700px' alt = 'city' />
        </div>
        <div className='container'>
          <button className='btn' onClick={()=> removeCity(id)} >Remove</button> 
        </div>
      </div>  
      )
    }))}
      <div className='container'>
        <button className='btn btn-del' onClick={()=> setCities([])}>Delete all</button>
      </div>
      <br/>
      <AppTwo />
  </div>
  );
}

export default App;
