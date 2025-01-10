import style from './TodoStyle.module.css';

function TodoApp(){
  return(
    <section>
      <header>
        <h1>Todo App</h1>
      </header>
      <section>
        <div>
          <h2>
            Add some Task To Do:
          </h2>
        </div>
        <div>
          <div className="inputContainer">
            <input type="text" placeholder="Add Task ToDo..." />
            <button className="addTask">Add</button>
          </div>
          <div className="headingContainer">
            {/* if there is no task than in list massege all task completed */}
            <span>your task shown below To Do...</span>
          </div>
          <div className="listContainer">
            todo list container
          </div>
        </div>
      </section>
    </section>
  );
}

export default TodoApp;