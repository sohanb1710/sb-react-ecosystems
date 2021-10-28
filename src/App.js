import { hot, setConfig  } from 'react-hot-loader';
import './App.css';
import TodoList from './todos/todolist';

setConfig({
  showReactDomPatchNotification: false
})

function App() {
  return (
    <div className = "App">
      <TodoList />
    </div>
  );
}

export default hot(module)(App);
