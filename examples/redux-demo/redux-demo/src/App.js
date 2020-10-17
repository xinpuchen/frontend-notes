import React from 'react'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import './index.css';

const App = () => (
  <div id="app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;