import React from 'react'
import Flashcard from './Flashcard'

export default function FlashcardList({ flashcards }) {
  return (
    <div 
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
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} options={flashcard.options}/>
      })}
    </div>
  )
}
