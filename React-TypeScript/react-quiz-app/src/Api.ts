
// import { useGameForm } from "./store/StoreGameForm";
import { shuffleArray } from "./utils";


export type Question = {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum Questions_Type {
  ANY = 'any',
  MULTI = 'multiple',
  BOOLEAN = 'boolean'
}

export type Props = {
  question: string,
  answers: string[],
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: AnswerObject | undefined,
  questionNum: number,
  totalQuestions: number;
}

export type AnswerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string;
}

export const fetchQuizQuestions = async( amount: number, difficulty: Difficulty, type: Questions_Type): Promise<QuestionState[]> =>{
  
  // const {difficulty, questionAmt, questionType} = useGameForm();
  try {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}${type === Questions_Type.ANY ? '' :  `&type=${type}`}`;
    const data = await ( await fetch(endpoint)).json();
    const newData =  data.results.map((question: Question) => (
      {
        ...question, answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }
    ));
    // console.log(data);
    // console.log(newData);
    return newData;
  } catch (e) {
    alert(`${e} :(`);
    return [];
  }
} 
