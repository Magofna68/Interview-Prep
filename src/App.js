import React, { useState } from 'react'
import FlashcardList from './FlashcardList';
import './app.css';
import Background from './assets/Mountains.jpeg';

function App() {
  const [ flashcards, setFlashcards ] = useState(SAMPLE_CARDS)
  return (
    <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: "What are the differences between Functional and Object-Oriented Programming?",
    answer: ["Functional programming relies on mathematical functions, whereas object-oriented programming relies on classes of objects closely associated with functions."],
    options: ['1', '2', '3', '4']
  },
  {
    id: 2,
    question: "Question 2",
    answer: [1, 2, 3],
    options: [
      '',
      '',
      '',
      '',
    ]
  },
  {
    id: 3,
    question:  "Question 3",
    answer: ['answer 3'],
    options: [
      '',
      '',
      '',
      '',
    ]
  },
  {
    id: 4,
    question:  "Can You Describe the Steps Involved in Software Development?",
    answer: ['1. Planning phase -- developmental gameplan', '2. Coding and development methods', '3. Quality assurance and testing', '4. Completion and deployment'],
    options: [
      '',
      '',
      '',
      '',
    ]
  },
  {
    id: 5,
    question:  "Tell Me About a Software Development Project You Completed Successfully",
    answer: ['- The type of software development project.', '- Your role in the project.', '- The outcome of the project.',],
    options: [
      '',
      '',
      '',
      '',
    ]
  },
]

export default App;
