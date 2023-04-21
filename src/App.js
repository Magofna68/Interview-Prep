import React, { useState } from 'react'
import FlashcardList from './FlashcardList';
import './app.css';
import Background from './assets/Mountains.jpeg';
import Typography from "@mui/material/Typography";
import { FLASHCARD_DATA } from './data';

function App() {
  const [ flashcards, setFlashcards ] = useState([FLASHCARD_DATA])
  return (
    <>
      <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>

      <Typography
          className='typographyText'
            variant='h3'
            sx={{
              marginTop: '5%',
              fontWeight: 'bolder',
              color: 'rgb(0,200,100,85%)',
              WebkitTextStroke: '1.75px gray',
              backgroundImage: `url('https://media3.giphy.com/media/3mgtuiqA62APgXQF1z/giphy.gif?cid=ecf05e47fch83q97cukf7o8tv4f8txw491ldq4qg2g04exth&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(155,0,0,50%)',
                WebkitTextStroke: '1.75px white',
                cursor: 'arrow',
              }
            }}
          >
            Interview Preparation
          </Typography>
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

// const SAMPLE_CARDS = [
//   {
//     id: 1,
//     question: "What are the differences between Functional and Object-Oriented Programming?",
//     answer: ["Functional programming relies on mathematical functions, whereas object-oriented programming relies on classes of objects closely associated with functions."],
//     options: ['1', '2', '3', '4']
//   },
//   {
//     id: 2,
//     question: "Question 2",
//     answer: [1, 2, 3],
//     options: [
//       '',
//       '',
//       '',
//       '',
//     ]
//   },
//   {
//     id: 3,
//     question:  "Question 3",
//     answer: ['answer 3'],
//     options: [
//       '',
//       '',
//       '',
//       '',
//     ]
//   },
//   {
//     id: 4,
//     question:  "Can You Describe the Steps Involved in Software Development?",
//     answer: ['1. Planning phase -- developmental gameplan', '2. Coding and development methods', '3. Quality assurance and testing', '4. Completion and deployment'],
//     options: [
//       '',
//       '',
//       '',
//       '',
//     ]
//   },
//   {
//     id: 5,
//     question:  "Tell Me About a Software Development Project You Completed Successfully",
//     answer: ['- The type of software development project.', '- Your role in the project.', '- The outcome of the project.',],
//     options: [
//       '',
//       '',
//       '',
//       '',
//     ]
//   },
// ]

export default App;
