import { Link, Route,Routes } from 'react-router-dom';
import Login from "./Pages/Login/Login.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/login' element={<Login/>} />         
        </Routes>
        <button><Link to="/login">To Login</Link></button>
      </header>
    </div>
  );
}

export default App;
