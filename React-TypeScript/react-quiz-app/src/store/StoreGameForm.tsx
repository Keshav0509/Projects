/*
  import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";


  export type GameFormProviderProps = {
    children: ReactNode;
  }

  export type GameContext = {
    difficulty: string | undefined,
    handleDifficultyChange: (value: string | undefined) => void;
  }

  export const gameContext = createContext<GameContext | null>(null);

  export function FormProvider({children}: GameFormProviderProps){

    const [difficulty, setDifficulty] = useState<SetStateAction<string | undefined>>(undefined);
      
    function handleDifficultyChange(value: string | undefined){
      setDifficulty(value);
    }

    return (
      <gameContext.Provider value={{
        difficulty,
        handleDifficultyChange
        }}>
        {children}
      </gameContext.Provider>
    )
  }

  export function useGameForm(){
    const gameFormConsumer = useContext(gameContext);
    if(!gameFormConsumer){
      throw new Error("useGameForm used outSide of the Provider...")
    }
    return gameFormConsumer;
  }
*/
import { createContext, ReactNode, useContext, useState } from "react";

export type GameFormProviderProps = {
  children: ReactNode;
}

export type GameContext = {
  difficulty: string | undefined;
  questionAmt: string;
  questionType: string | undefined;
  handleDifficultyChange: (value: string | undefined) => void;
  handleQuestionAmt: (value: string) => void;
  handleQuestionType: (value: string) => void;
}

export type FormObj = {
  quantity: string,
  difficulty: string,
  type: string
}

export const gameContext = createContext<GameContext | null>(null);

export function FormProvider({ children }: GameFormProviderProps) {
  const [difficulty, setDifficulty] = useState<string | undefined>(undefined);
  const [questionAmt, setQuestionAmt] = useState<string>('1');
  const [questionType, setQuestionType] = useState<string | undefined>(undefined);

  // const [ loading, setLoading ] = useState<boolean>(false);
  // const [ questions, setQuestions ] = useState<QuestionState[]>([]);
  // const [ number, setNumber ] = useState<number>(0);
  // const [ userAnswer, setUserAnswer ] = useState<AnswerObject[]>([]);
  // const [ scores, setScore ] = useState<number>(0);
  // const [ gameOver, setGameOver ] = useState<boolean>(true);

  function handleDifficultyChange(value: string | undefined) {
    setDifficulty(value);
  }

  function handleQuestionAmt(value: string): void{
    setQuestionAmt(value);
  }

  function handleQuestionType(value: string): void{
    setQuestionType(value);
  }

  return (
    <gameContext.Provider value={{
      difficulty,
      questionAmt,
      questionType,
      handleDifficultyChange,
      handleQuestionAmt,
      handleQuestionType
      }}>
      {children}
    </gameContext.Provider>
  );
}

export function useGameForm() {
  const gameFormConsumer = useContext(gameContext);
  if (!gameFormConsumer) {
    throw new Error("useGameForm must be used within the Provider...");
  }
  return gameFormConsumer;
}
