import React from 'react'
import '../Quiz/Quiz.css'

const Quiz = () => {

    const questions = [{
        questionTxt : "capital of india" ,
        options : [
            {answerTxt : "satna" , isCorrect : false},
            {answerTxt : "rewa" , isCorrect : false},
            {answerTxt : "delhi" , isCorrect : true},
            {answerTxt : "jabalpur" , isCorrect : false}
    ]
    },

    {
        questionTxt : "father of india" ,
        options : [
            {answerTxt : "gandhi" , isCorrect : true},
            {answerTxt : "shekhar" , isCorrect : false},
            {answerTxt : "bhagat" , isCorrect : false},
            {answerTxt : "nehru" , isCorrect : false}
    ]
    },

    {
        questionTxt : "longest river" ,
        options : [
            {answerTxt : "ganga" , isCorrect : true},
            {answerTxt : "jamuna" , isCorrect : false},
            {answerTxt : "saras" , isCorrect : false},
            {answerTxt : "all" , isCorrect : false}
    ]
    },

    ]

  return (
    <div className='container'>


        <div className="question-container">
            <h1>Question 1</h1>
            <p>Name the current prime minister of India? </p>
        </div>


        <div className="options-container">

        </div>


    </div>
  )
}

export default Quiz