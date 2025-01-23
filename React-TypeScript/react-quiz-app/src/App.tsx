import React, { useState } from "react"
import QuestionCard from "./components/QuestionCard"
// importing the api
import { fetchQuizQuestions, QuestionState, Difficulty, Questions_Type, AnswerObject } from "./Api";
// import GameForm from "./components/GameForm";
// import { GameFormProps } from "./components/GameForm"; 

const TOTAL_QUESTIONS = 5;
// const { question, questionType, questionQuantity } = GameFormProps;


function App() {

  const [ loading, setLoading ] = useState<boolean>(false);
  const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  const [ number, setNumber ] = useState<number>(0);
  const [ userAnswer, setUserAnswer ] = useState<AnswerObject[]>([]);
  const [ scores, setScore ] = useState<number>(0);
  const [ gameOver, setGameOver ] = useState<boolean>(true);

  console.log( questions );

  async function startTrivia(){
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Questions_Type.ANY
    );

    // console.log(newQuestion);
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  function checkAnswer(e: React.MouseEvent<HTMLButtonElement>){
    if(!gameOver){
      // user answer
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      //add score if userAnswer is correct...
      if(correct) setScore((prevScore) => prevScore + 1);
      // save answer in the answer array for user answer...
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswer(prev => [...prev, answerObject] );
      // console.log(e);
      // console.log(userAnswer);
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
    <>
      <h1>Start Quiz</h1>
      {/* <GameForm /> */}
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? <button onClick={startTrivia}>Start</button> : null }
      {!gameOver ? <p>scores: {scores}</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard 
          question = {questions[number].question}
          answers = {questions[number].answers}
          callback = {checkAnswer}
          userAnswer = {userAnswer ? userAnswer[number] : undefined}
          questionNum = {number+1}
          totalQuestions = {TOTAL_QUESTIONS}
        />
      )}
      {!loading && !gameOver && userAnswer.length === number + 1 ? (
        <button onClick={nextQuestion}>Next Question</button>
      ) : null }
      
    </>
  )
}

export default App;