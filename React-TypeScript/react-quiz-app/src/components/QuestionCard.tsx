import React from 'react'
import { Props } from '../Api'

const QuestionCard: React.FC<Props> = (
  {
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions
  }) => {

  return (
    <div>
      <p>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}} />
      <div>
        {
          answers.map((answer, index)=>(
            <div key={index}>
              <button
                key={questionNum}
                disabled={userAnswer ? true : false}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{__html:answer}} />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard
