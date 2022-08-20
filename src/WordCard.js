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

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset,next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
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
        </div>
    ) 
} 