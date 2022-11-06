import { useState } from 'react';
import { dataTwo } from './dataTwo';
import './App.css';

function AppTwo() {
  
  const [landmark, setLandmark] = useState(0);
  const {Id, name, text, picture}= dataTwo[landmark];

  const previousLandmark =() =>{
    setLandmark((landmark=>{
        landmark --;
        if(landmark<0){
            return dataTwo.length-1;
        } return landmark;
    }))
  }

  const nextLandmark = () =>{
    setLandmark((landmark =>{
        landmark++;
        if (landmark>dataTwo.length-1){
            landmark=0;
        } return landmark;
    }))
  }


  return (<div>
    <div className='container'>
      <h1>Куда сходить в этих городах?</h1>
    </div>
    <div className='container'>
    <img src={picture} width='700px' alt = 'city' />
    </div>
    <div className='container'>
      <h2>{Id} - {name}</h2>
    </div>
    <div className='container'>
      <p>{text}</p>
    </div>
    <div className='container'>
        <button className='btn-slaid' onClick={previousLandmark}>Previous</button>
        <button className='btn-slaid' onClick={nextLandmark}>Next</button>
      </div>
      </div>
   
  );
}

export default AppTwo;
