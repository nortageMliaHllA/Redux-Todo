import React, { Component } from 'react';
import AddTodo from "../src/containers/AddTodo";
import TodoList from "../src/containers/TodoList";
import './App.css';

const App = () => (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );

export default App;
