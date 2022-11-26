import logo from './logo.svg';
import './App.css';
import NavBar from './navbar-component';
import Login from './login-component';
import Register from './register-component';

function App() {
  return (
    <div className="App">
      {/* <h1>Web Squad!</h1> */}
      <NavBar/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
