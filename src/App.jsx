import React from 'react'
import './wordcounter.css';
import { useState } from 'react';

const App = () => {


  const [text, setText] = useState("");
  const [characterCount, setCharactercount] = useState(0);
  const [sentenceCount, setsentencecount] = useState(0);

  const handleTextChange = (e) => {

    const inputText = e.target.value
    setText(inputText);

    // calculate character

    // const characters = inputText.replace(/\s+/g, '');
    const characters = inputText.replace(/\s+/g, '');


    setCharactercount(characters.length);

    // calculate sentence

    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0);
    setsentencecount(sentences.length);
  }

  const resetCounter = () => {
    setText("");
    setCharactercount(0);
    setsentencecount(0);
  }

  return (
    <div className='container'>
      <div className="Container_middle">
        <div className="right">
          <textarea className='text-input'
            value={text} onChange={handleTextChange}
            rows="6" placeholder='Type or paste your text here'></textarea>
          <div className="button_div">
            <button className='button-100' onClick={resetCounter}>Delete</button>
          </div>

        </div>
        {/* left */}
        <div className="left">
          <div className="Counter-middle-para">
            <h1>Results</h1>
          </div>

          <div className="flex-container">
            <div class="flex-container">
              <p>
                <strong>
                  Characters:
                </strong>
                {characterCount}
              </p>
            </div>

            {/* sentence counting */}

            <div>
              <p>
                <strong>
                  Sentences:
                </strong>
                {sentenceCount}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default App
