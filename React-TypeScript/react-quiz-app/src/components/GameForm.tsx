// import { useState, SetStateAction } from 'react';
import { useGameForm } from '../store/StoreGameForm';
// import { Difficulty, Questions_Type } from '../Api';
import style from '../styles/Style.module.css'

export type GameFormProps = {
  difficulty: string,
  questionType: string,
  questionQuantity: string,
}

const GameForm = () => {
  const difficultyArr = ['Easy', 'Medium', 'Hard'];
  
  const { difficulty, handleDifficultyChange } = useGameForm();
  

  return (
    <>
      <div>
        <div className={`${style.container}`}>Select Question Level: </div>
        <div className={`${style.container}`}>
          {
            difficultyArr.map((level, index)=>
              <div key={index}>
              <input
                  type="radio"
                  id={`${level.toLowerCase()}`}
                  value={`${level.toLowerCase()}`}
                  checked={difficulty === level.toLowerCase()}
                  onChange={() => handleDifficultyChange(`${level.toLowerCase()}`)}
                />
                <label
                    htmlFor={`${level.toLowerCase()}`}>
                    {`${level} `}
                </label>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default GameForm;
