import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App By T-4</h1>
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
