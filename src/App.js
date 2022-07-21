import './App.css';
import React, {useEffect, useState} from 'react';
import profileImg from './img/myself.jpg'
import logo from './img/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as d3 from 'd3';
import data from './data.csv'
import Papa from 'papaparse'

function App() {
  // let d = {}
  // d3.csv(data, function(data) {
  //   // dict[[data['make a choice']]] = data['faire un choix']
  //   let key = "make a choice"
  //   let val = 'faire un choix'
  //   Object.assign(d, {[data[key]]: data[val]})
  //   setDict(d)
  // })

  let dict = {
    "make a choice": "faire un choix",
    'make an offer':'faire une offre',
    'make a commitment':'prendre un engagement',
    'make one\'s escape':'prendre la fuite',
  }


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
