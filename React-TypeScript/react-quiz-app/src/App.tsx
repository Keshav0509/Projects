import React, { useState } from "react"
import QuestionCard from "./components/QuestionCard"
// importing the api
import { fetchQuizQuestions, QuestionState, Difficulty, Questions_Type, AnswerObject } from "./Api";
// importing styles
import style from './styles/Style.module.css';
import Watch from "./components/Watch";
// importing some utils...
import { padZero } from "./utils";
const TOTAL_QUESTIONS = 5;

function App(){

  const [ loading, setLoading ] = useState<boolean>(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  const [ number, setNumber ] = useState<number>(0);
  const [ userAnswer, setUserAnswer ] = useState<AnswerObject[]>([]);
  const [ scores, setScore ] = useState<number>(0);
  const [ gameOver, setGameOver ] = useState<boolean>(true);

  async function startTrivia(){
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Questions_Type.ANY
    );

    console.log(newQuestion);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>){
    if(!gameOver){
      // user answer
      const answer = e.currentTarget.innerText;
      console.log(e);
      const correct = questions[number].correct_answer === answer;
      //add score if userAnswer is correct...
      if(correct){
       setScore((prevScore) => prevScore + 1);
      }
      console.log(correct);
      // save answer in the answer array for user answer...
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswer(prev => [...prev, answerObject] );
    }  
  }

  function nextQuestion(){
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQuestion)
    }
  }

  return (
    <main className={`${style.main}`}>
        <div className={`${style.headingContainer} ${style.container}`}>
          <h1 className={style.heading}>Quiz App <Watch/></h1>
          {gameOver || userAnswer.length === TOTAL_QUESTIONS ? <button className={`${style.btnStart}`} onClick={startTrivia}>Start</button> : null }
        </div>
      <div className={`${style.container} ${style.quizContainer}`}>
        {/* <GameForm /> */}
        {!gameOver ? <p className={`${style.score}`}>scores: {padZero(scores)}</p> : null}
        {loading && <div className={style.container}><p className={`${style.loadQuestions}`}>Loading Questions...</p><span className={style.loading}><span /><span /><span /></span></div>}
        
        {!loading && !gameOver && (
          <QuestionCard 
            question = {questions[number].question}
            answers = {questions[number].answers}
            callback = {checkAnswer}
            userAnswer = {userAnswer ? userAnswer[number] : undefined}
            questionNum = { number + 1 }
            totalQuestions = {TOTAL_QUESTIONS}
          />
        )}
        {!loading && !gameOver && userAnswer.length === number + 1 ? (
          <button className={`${style.btn} ${style.btnStart} ${style.btnNext}`} onClick={nextQuestion}>Next Question</button>
        ) : null }
      </div>
    </main>
  )
}

export default App;