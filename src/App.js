import './App.css';
import profileImg from './img/myself.jpg'
import logo from './img/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='App'>
      <div className="navbar navbar-light">
        <img src = {logo} id='logo'></img>
      </div>

      <div className='content'>
        {/* <h2> Creator: 大聪明</h2>
        <p> ⬇️</p> */}
        {/* <img src = {profileImg} id='profile'></img> */}

        <Form>
          <Form.Group className="mb-3" controlId="search bar">
            <Form.Label>Enter an English word</Form.Label>
            <Form.Control type="email" placeholder="Enter word here" />
          </Form.Group>
        </Form>
      </div>
    </div>
    
  );
}

export default App;
