import Navbar from './components/styles/Navbar';
import { BrowserRouter, Route } from "react-router-dom"
import Routes from './routes/Routes';
import { ContextTodo } from './context/ContextTodo';


function App() {
  return (
    <>

      <BrowserRouter>
        <ContextTodo>
          <Navbar />
          <Routes></Routes>
        </ContextTodo>
      </BrowserRouter>

    </>
  );
}

export default App;
