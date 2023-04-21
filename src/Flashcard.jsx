import React, { useEffect, useState } from 'react';
import './app.css';

export default function Flashcard({ flashcard }) {
  const [showAnswer, setShowAnswer ] = useState(false);
  const [ showHint, setShowHint ] = useState(false);

  const handleShowAnswer = () => {
    console.log("timeout started")
    setShowAnswer(true)
    setTimeout(() => {
      // console.log('timeout hit')
      setShowAnswer(false);
    }, 3500)
  }

  const handleShowHint = () => {
    setShowHint(true);
    setShowAnswer(false)
    setTimeout(()=> {
      setShowHint(false);
    }, 5000)
  }

  useEffect(() => {
    // console.log("showAnswer: ", showAnswer)
    if (showAnswer === true && showHint === true) {
      setShowAnswer(false);
    }
  }, [showAnswer])

  return (
    <div 
      className='clickable'
      onClick={() => handleShowAnswer()}
      key={flashcard.key}
      style={{
        width: '300px',
        maxWidth: '400px',
        height: '200px',
        border: 'solid black .5px',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        margin: '2%',
        backgroundColor: '#fad1d1',
        color: 'black',
        boxShadow: '5px 5px 5px red',
        flexDirection: 'column',
        overflow: 'visible',
        flexWrap: 'wrap',
        
      }}
    >
      {
        showHint === true && showAnswer === false ? 

          flashcard.hint?.map(hint => (
              <p style={{ fontSize: '12px', flexDirection: 'row'}} key={hint.id}>{hint}</p>
          ))

        :
          showHint === false && showAnswer === false ?

          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', overflow: 'hidden', wordWrap: 'break-word' }}>
            <div className='question' style={{ fontSize: '1rem'}}>{flashcard.question}</div>
            <span style={{
              // display: 'flex',
              // alignSelf: 'end',
              // justifyContent: 'right',
              // alignContent: 'right',
              // alignItems: 'baseline',
              position: 'fixed',
              bottom: '1%',
              right: '1%',
              width: '50px',
              backgroundColor: 'orange',
            }}>
              <button onClick={()=> handleShowHint()} style={{ width: '100%',}}>HINT</button>
            </span>
            </div>
        :
          showAnswer === true && showHint === true ?
          flashcard.answer?.map(answer => (
          <div>
            <ul style={{margin: '2%', padding: '1%'}}>{answer}</ul>
          </div>
          ))
        :
            showAnswer === true ?
          // <div style={{}} className='answerArray'>
            flashcard.answer?.map(answer => (
            <div>
              <ul style={{margin: '2%', padding: '1%'}}>{answer}</ul>
            </div>
          ))

        :

        showAnswer === true && showHint === true ?
          flashcard.answer?.map(answer => (
          <div>
            <ul style={{margin: '2%', padding: '1%'}}>{answer}</ul>
          </div>
        ))
        :
            <h1>REWORK ternary</h1>

      }
    </div>
  )
}
