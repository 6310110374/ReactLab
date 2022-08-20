import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  return (
    <div className='body'>
      <h1 className='h1'>Card Game</h1>
      {
        <WordCard value = {word}/>
      }
      <p>Power By 6310110374</p>
    </div>
  );
}
export default App;
 