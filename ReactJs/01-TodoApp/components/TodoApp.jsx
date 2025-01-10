import style from './TodoStyle.module.css';

function TodoApp(){
  return(
    <section className={style.TodoApp}>
      <header>
        <h1 className={style.heading}>Todo App</h1>
      </header>
      <section>
        <div>
          <h2 className={style.subheading}>
            Add some Task To Do:
          </h2>
        </div>
        <div>
          <div className={style.inputContainer}>
            <input type="text" placeholder="Add Task ToDo..."  className={style.taskInput}/>
            <button className={style.addTaskBtn}>
              <img src="../public/add.svg" alt="" />
              Add
            </button>
          </div>
          <div className={style.headingContainer}>
            {/* if there is no task than in list massege all task completed */}
            <span>your task shown below To Do...</span>
          </div>
          <div className={style.listContainer}>
            <ul className={style.taskList}>
                <li>
                  <div className={style.todoName}>
                    <span>1.</span>
                    <span>wake up</span>
                  </div>
                  <div className={style.todoBtnContainer}>
                    <button>
                      <img src="../public/delete.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_upward.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_downward.svg" alt="" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className={style.todoName}>
                    <span>2.</span>
                    <span>job</span>
                  </div>
                  <div className={style.todoBtnContainer}>
                    <button>
                      <img src="../public/delete.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_upward.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_downward.svg" alt="" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className={style.todoName}>
                    <span>3.</span>
                    <span>eat</span>
                  </div>
                  <div className={style.todoBtnContainer}>
                    <button>
                      <img src="../public/delete.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_upward.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_downward.svg" alt="" />
                    </button>
                  </div>
                </li>
                <li>
                  <div className={style.todoName}>
                    <span>4.</span>
                    <span>sleep</span>
                  </div>
                  <div className={style.todoBtnContainer}>
                    <button>
                      <img src="../public/delete.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_upward.svg" alt="" />
                    </button>
                    <button>
                      <img src="../public/arrow_downward.svg" alt="" />
                    </button>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TodoApp;