import React from 'react'
import { Props } from '../Api'
import style from '../styles/Style.module.css'

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
    <div className={`${style.questionContianer} ${style.container} ${style.glassEffect} `}>
      <p className={`${style.questConunt}`}>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}} className={style.question}/>
      <div className={`${style.btns} ${style.container} ${style.btnContainer}`}>
        {
          answers.map((answer, index)=>(
            <div key={index}>
              <button
                key={index}
                disabled={userAnswer ? true : false}
                onClick={callback}
                className={style.btn}
                dangerouslySetInnerHTML={{__html:answer}}
              >
                {/* <span dangerouslySetInnerHTML={{__html:answer}} /> */}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default QuestionCard
