import { createContext, ReactNode, useContext, useState } from "react";

export type GameFormProviderProps = {
  children: ReactNode;
}

export type GameContext = {
  difficulty: string;
  amount: number | null;
  questionType: string;
  handleDifficultyChange: (value: string) => void;
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
  const [difficulty, setDifficulty] = useState<string>('easy');
  const [amount, setAmount] = useState<number | null>(null);
  const [questionType, setQuestionType] = useState<string>('any');

  function handleDifficultyChange(value: string) {
    setDifficulty(value);
  }
  function handleQuestionAmt(value: string): void{
    const newAmt = parseInt(value);
    if(newAmt){
      setAmount(newAmt);
    }else{
      setAmount(null);
    }
  }
  function handleQuestionType(value: string): void{
    setQuestionType(value);
  }

  return (
    <gameContext.Provider value={{
      difficulty,
      amount,
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
