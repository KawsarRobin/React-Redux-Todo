import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTodos from './components/DisplayTodos';
import Todos from './components/Todos';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App By T-4</h1>
      {/* <motion.h1
        initial={{ y: -200 }} 
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
       
      </motion.h1> */}
      {/* <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1 }}
      >
      </motion.div> */}
      <Todos />
      <DisplayTodos />
    </div>
  );
}

export default App;
