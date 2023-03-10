import React, {Fragment } from 'react';
//, useState
import { ChakraProvider } from '@chakra-ui/react'
import ToDo from "./components/todo"
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import './App.css';

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;