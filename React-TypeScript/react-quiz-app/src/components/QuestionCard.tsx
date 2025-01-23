import React from 'react'
import { Props } from '../Api'
import style from '../styles/Style.module.css'

const QuestionCard: React.FC<Props> = (
  {
    question,
    answer,
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
          answer.map((answer, index)=>(
            <div key={index}>
              <button
                key={index}
                disabled={userAnswer ? true : false}
                onClick={callback}
                className={style.btn}
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
