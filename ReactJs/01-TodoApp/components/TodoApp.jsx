import style from './TodoStyle.module.css';

function TodoApp(){

  return(
    <section className={style.TodoApp}>
      <header>
        <h1 className={style.heading}>Todo App</h1>
      </header>
      <section className={style.todoContianer}>
        <div>
          <h2 className={style.subheading}>
            Add some Task To Do:
          </h2>
        </div>
        <div>
          <div className={style.inputContainer}>
            <input type="text" placeholder="Add Task ToDo..."  className={style.taskInput}/>
            <button className={style.addTaskBtn}>
              {/* <img src="../public/add.svg" alt="" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
              Add
            </button>
            <span>done</span>
          </div>
          <div className={style.headingContainer}>
            {/* if there is no task than in list massege all task completed */}
            <span>your task shown below To Do...</span>
          </div>
          <div className={style.listContainer}>
            <ul className={style.taskList}>
                <li>
                  <div className={style.todoNameContainer}>
                    <span className={style.todoCount}>1.</span>
                    <span className={style.todoName}>wake up</span>
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