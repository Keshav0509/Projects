
import { useGameForm } from '../store/StoreGameForm';
import style from '../styles/Style.module.css'

// export type GameFormProps = {
//   difficulty: string,
//   questionType: string,
//   amount: string,
// }

const GameForm = () => {
  const difficultyArr = ['Easy', 'Medium', 'Hard'];
  const questionTypeArr = ['Any', 'Boolean', 'Multiple'];
  
  const { difficulty, handleDifficultyChange, questionType, handleQuestionType, amount, handleQuestionAmt } = useGameForm();
  
  return (
    <>
      <div>
        <div className={`${style.container}`}>
          <div>Select Question Level: </div>
          <div className={`${style.container}`}>
            {
              difficultyArr.map((level, index)=>
                <div key={index+level}>
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
        <div>
          <div>Select Question Type: </div>
          <div className={`${style.container}`}>
            {
              questionTypeArr.map((type, index)=>
                <div key={index+type}>
                <input
                    type="radio"
                    id={`${type.toLowerCase()}`}
                    value={`${type.toLowerCase()}`}
                    checked={questionType === type.toLowerCase()}
                    onChange={() => handleQuestionType(`${type.toLowerCase()}`)}
                  />
                  <label
                      htmlFor={`${type.toLowerCase()}`}>
                      {`${type} `}
                  </label>
                </div>
              )
            }
          </div>
        </div>
        <div>
          <div>Total Question: </div>
          <div className={`${style.container}`}>
            <input 
              value={amount}
              onChange={(e)=>handleQuestionAmt(e.target.value)}
              type="text" 
              placeholder='Enter A Number...' />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameForm;
