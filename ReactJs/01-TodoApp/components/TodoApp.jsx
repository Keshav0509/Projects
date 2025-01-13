import { useState } from 'react';
import style from './TodoStyle.module.css';

function TodoApp(){
  const [tasks, setTask] = useState(["wake up", "job", "eate", "sleep"]);
  const[newTask, setNewTask] = useState();
  
  function handleInputChanges(e){
    setNewTask(e.target.value)
  }
  function handleAddNewTask(){
    if(newTask.trim() !== ""){
      setTask(t=> [...t, newTask]);
      setNewTask("");
    }
    else
    {
      alert("no task");
    }
  }
  function handleRemoveTask(index){
    const updatedTask = tasks.filter((_,i)=> i !== index);
    setTask(updatedTask);
  }
  function handleMoveUp(index){
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
      setTask(updatedTask);
    }
  }
  function handleMoveDown(index){
    if(index < tasks.length - 1){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  }


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
            <input
             type="text"
             placeholder="Add Task ToDo..."
             className={style.taskInput}
             onChange={handleInputChanges}
             value={newTask}
             />
            <button 
            onClick={handleAddNewTask}
            className={style.addTaskBtn}>
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
                {
                  tasks.map((task, index)=>
                    <li key={index}>
                      <div className={style.todoNameContainer}>
                        <span className={style.todoCount}>{index+1}.</span>
                        <span className={style.todoName}>{task}</span>
                      </div>
                      <div className={style.todoBtnContainer}>
                        <button onClick={()=>handleRemoveTask(index)}>
                          <img src="../public/delete.svg" alt="" />
                        </button>
                        <button onClick={()=>handleMoveUp(index)}>
                          <img src="../public/arrow_upward.svg" alt="" />
                        </button>
                        <button onClick={()=>handleMoveDown(index)}>
                          <img src="../public/arrow_downward.svg" alt="" />
                        </button>
                      </div>
                    </li>
                  )
                }
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default TodoApp;