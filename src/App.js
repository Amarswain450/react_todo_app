import './App.css';
import Todos from './components/Todos';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <>
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </>
  );
}

export default App;
