import React from 'react'
import Flashcard from './Flashcard'
import './app.css';

export default function FlashcardList(props) {
  const { flashcards } = props;

  const flashCardsArray = [...flashcards];

    function getRandom(array) {
    let i = array.length -1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="background"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        maxWidth: '98vw',
        // maxWidth: '1400px',
        maxHeight: '100vh',
        // maxHeight: '1000px',
        textAlign: 'center',
        margin: '2% 2%',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
      >
      {
        getRandom(flashCardsArray[0])
          .filter((card, index) => index < 5)
          .map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} options={flashcard.options} answer={flashcard.answer} answerArray={flashcard.answerArray} />
        })
      }
      <span 
        style={{
          width: '300px',
          maxWidth: '400px',
          height: '200px',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1%',
          margin: '2%',
          color: 'black',
          flexDirection: 'column',
          overflow: 'visible',
          flexWrap: 'wrap',
        }}
      >
        <button 
          style={{
            width: '50%', 
            height: '30%', 
            alignContent:'center', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '1%',
            margin: '2%',

          }} 
          onClick={() => window.location.reload()}
          >
            Update Cards
          </button>
      </span>
    </div>
  )
}
