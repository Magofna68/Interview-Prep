import React from 'react'
import Flashcard from './Flashcard'
import './app.css';

export default function FlashcardList({ flashcards }) {
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
        // background: 'url(`${https://pngtree.com/freebackground/modern-double-color-futuristic-neon-background_1181573.html}`)'
      }}
    >
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} options={flashcard.options} answer={flashcard.answer} answerArray={flashcard.answerArray} />
      })}
    </div>
  )
}
