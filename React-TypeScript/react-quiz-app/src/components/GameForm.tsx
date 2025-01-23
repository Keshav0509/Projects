import React, { useState, ChangeEvent } from 'react';
import { Difficulty, Questions_Type } from '../Api';

export type GameFormProps = {
  difficulty: string,
  questionType: string,
  questionQuantity: string,
}

export const gameFormInput = {
  difficulty,
  questionType,
  questionQuantity
}

const GameForm = () => {
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>(Difficulty.EASY);
  const [questionType, setQuestionType] = useState<Questions_Type | undefined>(Questions_Type.ANY);
  const [questionQuantity, setQuestionQuantity] = useState<number>(5);

  const handleDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as Difficulty);
  };

  const handleQuestionType = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(e.target.value as Questions_Type);
  };

  const handleQuestionQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const validNumber = parseInt(e.target.value);
    setQuestionQuantity(validNumber);
  };

  console.log(difficulty);
  console.log(questionType);
  console.log(questionQuantity);

  return (
    <>
      <select onChange={handleDifficulty}>
        <option value=''>Select Difficulty</option>
        <option value={Difficulty.EASY}>Easy</option>
        <option value={Difficulty.MEDIUM}>Medium</option>
        <option value={Difficulty.HARD}>Hard</option>
      </select>

      <select onChange={handleQuestionType}>
        <option value=''>Select Question Type</option>
        <option value={Questions_Type.MULTIPLE}>Multiple Choice</option>
        <option value={Questions_Type.BOOLEAN}>True/False</option>
      </select>

      <input type="number" onChange={handleQuestionQuantity} placeholder="Enter number of questions" />
    </>
  );
};

export default GameForm;
