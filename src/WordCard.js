import React, { useState } from 'react';
import _, { attempt } from 'lodash';

import CharacterCard from './CharacterCard';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){
    
    const [state, setState] = useState(prepareStateFromWord(props.value))
    const [charSelect, setCharSelect ] = useState([])

    const activationHandler = c => {
        console.log(`${c} has been activeted`)

        let guess = state.guess + c
        setState({...state, guess})
        setCharSelect([...charSelect, c])

    }
        const checkWord = () => {
            if(state.guess == state.word){
                setState({...state, completed: true})
                alert('yeah!')
            }else{
                alert('Reset, Next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                setCharSelect([])
            }
        }
        const clearWord = () => {
            setState({...state, guess: '', attempt: state.attempt + 1})
            setCharSelect([])
        }

    return (
        <div> 
            <div>
                {
                    state.chars.map((c, i)=> 
                        <CharacterCard value ={c} key = {i} activationHandler = {activationHandler} attempt={state.attempt}/>
                    )
                }
            </div>
            <div>
                <div className='text_head'> YOUR WORD </div>
            </div> 
            {
                charSelect.map((c, i) =>
                    <CharacterCard value = {c} key = {i} />
                )
            }
            <div className='button'>
                <p></p>
                <button onClick={checkWord}>Check</button>
            </div>
        </div>
    ) 
}