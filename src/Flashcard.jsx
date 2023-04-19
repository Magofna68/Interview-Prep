import React, { useEffect, useState } from 'react';
import './app.css';

export default function Flashcard({ flashcard }) {
  const [showAnswer, setShowAnswer ] = useState(false);

  const handleShowAnswer = () => {
    // console.log("timeout started")
    setShowAnswer(!showAnswer)
    setTimeout(() => {
      // console.log('timeout hit')
      setShowAnswer(false);
    }, 35000)
  }

  useEffect(() => {
    // console.log("showAnswer: ", showAnswer)
  }, [showAnswer])

  return (
    <div 
      className='clickable'
      onClick={handleShowAnswer}
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
        showAnswer === false 
        ?
        <>
        <div className='question'>{flashcard.question}</div>
          {flashcard.options?.map(option => (
            <div key={option.id} style={{ width: '90%', height: '15%', display: 'flex',}}>
              <p>{option}</p>
            </div>
          ))}
        </>
        :
      //   null
      // }
      //   {
          flashcard.answerArray === []
          ?
          <div style={{ color: 'white'}} className='answer'>{flashcard.answer}</div>
          :
          <div style={{}} className='answerArray'>{flashcard.answerArray?.map(answer => (
            <div>
              <ul style={{margin: '2%', padding: '1%'}}>{answer}</ul>
            </div>
          ))}
          </div>
      }
    </div>
  )
}
