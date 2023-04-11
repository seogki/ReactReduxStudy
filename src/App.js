import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './components/TodosContainer';
function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
