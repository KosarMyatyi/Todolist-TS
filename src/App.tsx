import React from 'react';
import './App.css';
import { TasksType, Todolist } from './Todolist';

function App() {

  let tasks1: Array<TasksType> = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React&Redux', isDone: true }
  ]

  let tasks2: Array<TasksType> = [
    { id: 1, title: 'Terminator', isDone: true },
    { id: 2, title: 'Avatar', isDone: true },
    { id: 3, title: 'The Good the Bad and the Ugly', isDone: true }
  ]

  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks1} />
      <Todolist title='Movies' tasks={tasks2} />
    </div>
  );
}


export default App;
