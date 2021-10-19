import { hot } from 'react-hot-loader';
import './App.css';
import TodoList from './todos/todolist';

function App() {
  return (
    <div className = "App">
      <TodoList />
    </div>
  );
}

export default hot(module)(App);
