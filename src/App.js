import './App.css';
import profileImg from './img/myself.jpg'
import logo from './img/logo.png'

function App() {
  return (
    <div className='App'>
      <div className="navbar navbar-light">
        <img src = {logo} id='logo'></img>
      </div>

      <div className='content'>
        <h2> Creator: 大聪明</h2>
        <p> ⬇️</p>
        <img src = {profileImg} id='profile'></img>
        
      </div>
    </div>
    
  );
}

export default App;
