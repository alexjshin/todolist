import React, {Fragment, useState} from 'react';
//, useState
import { ChakraProvider } from '@chakra-ui/react'
import ToDo from "./components/todo"
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import './App.css';
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const taskList = props.tasks.map((task) => (
    <ToDo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  return (
    <div className="ToDoapp stack-large">
      <h1>ToDoMatic</h1>
      <Form addTask = {addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="ToDo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
